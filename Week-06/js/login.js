var emailInput = document.getElementById("Email");
emailInput.onfocus = function() {
    emailInput.classList.add("green-border");
}

emailInput.onblur = function() {
    emailInput.classList.remove("green-border");
}

var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var email = document.getElementById("Email").value;
var listEmail = email.split(".");
function validationEmail(email) {
    if (validEmail.test(email) && listEmail.pop().length < 4 && email != null && email.length > 0) {
        alert("Correct email");
        return true;
    } else {
        alert("Email invalid");
        return false;
    }
}

var passwordInput = document.getElementById("Password");
passwordInput.onfocus = function() {
    passwordInput.classList.add("green-border");
}

passwordInput.onblur = function() {
    passwordInput.classList.remove("green-border");
}

var password = document.getElementById("Password").value;
function validationPassword(password) {
    if (password.length >= 8 && password != null && password.length > 0 && isNaN(password) == true) {
        alert("Correct password");
        return true;
    } else {
        alert("Incorrect password");
        return false;
    }
}

var acceptBtn = document.getElementById("enter");
acceptBtn.onclick = function(event) {
    event.preventDefault();
    console.log(emailInput.value);
    console.log(passwordInput.value);
    alert("Email: " + emailInput.value + "\nPassword: " + passwordInput.value);
}