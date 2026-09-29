package com.newco2.newcon2.Model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
@Entity
@Table(name = "user_mast")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Integer userId;
    @Column(name = "userName")
    private String userName;

    @Column(name = "password")
    @NotBlank(message = "Password is mandatory")
    @Size(min =6, max=20, message ="password should be between 6 or 20 characters")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[0-9]).*$",
    message = "Password must contain at least one uppercase letter and one digit")
    private String password;

    @Column(name = "emailId")
    private String emailId;
    
    public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


}