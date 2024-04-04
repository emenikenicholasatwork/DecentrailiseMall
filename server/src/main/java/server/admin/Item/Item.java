package server.admin.Item;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {

    private String name;
    private double price;
    private String description;
    private MultipartFile image;

}
