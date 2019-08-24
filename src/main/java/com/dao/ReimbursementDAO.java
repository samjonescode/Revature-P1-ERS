package com.dao;

import java.util.List;

import com.models.Reimbursement;

public interface ReimbursementDAO {
	
	//CREATE
	public boolean createReimbursement(Reimbursement r);
	
	//READ
	public Reimbursement selectReimById(int reimbId);
	public List<Reimbursement> selectAllReimbursements(Integer u_id);

	//UPDATE
	public int updateReimbursement();
	public int updateReimbursement(Reimbursement r);
	//DELETE
	public boolean deleteReimbursement(int reimbId);

}
