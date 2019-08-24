window.onload = function(e){
	getTickets();
	getUserInfo();
}

function getUserInfo(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:8080/TestProj/html/Employee-view.do",true);
	xhr.send();
	
	xhr.onreadystatechange = function(){
		let user = JSON.parse(xhr.responseText);
		console.log(user)
		setValues(user);
	}
}
function getTickets(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:8080/TestProj/html/Employee-find.do",true);
	xhr.send();
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState==4 && xhr.status==200){
//			console.log(xhr.response)
//			console.log(JSON.stringify(xhr.response))
//			let pretickets = JSON.stringify(xhr);
//			console.log(pretickets);
			let tickets = xhr.responseText;
			tickets = (JSON.parse(tickets))
//			console.log(tickets.length)
			appendReimbursement(tickets);
		}
	}
}
let form = document.getElementById("reimbursementForm")
let fancyRadios = document.getElementsByClassName("fancy-radios")
function getFancyRadios(){
    let checked=""
    for(i=0;i<fancyRadios.length;i++){
      if(fancyRadios[i].checked){
      checked += fancyRadios[i].value
      }
    }
    // console.log(checked)
    return checked;
  }
form.addEventListener("submit", function(e){
  //  e.preventDefault()
    let description = document.getElementById("descriptionInput").value;
    let reimburse_amount = document.getElementById("reimbursement-amount").value
    let reimbursement_type = getFancyRadios();

    let reimbursement = {}
    reimbursement.description = description;
    reimbursement.amount = reimburse_amount;
    reimbursement.type = reimbursement_type;
    // alert(reimbursement)
    console.log(reimbursement)
    appendReimbursement(reimbursement)
})

function addListeners(){
    let option1 = document.getElementById("option1")
    let option2 = document.getElementById("option2")
    let option3 = document.getElementById("option3")
    let option4 = document.getElementById("option4")
    option1.addEventListener("click", function(){
       option2.classList.remove("rounded-circle");
       option3.classList.remove("rounded-circle")
       option4.classList.remove("rounded-circle")
       option1.classList.add("rounded-circle")
    })
    option2.addEventListener("click", function(){
      option1.classList.remove("rounded-circle")
      option3.classList.remove("rounded-circle")
      option4.classList.remove("rounded-circle")
     option2.classList.add("rounded-circle")
    })
    
    option3.addEventListener("click", function(){
      option1.classList.remove("rounded-circle")
      option2.classList.remove("rounded-circle")
      option4.classList.remove("rounded-circle")
     option3.classList.add("rounded-circle")
    })
  
    
    option4.addEventListener("click", function(){
      option1.classList.remove("rounded-circle")
      option2.classList.remove("rounded-circle")
      option3.classList.remove("rounded-circle")
     option4.classList.add("rounded-circle")
    })
  
  }
  addListeners()
  
//  function setValues(data){
//	  
//  }
// <img src="${reimbursement.image}">
  function appendReimbursement(tickets){
	  let ts = new Date();
	  let status ="";
	  let statusEle;
	  for(i=0; i<tickets.length;i++){
		  if(tickets[i].statusId=="0"){
				status = "Pending";
				statusEle = `<div class='border border-danger small-border-box'> ${status} </div> `;
			} else {
				status = "Approved";
				statusEle = `<div class='border border-primary small-border-box'> ${status} </div> `;
				
			}
		  let date = ts.toDateString(tickets[i].submitted)
		  let longCard = `<div class="card text-center ticket-panel panel" style="width: 60rem;">
			  <div class="card-body">
			  ${statusEle}
			  <h5 class="card-title">$${tickets[i].amount}</h5>
			  <h6 class="card-subtitle mb-2 text-muted"><b> Ticket ID: </b> ${tickets[i].reimbId}</h6>
			  <button  class="btn btn-warning expand-description-btn rounded desc-btn" data-toggle="collapse" data-target = "#${'panel' + i}"> Description </button>
              <div style="height:30px" class="text-center collapse description-panel" id="${'panel' + i}"> 
                
			  <p class="card-text"> <b>Description:</b> ${tickets[i].description}</p>
			  <p class="card-text border> Created at: ${tickets[i].submitted} | date </p>
			  </div>
			  </div>
			  </div>`;
//		  let ticketsTable = document.getElementById("tickets-table");
//		  let row = ticketsTable.insertRow(0);
////		  let cell = row.insertCell()
//		  row.innerHTML = longCard;
		  let ticketArea = document.getElementById("tickets")
//		  ticketArea.innerHTML = longCard;
//		  ticketArea.prepend(longCard);
		  ticketArea.insertAdjacentHTML('beforebegin', longCard );
		  
	  }


  }
  
  function setValues(user){
	  document.getElementById("username").innerHTML = user.userName;
	  document.getElementById("firstname").innerHTML = user.firstName;
	  document.getElementById("lastname").innerHTML = user.lastName;
	  document.getElementById("userid").innerHTML = user.userId;

  }
  