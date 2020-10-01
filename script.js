let topScreen = document.querySelector(".top_screen");
let bottomScreen = document.querySelector(".bottom_screen");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");
let buttons = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let operatorValue = "";



buttons.forEach((items) => {
    items.addEventListener("click", () => {
        if (items.innerHTML == "." && bottomScreen.innerHTML=="."){return}
        bottomScreen.innerHTML += items.innerHTML
    })
})




operators.forEach(values => {
    values.addEventListener("click", () => {
        
        if(bottomScreen.innerHTML=="" && values.innerText=="-") {return bottomScreen.innerHTML="-"}
        // 
        // if (operatorValue != "") { operatorValue = topScreen.innerText.slice(-1) }
    


        Calculator(operatorValue);
        operatorValue = values.innerText;
        topScreen.innerHTML = bottomScreen.innerHTML + " " + values.innerHTML;
        bottomScreen.innerHTML = ""
        // if(bottomScreen.innerHTML === ""){

        //     topScreen.innerHTML.slice(0,-2) = 0;
    
        // }
        


    })

})



function Calculator() {
    
    switch (operatorValue) {
        case "+":
            bottomScreen.innerHTML = Number(bottomScreen.innerHTML) + Number(topScreen.innerHTML.slice(0, -2))
            break;

        case "-":
            bottomScreen.innerHTML =   Number(topScreen.innerHTML.slice(0, -2)) - Number(bottomScreen.innerHTML);   
            break;
   
        case "*":
            bottomScreen.innerHTML  =   Number(topScreen.innerHTML.slice(0, -2)) * Number(bottomScreen.innerHTML);
            break;

        case "/":
            bottomScreen.innerHTML  =   Number(topScreen.innerHTML.slice(0, -2)) / Number(bottomScreen.innerHTML);
            break;

        }

       

}



ac.addEventListener("click",()=>{
    topScreen.innerHTML = "";
    bottomScreen.innerHTML= "";
})

equal.addEventListener("click",()=>{
    Calculator()
    topScreen.innerHTML="";
})

del.addEventListener("click",()=>{
    bottomScreen.innerHTML = bottomScreen.innerHTML.slice(0,-1)
})


































// let topScreen = document.querySelector(".top_screen");
// let bottomScreen = document.querySelector(".bottom_screen")
// let numbers = document.querySelectorAll(".number");
// let operators = document.querySelectorAll(".operator");
// let ac = document.querySelector(".ac");
// let del = document.querySelector(".del");
// let equal = document.querySelector(".equal");
// let operatorValue = ""

// numbers.forEach(function (touch) {
//     touch.addEventListener("click", () => {
//         if (bottomScreen.innerHTML.includes(".") && touch.innerHTML == ".") {return }

//         bottomScreen.innerText += touch.innerText;

//     })


// })

// operators.forEach(function (opr) {
//     opr.addEventListener("click", () => {
//         if (bottomScreen.innerText == "" && opr.innerText == "-") {
//             bottomScreen.innerText = "-";
//             return
//         }
//         if (operatorValue != "") { operatorValue = topScreen.innerText.slice(-1) }


//         computation(operatorValue);
//         operatorValue = opr.innerText;
//         display();

//     })
// })


// function computation(operatorValue) {
//     // if (topScreen.innerHTML == "") { return }
//     switch (operatorValue) {
//         case "+":
//             bottomScreen.innerText = Number(bottomScreen.innerText) + Number(topScreen.innerText.slice(0, -2));
//             break;

//         case "-":
//             bottomScreen.innerText = Number(topScreen.innerText.slice(0, -2)) - Number(bottomScreen.innerText);
//             break;

//         case "*":
//             bottomScreen.innerText = parseFloat(topScreen.innerText.slice(0, -2)) * parseFloat(bottomScreen.innerText);
//             break;

//         case "/":
//             bottomScreen.innerText = Number(topScreen.innerText.slice(0, -2)) / Number(bottomScreen.innerText);
//             break;


//     }



// }


// function display() {
//     topScreen.innerText = bottomScreen.innerText + " " + operatorValue;
//     bottomScreen.innerText = "";

// }


// equal.addEventListener("click", () => {
//     computation(operatorValue);
//     topScreen.innerText = "";
// })

// ac.addEventListener("click", () => {
//     topScreen.innerText = "";
//     bottomScreen.innerText = "";

// })

// del.addEventListener("click", () => {
//     bottomScreen.innerText = bottomScreen.innerText.slice(0, -1)
// })


