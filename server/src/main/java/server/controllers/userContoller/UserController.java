package server.controllers.userContoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import server.model.User;
import server.model.UserDetails;
import server.services.userService.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/details")
    public UserDetails getUserDetails(@RequestParam String userId) {
        User user = userService.getUserProfile(userId);
        return UserDetails.builder()
                .name(user.getName())
                .email(user.getEmail())
                .username(user.getUsername())
                .build();
    }

}
