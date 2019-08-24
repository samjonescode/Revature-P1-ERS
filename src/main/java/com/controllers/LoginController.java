package com.controllers;

import javax.servlet.http.HttpServletRequest;

import com.dao.UserDAOImpl;
import com.models.User;

public class LoginController {
	
	public static String Login(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		UserDAOImpl udi = new UserDAOImpl();
		User user = new User();
		
		user = udi.selectUserByUsername(username);
		System.out.println("Username from html is: " + username);
		System.out.println("password in logincontroller, pulled from HTML is : " + password);
		if(user.getUserName().equals(username) && user.getPassWord().equals(password)) {
			System.out.println("Passwords match");
			request.getSession().setAttribute("User", user);
			int roleId = user.getRoleId();
			switch(roleId) {
			case 0:
				return "/html/employee-view-2.html";
			case 1: 
				return "/html/finance-manager.html";
			
			default:
				return "/html/Login.html";
			}
		}return "/html/Login.html";
		
	}
}
