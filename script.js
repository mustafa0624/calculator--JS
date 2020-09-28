let topScreen = document.querySelector(".top_screen");
let bottomScreen = document.querySelector(".bottom_screen")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let operatorValue = ""

numbers.forEach(function (touch) {
    touch.addEventListener("click", () => {
        bottomScreen.innerText += touch.innerText
    })


})

operators.forEach(function (opr) {
    opr.addEventListener("click", () => {
        operatorValue = opr.innerText;

        computation(operatorValue);
       display();

    })
})


function computation(operatorValue) {
    if(topScreen.innerHTML == ""){return}
    switch (operatorValue) {
        case "+":
            bottomScreen.innerText = Number(bottomScreen.innerText) + Number(topScreen.innerText.slice(0, -2));
            break;

        case "-":
            bottomScreen.innerText = Number(topScreen.innerText.slice(0,-2)) - Number(bottomScreen.innerText);
            break;

        case "*":
            bottomScreen.innerText = Number(topScreen.innerText.slice(0,-2)) * Number(bottomScreen.innerText);

        case "/":
            bottomScreen.innerText = Number(topScreen.innerText.slice(0,-2)) / Number(bottomScreen.innerText);    
                


    }



}


function display(){
    topScreen.innerText = bottomScreen.innerText + " " + operatorValue;
        bottomScreen.innerText = "";

}


equal.addEventListener("click",()=>{
    computation(operatorValue);
    topScreen.innerText="";
})

ac.addEventListener("click",()=>{
    topScreen.innerText = "";
    bottomScreen.innerText="";

})

del.addEventListener("click",()=>{
    bottomScreen.innerText = bottomScreen.innerText.slice(0,-1)
})


