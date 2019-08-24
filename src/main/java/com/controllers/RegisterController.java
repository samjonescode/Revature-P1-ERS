package com.controllers;

import javax.servlet.http.HttpServletRequest;

import com.dao.UserDAOImpl;
import com.models.User;

public class RegisterController {
	
	public static String Register(HttpServletRequest request) {
		
		//Integer userId = null;
		String userName = request.getParameter("usernameInput");
		String passWord = request.getParameter("passwordInput");
		String firstName = request.getParameter("firstnameInput");
		String lastName = request.getParameter("lastNameInput");
		String email = request.getParameter("emailInput");
		
		User user = new User();
		//user.setUserId(userId);
		user.setUserName(userName);
		user.setPassWord(passWord);
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setEmail(email);
		
		UserDAOImpl udi = new UserDAOImpl();
		udi.createUser(user);
		
		return "/html/Login.html";
		
		
		
	}
}
