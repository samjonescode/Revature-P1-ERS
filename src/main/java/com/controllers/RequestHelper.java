package com.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RequestHelper {
	
	public static String process(HttpServletRequest req, HttpServletResponse res) {
		switch(req.getRequestURI()) {
		case "/TestProj/html/Login.do":
			return LoginController.Login(req);
		case "/TestProj/html/Register.do":
			return RegisterController.Register(req);
		case "/TestProj/html/Employee-view.do":
			return EmployeeController.Home(req,res);
		case "/TestProj/html/Employee-add.do":
			return EmployeeController.Add(req);
		case "/TestProj/html/Employee-find.do":
			return EmployeeController.FindTickets(req,res);
		case "/TestProj/html/Finance-manager.do":
			return FinanceManagerController.FindAllTickets(req,res);
		case "/TestProj/html/Update.do":
			return FinanceManagerController.UpdateTicket(req);
//		case "/TestProj/html/ChangeView.do":
//			return FinanceManagerController.ChangeView(req,res);
		default:
			return "/html/Login.html";
		}
	}
}
