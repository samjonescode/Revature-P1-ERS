package com.dao;

import java.util.List;

import com.models.User;

public interface UserDAO {
	
	//CREATE
	public boolean createUser(User u);
	
	//READ
	public User selectUserById(Integer userId);
	public List<User> selectAllUsers();
	public User selectUserByUsername(String un);

	
	//UPDATE
	public int updateUser();
	
	//DELETE
	public boolean deleteUser(Integer userId);

}
