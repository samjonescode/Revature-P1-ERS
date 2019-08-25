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

public class FinanceManagerController {
public static String FindAllTickets(HttpServletRequest request, HttpServletResponse response) {
		
		// need to select tickets associated with the session user.
//		User user = (User)request.getSession().getAttribute("User");
		ReimbursementDAOImpl rdi = new ReimbursementDAOImpl();
//		user.getUserId()
		List<Reimbursement> reim = rdi.selectAllReimbursements();
		try {
			response.getWriter().write(new ObjectMapper().writeValueAsString(reim));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

public static String UpdateTicket(HttpServletRequest request) {
	//when manager clicks approve/deny on the panel,
	// they send a request to Update.do
	// update.do retrieves the Id of the author from the form
	// the daoimpl finds 
	String reimbId = request.getParameter("reimbIdInput");
	String action = request.getParameter("approveOrDenyInput");
	User u = (User)request.getSession().getAttribute("User");
//	System.out.println("Manager " + u.getFirstName() + " updated ticket " + reimbId +" to status of " + action);
	// need to parseint bcause all inputs from form come in as strings
	Integer reimbIdInt = Integer.parseInt(reimbId);
	ReimbursementDAOImpl rdi = new ReimbursementDAOImpl();
	Reimbursement ticketToUpdate = rdi.selectReimById(reimbIdInt);
	long millis = System.currentTimeMillis();
	Date resolvedAt = new Date(millis);
	System.out.println("STatus changing to: " + action);
	if(action.equals("approve")) {
		//submission time
				
		ticketToUpdate.setStatusId(1);
	} else if (action.equals("deny")) {
		ticketToUpdate.setStatusId(2);
	}
	ticketToUpdate.setResolver(u.getUserId());
	ticketToUpdate.setResolved(resolvedAt);
	System.out.println("Ticket to update from inside contoller: " + ticketToUpdate.toString());
//	Reimbursement updatedTick = rdi.selectReimById(reimbIdInt); 
	rdi.updateReimbursement(ticketToUpdate);
	
	return "/html/finance-manager.html";
}

//public static String ChangeView(HttpServletRequest request, HttpServletResponse response) {
//	
//}
//public static String ApproveTicket()
//public static ... DenyTicket

//public void sendEmail(String emailAddress) {
//	String em = "samuelriley1393@gmail.com";
//	
//}
}
