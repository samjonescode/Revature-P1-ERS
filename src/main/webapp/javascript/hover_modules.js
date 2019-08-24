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
//   navHover()
  
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
//   cardsHover()
 // export function navHover();
 // export function cardsHover();