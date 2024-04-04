package server.services;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import server.model.Product;
import server.repository.ProductRepository;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product getProduct(Long productId) {
        return productRepository.findById(productId).get();
    }

}
