let signin=document.getElementById("signup");
let email=document.getElementById("email");
let password=document.getElementById("password");

signin.addEventListener("click",change);
function change(){
    if(email.value==""){
        alert("Please enter your name");
    }else if(password.value==""){
        alert("please enter your password");
    }
}