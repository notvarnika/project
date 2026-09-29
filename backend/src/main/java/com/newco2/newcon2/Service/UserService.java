package com.newco2.newcon2.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newco2.newcon2.DTO.UserDTO;
import com.newco2.newcon2.Model.UserModel;
import com.newco2.newcon2.Repo.UserRepo;

@Service

public class UserService {
	@Autowired
	private UserRepo userRepo;
		public UserService (UserRepo userRepo) {
			this.userRepo = userRepo;
		}
		 public UserDTO getUserByUserName(String userName) {
		        return userRepo.findUserDTOByUserName(userName);
		    }
		public String addUser(UserModel user) {
			if(userRepo.findUserDTOByEmail(user.getEmailId())!=null) {
				return "user alr exists";
			}
			userRepo.save(user);
			return "User Registered Successfully";
	    }
		public UserDTO loginUser(String email, String password) {
			UserModel user = userRepo.findByEmailId(email);
			if (user == null || !password.equals(user.getPassword())) {
		        return null; 
		    }
		return new UserDTO(user.getUserId(), user.getEmailId(), user.getPassword(), user.getUserName());
			
		}
		
		
		public UserDTO getUserByEmail(String email) {
		        return userRepo.findUserDTOByEmail(email);
		    }

		public List<UserDTO> getAllUsers() {
		        return userRepo.findAllUserDTO();
		    }
		 public UserDTO getUserById(Integer id) {
		        return userRepo.findUserDTOById(id);
		    }

		   

}
