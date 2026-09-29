package com.newco2.newcon2.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.newco2.newcon2.DTO.UserDTO;
import com.newco2.newcon2.Model.UserModel;

public interface UserRepo extends JpaRepository<UserModel, Integer> {
	
	UserModel findByEmailId(String emailId);

    @Query("SELECT new com.newco2.newcon2.DTO.UserDTO(u.userId, u.emailId, u.password, u.userName) " +
           "FROM UserModel u WHERE u.userName = :userName")
    UserDTO findUserDTOByUserName(@Param("userName") String userName);

    @Query("SELECT new com.newco2.newcon2.DTO.UserDTO(u.userId, u.emailId, u.password, u.userName) " +
           "FROM UserModel u WHERE u.emailId = :email")
    UserDTO findUserDTOByEmail(@Param("email") String email);

    @Query("SELECT new com.newco2.newcon2.DTO.UserDTO(u.userId, u.emailId, u.password, u.userName) " +
           "FROM UserModel u")
    List<UserDTO> findAllUserDTO();

   
    @Query("SELECT new com.newco2.newcon2.DTO.UserDTO(u.userId, u.emailId, u.password, u.userName) " +
           "FROM UserModel u WHERE u.userId = :id")
    UserDTO findUserDTOById(@Param("id") Integer id);
}
