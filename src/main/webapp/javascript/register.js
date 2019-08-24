// emailInput.addEventListener("change", function(){
// 	alert(emailInput.value)
// })

// let usernameInput = document.getElementById("usernameInput")
// usernameInput.addEventListener("change", function(){
// 	alert(usernameInput.value)
// })
// import {cardsHover, navHover} from "employee";

// navHover()


let fancyRadios = document.getElementsByClassName("fancy-radios");

let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
option1.addEventListener("click", function(){
   option2.classList.remove("rounded-circle");
   option1.classList.add("rounded-circle")
})
option2.addEventListener("click", function(){
 option2.classList.add("rounded-circle")
 option1.classList.remove("rounded-circle")
})
function getFancyRadios(){
  let checked=""
  for(i=0;i<fancyRadios.length;i++){
    console.log(fancyRadios[i].value)
    if(fancyRadios[i].checked){
    checked += fancyRadios[i].value
    }
  }
  // console.log(checked)
  return checked;
}
let signUpForm = document.getElementById("registerForm");
signUpForm.addEventListener("submit", function(e){
 // e.preventDefault() // prevents the page from reloading on form-submittal
	//alert("Form submitted")
  let email = document.getElementById("emailInput").value
  let username = document.getElementById("usernameInput").value
  let password = document.getElementById("passwordInput").value
  let firstName = document.getElementById("firstNameInput").value
  let lastName = document.getElementById("lastNameInput").value
  let checked = getFancyRadios();
let userObj = {}


// let radios = document.getElementsByName("exampleRadios")
// let checked = ""
//   for(i=0;i<radios.length;i++){
//     if(radios[i].checked){
//     checked += radios[i].value
//     }
//   }

  userObj.username = username;
  userObj.password = password;
  userObj.firstname = firstName;
  userObj.lastname = lastName;
  userObj.email = email;
userObj.user_type = checked;
//alert(JSON.stringify(userObj))
console.log(userObj)

// ,passwordInput,firstname,lastname);

})


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

// function cardsHover(){
//   for(let i = 0; i<cards.length;i++){
  
//   cards[i].addEventListener("mouseenter",function(){
//     this.style.opacity = 1;
//   })

//   cards[i].addEventListener("mouseleave",function(){
//     this.style.opacity = .6;
//   })
// }
// }
// cardsHover()