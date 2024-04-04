package server.services.userService;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import server.model.User;
import server.repository.userRepository.UserRepository;
import server.services.ServiceInterface;

@Service
@RequiredArgsConstructor
public class UserService implements ServiceInterface {

    @Value("${encryption.key}")
    private String key;

    private final UserRepository userRepository;

    public User getUserProfile(String email) {
        return userRepository.findByEmail(email).get();
    }

}
