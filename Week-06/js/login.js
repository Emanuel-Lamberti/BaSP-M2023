var emailInput = document.getElementById("Email");
var textValidationEmail = document.getElementById("textValidationEmail");
var textValidationPassword = document.getElementById("textValidationPassword");

emailInput.onfocus = function() {
    emailInput.classList.add("green-border");
    emailInput.classList.remove("red-border");    
}

emailInput.onblur = function() {
    let emailValido = validationEmail();
    if(emailValido == true){
        emailInput.classList.remove("green-border");
        textValidationEmail.style.display = "none";
    }else{
        emailInput.classList.add("red-border");
        textValidationEmail.style.display = "block";
    }
}

var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var email;
var listEmail;
function validationEmail() {
    email = document.getElementById("Email").value;
    listEmail = email.split(".");
    if (
    validEmail.test(email) && 
    listEmail.pop().length >= 3 &&    
    email != null &&
    email.length > 0) {
        return true;
    } else {
        return false;
    }
}

var passwordInput = document.getElementById("Password");
passwordInput.onfocus = function() {
    passwordInput.classList.add("green-border");
    passwordInput.classList.remove("red-border");
}

passwordInput.onblur = function() {
    
    let passValido = validationPassword();
    if(passValido == true){
        passwordInput.classList.remove("green-border");
        textValidationPassword.style.display = "none";
    }else{
        passwordInput.classList.add("red-border");
        textValidationPassword.style.display = "block";
    }
}

var password;
function validationPassword() {
    password = document.getElementById("Password").value
    if (password.length >= 8 && password != null && isNaN(password) == true) {
        return true;
    } else {
        return false;
    }
}

var acceptBtn = document.getElementById("enter");
acceptBtn.onclick = function(event) {
    var emailValido = validationEmail();
    var passwordValido = validationPassword();
    if(emailValido && passwordValido){ 
        alert("Email: " + emailInput.value + "\nPassword: " + passwordInput.value);
    } else {
        if(emailValido == false){
            alert("Invalid email: " + emailInput.value);
        }
        if(passwordValido == false) {
            alert("Invalid password: " + passwordInput.value);
        }
    }
    event.preventDefault();
    console.log(emailInput.value);
    console.log(passwordInput.value);
}