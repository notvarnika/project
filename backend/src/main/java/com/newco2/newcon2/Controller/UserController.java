package com.newco2.newcon2.Controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newco2.newcon2.DTO.UserDTO;
import com.newco2.newcon2.Model.UserModel;
import com.newco2.newcon2.Service.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UserController {

	private final UserService userService;
	
	public UserController (UserService userService) {
		this.userService= userService;
	}
	
	 	@PostMapping("/addUser")
	    public ResponseEntity<String> createUser(@RequestBody UserModel user) {
	        return ResponseEntity.ok(userService.addUser(user));
	    }
	 	
	 	@PostMapping("/login")
	 	public ResponseEntity<?> login(@RequestBody UserModel user) {
	 	    UserDTO authenticatedUser = userService.loginUser(user.getEmailId(), user.getPassword());
	 	    
	 	    if (authenticatedUser == null) {
	 	        return ResponseEntity.status(401).body("Invalid email or password");
	 	    }
	 	    
	 	    return ResponseEntity.ok(authenticatedUser);
	 	}
	 	@GetMapping("/{id}")
	    public UserDTO getUserById(@PathVariable Integer id) {
	        return userService.getUserById(id);
	    }

	    @GetMapping("/email/{email}")
	    public UserDTO getUserByEmail(@PathVariable String email) {
	        return userService.getUserByEmail(email);
	    }

	    @GetMapping("/username/{userName}")
	    public UserDTO getUserByUserName(@PathVariable String userName) {
	        return userService.getUserByUserName(userName);
	    }

	    @GetMapping
	    public List<UserDTO> getAllUsers() {
	        return userService.getAllUsers();
	    }
	}