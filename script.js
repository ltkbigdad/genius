const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");


function shuffleOrder () {
    let colorOrder =  Math.floor(Math.random() *4);
    console.log (colorOrder)

    if (colorOrder == 0) {        
        green.classList.add("game__pad--active")
        yellow.classList.remove("game__pad--active")
        red.classList.remove("game__pad--active")
        blue.classList.remove("game__pad--active")

      } 
      
      else if (colorOrder == 1) {         
        yellow.classList.add("game__pad--active")
        red.classList.remove("game__pad--active")
        blue.classList.remove("game__pad--active")  
        green.classList.remove("game__pad--active")
      } 
      
      else if (colorOrder == 2) {        
        red.classList.add("game__pad--active")
        blue.classList.remove("game__pad--active")  
        green.classList.remove("game__pad--active")
        yellow.classList.remove("game__pad--active")
      } 
      
      else if (colorOrder == 3) {        
        blue.classList.add("game__pad--active")
        green.classList.remove("game__pad--active")
        yellow.classList.remove("game__pad--active")
        red.classList.remove("game__pad--active")
      }
    // colorOrder()  
    setTimeout(() => {shuffleOrder()}, 700)
     
}

window.onload(shuffleOrder())



function test () {
     let usertxt = document.getElementById("textinput").value;
     localStorage.setItem('user', usertxt)
}

