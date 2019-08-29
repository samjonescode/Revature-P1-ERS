window.onload = function(e){
    getTickets();
}
function getTickets(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:8080/TestProj/html/Finance-manager.do",true);
	xhr.send();
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState==4 && xhr.status==200){
//			console.log(xhr.response)
//			console.log(JSON.stringify(xhr.response))
//			let pretickets = JSON.stringify(xhr);
//			console.log(pretickets);
			let tickets = xhr.responseText;
			tickets = (JSON.parse(tickets))
			console.log(tickets);
//			console.log(tickets.length)
			// appendReimbursement(tickets);
			setValues(tickets)
			return tickets;
		}
	}
}

function setValues(array){
    let table = document.getElementById('tableau')
        let row = table.insertRow(table.rows.length)
        for(i=0;i<array.length;i++){
        	console.log(array[i].author);
//            for (var prop in array[i]) {
//                if (Object.prototype.hasOwnProperty.call(array[i], prop)) {
//                    console.log(array[i])
//                    // do stuff
//                }
//            }
        	let newRow =  table.insertRow(i+1).innerHTML = JSON.stringify(array[i].author)
        	for(j=0;j<8;j++){
        		newRow.insertCell(j).innerHTML(array[i].author) 
        	}
        }
}