package server.auth;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import server.config.JwtService;
import server.model.Role;
import server.model.User;
import server.repository.userRepository.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;

        public ResponseEntity<?> register(RegisterRequest request) {
                var checkedUser = userRepository.findByEmail(request.getEmail());
                if (checkedUser.isPresent()) {
                        return new ResponseEntity<>("account with email already axist", HttpStatus.FOUND);
                }
                var user = User.builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .created(LocalDate.now())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER)
                                .build();
                var jwtToken = jwtService.generateToken(user);
                userRepository.save(user);

                var token = AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
                return new ResponseEntity<>(token, HttpStatus.OK);
        }

        public ResponseEntity<?> authenticate(AuthenticationRequest request) {
                Optional<User> checkUser = userRepository.findByEmail(request.getEmail());
                if (!checkUser.isPresent()) {
                        return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
                }
                if (passwordEncoder.matches(request.getPassword(), checkUser.get().getPassword())) {
                        var jwtToken = jwtService.generateToken(checkUser.get());
                        var token = AuthenticationResponse.builder()
                                        .token(jwtToken)
                                        .build();
                        return new ResponseEntity<>(token, HttpStatus.OK);
                } else {
                        return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
                }
        }

}
