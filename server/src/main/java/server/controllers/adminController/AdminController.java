package server.controllers.adminController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import server.model.Product;
import server.model.User;
import server.services.adminService.AdminUserService;
import server.services.adminService.ItemService;

@RestController
@RequestMapping(path = "/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ItemService itemService;
    private final AdminUserService adminUserService;

    @Value("${encryption.images}")
    private String path;

    @PostMapping(value = "/item/add")
    public ResponseEntity<?> addNewProduct(@RequestParam Map<String, String> requestParaMap) throws Exception {
        String name = requestParaMap.get("name");
        String price = requestParaMap.get("price");
        String description = requestParaMap.get("description");
        String image = requestParaMap.get("image");
        return itemService.saveItem(Product
        .builder()
        .name(name)
        .description(description)
        .price(Float.parseFloat(price))
        .image(image)
        .build());
    }

    @GetMapping("/users/all")
    public List<User> getAllUsers() {
        return adminUserService.getAllUsers();
    }

    @GetMapping("/item/all")
    public List<Product> getProducts() throws Exception {
        return adminUserService.getAllProducts();
    }

    @DeleteMapping("/delete/item")
    public List<Product> deleteProducts(@RequestParam Long productId) throws Exception {
        adminUserService.deleteItem(productId);
        return adminUserService.getAllProducts();
    }
}
