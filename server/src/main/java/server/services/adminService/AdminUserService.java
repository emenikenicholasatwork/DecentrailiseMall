package server.services.adminService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import server.admin.Item.Item;
import server.model.Product;
import server.model.User;
import server.repository.userRepository.UserRepository;

@RequiredArgsConstructor
@Service
public class AdminUserService implements AdminServiceInterface {

    private final UserRepository userRepository;
    private final ItemService itemService;

    @Override
    public void deleteItem(Long productId) {
        itemService.deleteItem(productId);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public ResponseEntity<String> addEntityImage(Item item) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addEntityImage'");
    }

    @Override
    public ResponseEntity<?> saveItem(Product product) {
        return null;
    }

    public List<Product> getAllProducts() throws Exception {
        return itemService.getAllProducts();
    }

}
