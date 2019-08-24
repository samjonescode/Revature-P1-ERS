
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
	//e.preventDefault()
	let username = document.getElementById("usernameInput").value
	let password = document.getElementById("passwordInput").value

	let userObj = {}
	userObj.username = username;
	userObj.password = password;
//	alert("password is " + password);
	console.log(userObj)

})

// the code below should really be in a module
let navLinks = document.getElementsByClassName("nav-link")
let cards = document.getElementsByClassName("card")

function navHover(){
  for(let i = 0; i<navLinks.length;i++){
    // console.log(item)
  
   
    navLinks[i].addEventListener("mouseenter",function(){
      this.style.opacity = 1;
    })
    
    
  
    navLinks[i].addEventListener("mouseleave", function(){
      this.style.opacity = .6;
    })
  }
}
navHover()

function cardsHover(){
  for(let i = 0; i<cards.length;i++){
  
  cards[i].addEventListener("mouseenter",function(){
    this.style.opacity = 1;
  })

  cards[i].addEventListener("mouseleave",function(){
    this.style.opacity = .6;
  })
}
}
cardsHover()