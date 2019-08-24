/**
 * 
 */

window.onload = function(e){
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:8080/TestProj/html/Finance-manager.do", true);
	xhr.send()
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			let ticks = JSON.parse(xhr.responseText);
			console.log(ticks);
			let date = new Date()
			console.log("toDateString: " + date.toDateString(ticks[1].submitted))
			console.log("toLocaleString: " + date.toLocaleString(ticks[1].submitted))
			appendTickets(ticks);
		}
	}
}

function getSubmissionDate(timestamp){
	let date = new Date(timestamp*1000);
	let hours = date.getHours();
	let minutes = "0" + date.getMinutes();
	let seconds = "0" + date.getSeconds();
	let dateSub = date.getDate();
	
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = date.getFullYear();
	  var month = months[date.getMonth()];
	 console.log("Month: " + month)
	 console.log("Year: " + year)
	let formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2) + " on " + month + dateSub + year;
//	return formattedTime
	 console.log(new Date(timestamp * 1e3).toISOString())
	return new Date(timestamp * 1e3).toISOString().slice(-13, -5);
}
	function appendTickets(array){
		let ticketDiv = document.getElementById("ticketDiv");
		
		for(i=0;i<array.length;i++){
			let submittedAt = getSubmissionDate(array[i].submitted); 
			
			console.log(array[i].reimbId)
			let status = "";
			let statusEle;
			if(array[i].statusId=="0"){
				status = "Pending";
				statusEle = `<div class='border border-danger small-border-box'> ${status} </div> `;
			} else {
				status = "Approved";
				statusEle = `<div class='border border-primary small-border-box'> ${status} </div> `;
				
			}
			let card = `    <div class="card center text-center col-lg-10 panel" style="width: 60rem">
                <small> Reimbursement </small>
            <div class="card-body text-center">
            ${statusEle}
			       <button  class="btn btn-warning expand-description-btn rounded desc-btn" data-toggle="collapse" data-target = "#${'panel' + i}"> Details </button>
                <form action="Update.do" method="POST">
			<input type="hidden" name="reimbIdInput" value='${array[i].reimbId}'> 
			      
                <div style="height:30px" class="text-center collapse description-panel" id="${'panel' + i}"> 
                        <div class="container text-center">
                        <div class="row text-center">
                        <div class="col-md-1">
                        <div class="ticket-info border border-success">
                        <div class="card-title small-border-box box-text col-sm">
					Author ID: ${array[i].author}
					<hr>
                </div>
                <div  class=" small-border-box box-text"> Amount: ${array[i].amount} <hr> </div>
                <div class="small-border-box box-text"> Submitted: ${submittedAt} </div>
                </div> 
                </div>
                <div class="col-md-6 ticket-description-panel">
                        <label style="margin-top:15px;"> Description </label>
                                <p class="description" style="margin-top:8px;">${array[i].description}</p>
				</div>
				</div>
				</div>
				<div class="row center">
                            <div class="btn-group-toggle radios" data-toggle="buttons">
                         <label class="btn btn-danger">  
                        <input type="radio" value="deny" name="approveOrDenyInput"class="btn btn-danger approve-deny-btn"> Deny
                         </label>
                           <label class="btn btn-success">  
                       
                         <input type="radio" value="approve" name="approveOrDenyInput"  class="btn btn-success approve-deny-btn"> Approve
                         </label>
                         </div>
				<div class="modal-footer" style="text-align:center;">
				
				<input type="submit" style="display:inline-block;"class="btn btn-primary center">
				</div>
                    </div>   
				</form>
                
                </div>
            </div> `

			
			ticketDiv.insertAdjacentHTML("beforebegin", card); 
		}
					
		
		
	}
	
