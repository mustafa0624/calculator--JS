let topScreen = document.querySelector(".top_screen");
let bottomScreen = document.querySelector(".bottom_screen")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let operatorValue = ""

numbers.forEach(function(touch){
    touch.addEventListener("click", () => {
        bottomScreen.innerText += touch.innerText})
        

})

operators.forEach(function(opr){
    opr.addEventListener("click",() => {
        operatorValue = opr.innerText;
        
        computation(operatorValue);
        display();
        
       
        })
})


function computation(operatorValue){
    if(topScreen.innerHTML == ""){return}
   switch(operatorValue){
       case "+":
        topScreen.innerText += Number(bottomScreen.innerText) + Number(topScreen.innerText.slice(0,-2));
   }

   

}



function display(){
    topScreen.innerText = bottomScreen.innerText + " " + operatorValue;
        bottomScreen.innerText = "";

}

