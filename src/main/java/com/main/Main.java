package com.main;

import com.dao.UserDAOImpl;
import com.models.User;

public class Main {

	public static void main(String[] args) {
		User u2 = new User(2, "userTest2", "passTest2", "firstTest2", "lastTest2", "email2@Test", 0);
		UserDAOImpl udao = new UserDAOImpl();
		User u = udao.selectUserById(1);
		System.out.println(u.toString());
		System.out.println("Done");
		
		udao.createUser(u2);
		
	}

}
