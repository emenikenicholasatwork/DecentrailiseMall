package server.services.adminService;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;

import server.admin.Item.Item;
import server.model.Product;
import server.model.User;

public interface AdminServiceInterface {

    void deleteItem(Long item);

    List<User> getAllUsers();

    ResponseEntity<String> addEntityImage(Item item);

    ResponseEntity<?> saveItem(Product product) throws IOException, Exception;
}
