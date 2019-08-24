package com.controllers;

import java.io.IOException;
import java.sql.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.ReimbursementDAOImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.models.Reimbursement;
import com.models.User;

public class EmployeeController {
//create reimbursement tickets 
// select them
	public static String Home(HttpServletRequest request, HttpServletResponse response) {
		
		User user = (User)request.getSession().getAttribute("User");
		
		try {
			response.getWriter().write(new ObjectMapper().writeValueAsString(user));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	public static String Add(HttpServletRequest request) {
		Reimbursement reimbursement = new Reimbursement();
		Double amountDbl = Double.parseDouble(request.getParameter("amountInput"));
		System.out.println("This is the status Id for the tick: " + request.getParameter("statusInput"));
		Integer statusId = Integer.parseInt(request.getParameter("statusInput"));
		User user = (User)request.getSession().getAttribute("User");
		
		//submission time
		long millis = System.currentTimeMillis();
		Date date = new Date(millis);
		
		reimbursement.setAmount(amountDbl);
		reimbursement.setSubmitted(date);
		reimbursement.setResolved(null);
		reimbursement.setDescription(request.getParameter("reimbursementInput"));
		reimbursement.setReceipt(null);
		reimbursement.setResolver(1021);
		System.out.println("User id(Author): " + user.getUserId());
		reimbursement.setAuthor(user.getUserId());
		reimbursement.setStatusId(0);
		reimbursement.setTypeId(statusId);
		ReimbursementDAOImpl rdi = new ReimbursementDAOImpl();
		rdi.createReimbursement(reimbursement);
		
		return "/html/employee-view-2.html";
	}
	
	public static String FindTickets(HttpServletRequest request, HttpServletResponse response) {
		
		// need to select tickets associated with the session user.
		User user = (User)request.getSession().getAttribute("User");
		ReimbursementDAOImpl rdi = new ReimbursementDAOImpl();
//		user.getUserId()
		List<Reimbursement> reim = rdi.selectAllReimbursements(user.getUserId());
		try {
			response.getWriter().write(new ObjectMapper().writeValueAsString(reim));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	
}
