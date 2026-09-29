package com.newco2.newcon2.DTO;
public class UserDTO {
	private Integer userId;
	private String emailId;
	private String password;
	private String userName;
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	public UserDTO(Integer userId, String emailId, String password, String userName) {
	    this.userId = userId;
	    this.emailId = emailId;
	    this.password = password;
	    this.userName = userName;
	}

	 public UserDTO() {}
	 
}
