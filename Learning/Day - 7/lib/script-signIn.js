

const requiredId = "21181617018";
const requiredPassword =  "aslanamca";
let loginState = false;

loginState = localStorage.getItem("loginState");

const checkSignIn = () => { 
    
    let id = document.getElementById("loginInputID").value;
    let password = document.getElementById("loginInputPassword").value;

    if(id == requiredId && password == requiredPassword){
        loginState = true;
        localStorage.setItem("loginState", true);
        window.location.href = "index.html";
    }
    else{
        alert("Wrong values!");
    }

}