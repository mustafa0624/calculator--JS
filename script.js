document.getElementsByClassName("button").addEventListener("click",screen());
var deger = document.getElementsByClassName("button").value;

function screen(){

    document.getElementById("form-input").innerHTML=deger;
}



