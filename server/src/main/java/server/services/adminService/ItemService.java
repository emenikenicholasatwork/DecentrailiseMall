package server.services.adminService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import server.admin.Item.Item;
import server.components.ImageService;
import server.model.Product;
import server.model.User;
import server.repository.ProductRepository;

@Service
@RequiredArgsConstructor
public class ItemService implements AdminServiceInterface {

        private final ProductRepository productRepository;

        @Value("${encryption.key}")
        private String key;

        @Value("${encryption.images}")
        private String imageLocation;

        @Override
        public void deleteItem(Long productId) {
                var product = productRepository.findById(productId).get();
                ImageService.deleteEncryptedImages(product.getImage());
                productRepository.deleteById(productId);
        }

        @Override
        public List<User> getAllUsers() {
                return null;
        }

        @Override
        public ResponseEntity<String> addEntityImage(Item item) {
                return null;
        }

        @Override
        public ResponseEntity<?> saveItem(Product product) throws Exception {
                return new ResponseEntity<>(productRepository.save(Product
                .builder()
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .image(ImageService.saveImageBytes(ImageService.encryptImage(product.getImage().getBytes(), ImageService.getKey(key))))
                .build()), HttpStatus.OK);
        }

        public List<Product> getAllProducts() throws Exception {
                List<Product> products = productRepository.findAll();
                List<Product> newProducts = new ArrayList<>();
                for (Product p : products) {
                        String imagePath = p.getImage();
                        p.setImage(ImageService
                                        .decodeImageBytes(ImageService.decryptImage(
                                                        ImageService.loaderImageBytes(imagePath),
                                                        ImageService.getKey(key))));
                        newProducts.add(p);
                }
                return newProducts;
        }

}
