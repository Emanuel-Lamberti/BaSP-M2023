var nameInput = document.getElementById("Name");
var textValidationName = document.getElementById("textValidationName");
var lastNameInput = document.getElementById("Lastname");
var textValidationLastname = document.getElementById("textValidationLastname");
var dateBirthInput = document.getElementById("DateOfBirth");
var textValidationDate = document.getElementById("textValidationDate");
var phoneInput = document.getElementById("Phone");
var textValidationPhone = document.getElementById("textValidationPhone");
var locationInput = document.getElementById("Location");
var textValidationLocation = document.getElementById("textValidationLocation");
var adressInput = document.getElementById("Adress");
var textValidationAdress = document.getElementById("textValidationAdress");
var postalInput = document.getElementById("PostalCode");
var textValidationPostalCode = document.getElementById("textValidationPostalCode");
var emailInput = document.getElementById("Email");
var textValidationEmail = document.getElementById("textValidationEmail");
var passwordInput = document.getElementById("Password");
var textValidationPassword = document.getElementById("textValidationPassword");
var repeatPasswordInput = document.getElementById("RepeatPassword");
var textValidationRepeatPassword = document.getElementById("textValidationRepeatPassword");

nameInput.onfocus = function() {
    nameInput.classList.add("green-border");
    nameInput.classList.remove("red-border");
}

nameInput.onblur = function() {
    var nameCorrect = validationName();
    if(nameCorrect == true) {
        nameInput.classList.remove("green-border");
        textValidationName.style.display = "none";
    } else {
        nameInput.classList.add("red-border");
        textValidationName.style.display = "block";
    }
}

var valueName;
var arrayName;
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function validationName() {
    valueName = document.getElementById("Name").value;
    arrayName = valueName.split("");
    if(arrayName.filter(function(characters){return letters.indexOf(characters) != -1}).length > 0 && valueName.length >= 3) {
        return true;
    } else {
        return false;
    }
}

lastNameInput.onfocus = function() {
    lastNameInput.classList.add("green-border");
    lastNameInput.classList.remove("red-border");
}

lastNameInput.onblur = function() {
    var lastNameCorrect = validationLastName();
    if(lastNameCorrect == true) {
        lastNameInput.classList.remove("green-border");
        textValidationLastname.style.display = "none";
    } else {
        lastNameInput.classList.add("red-border");
        textValidationLastname.style.display = "block";
    }
}

var valueLastName;
var arrayLastName;
function validationLastName() {
    valueLastName = document.getElementById("Lastname").value;
    arrayLastName = valueLastName.split("");
    if(arrayLastName.filter(function(characters){return letters.indexOf(characters) != -1}).length > 0 && valueLastName.length >= 3) {
        return true;
    } else {
        return false;
    }
}

dateBirthInput.onfocus = function() {
    dateBirthInput.classList.add("green-border");
    dateBirthInput.classList.remove("red-border");
}

dateBirthInput.onblur = function() {
    var dateCorrect = validationDate();
    if(dateCorrect == true) {
        dateBirthInput.classList.remove("green-border");
        textValidationDate.style.display = "none";
    } else {
        dateBirthInput.classList.add("red-border");
        textValidationDate.style.display = "block";
    }
}

var dateInput;
function validationDate() {
    dateInput = document.getElementById("DateOfBirth").value;
    try{
        var date = dateInput.split("/");
        var day = date[0];
        var month = date[1];
        var year = date[2];
        var state = true;
        if ((day.length == 2) && (month.length == 2) && (year.length == 4)) {
            switch (parseInt(month)) {
                case 1:dmax = 31;break;
                case 2: if (year % 4 == 0) dmax = 29; else dmax = 28;
                break;
                case 3:dmax = 31;break;
                case 4:dmax = 30;break;
                case 5:dmax = 31;break;
                case 6:dmax = 30;break;
                case 7:dmax = 31;break;
                case 8:dmax = 31;break;
                case 9:dmax = 30;break;
                case 10:dmax = 31;break;
                case 11:dmax = 30;break;
                case 12:dmax = 31;break;
            }
            dmax!=""?dmax:dmax=-1;if ((day >= 1) && (day <= dmax) && (month >= 1) && (month <= 12)) {
            for (var i = 0; i < date[0].length; i++) {
                dayC = date[0].charAt(i).charCodeAt(0);
                (!((dayC > 47) && (dayC < 58)))?state = false:'';
                monthC = date[1].charAt(i).charCodeAt(0);
                (!((monthC > 47) && (monthC < 58)))?state = false:'';
            }
        } for (var i = 0; i < date[2].length; i++) {
            yearC = date[2].charAt(i).charCodeAt(0);
        (!((yearC > 47) && (yearC < 58)))?state = false:'';
        }} else state = false;
        return state;
   }catch(err){
    //alert("Error in date");
    }
}

phoneInput.onfocus = function() {
    phoneInput.classList.add("green-border");
    phoneInput.classList.remove("red-border");
}

phoneInput.onblur = function() {
    var phoneCorrect = validationPhone();
    if(phoneCorrect == true) {
        phoneInput.classList.remove("green-border");
        textValidationPhone.style.display = "none";
    } else {
        phoneInput.classList.add("red-border");
        textValidationPhone.style.display = "block";
    }
}

var numberPhone;
var arrayPhone;
var numbers = ["0","1","2","3","4","5","6","7", "8", "9"];
function validationPhone() {
    numberPhone = document.getElementById("Phone").value;
    arrayPhone = numberPhone.split("");
    if (numberPhone.length == 10 && arrayPhone.filter(function(characters){return numbers.indexOf(characters) != -1}).length > 0) {
        return true;
    } else {
        return false;
    }
}

locationInput.onfocus = function() {
    locationInput.classList.add("green-border");
    namelocationInputInput.classList.remove("red-border");
}

locationInput.onblur = function() {
    var locationCorrect = validationLocation();
    if(locationCorrect == true) {
        locationInput.classList.remove("green-border");
        textValidationLocation.style.display = "none";
    } else {
        locationInput.classList.add("red-border");
        textValidationLocation.style.display = "block";
    }
}

var locationValue;
function validationLocation() {
    locationValue = document.getElementById("Location").value;
    if(locationValue.length >= 3) {
        return true;
    } else {
        return false;
    }
}

adressInput.onfocus = function() {
    adressInput.classList.add("green-border");
    adressInput.classList.remove("red-border");
}

adressInput.onblur = function() {
    var adressCorrect = validationAdress();
    if(adressCorrect == true) {
        adressInput.classList.remove("green-border");
        textValidationAdress.style.display = "none";
    } else {
        adressInput.classList.add("red-border");
        textValidationAdress.style.display = "block";
    }
}

var adressValue;
function validationAdress() {
    adressValue = document.getElementById("Adress").value;
    if(adressValue.length >= 5) {
        return true;
    } else {
        return false;
    }
}

postalInput.onfocus = function() {
    postalInput.classList.add("green-border");
    postalInput.classList.remove("red-border");
}

postalInput.onblur = function() {
    var postalCorrect = validationPostalCode();
    if(postalCorrect == true) {
        postalInput.classList.remove("green-border");
        textValidationPostalCode.style.display = "none";
    } else {
        postalInput.classList.add("red-border");
        textValidationPostalCode.style.display = "block";
    }
}

var postalValue;
function validationPostalCode() {
    postalValue = document.getElementById("PostalCode").value;
    if(postalValue.length >= 4 && postalValue.length <= 5) {
        return true;
    } else {
        return false;
    }
}

emailInput.onfocus = function() {
    emailInput.classList.add("green-border");
    emailInput.classList.remove("red-border");    
}

emailInput.onblur = function() {
    var emailValido = validationEmail();
    if(emailValido == true) {
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

passwordInput.onfocus = function() {
    passwordInput.classList.add("green-border");
    passwordInput.classList.remove("red-border");
}

passwordInput.onblur = function() {
    
    var passValido = validationPassword();
    if(passValido == true) {
        passwordInput.classList.remove("green-border");
        textValidationPassword.style.display = "none";
    } else {
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

repeatPasswordInput.onfocus = function() {
    repeatPasswordInput.classList.add("green-border");
    repeatPasswordInput.classList.remove("red-border");
}

repeatPasswordInput.onblur = function() {
    var repeatPassValido = validationRepeatPassword();
    if(repeatPassValido == true) {
        repeatPasswordInput.classList.remove("green-border");
        textValidationRepeatPassword.style.display = "none";
    } else {
        repeatPasswordInput.classList.add("red-border");
        textValidationRepeatPassword.style.display = "block";
    }
}

var repeatPasswordValue;
function validationRepeatPassword() {
    repeatPasswordValue = document.getElementById("RepeatPassword").value;
    if(passwordInput.value == repeatPasswordValue && 
        repeatPasswordValue.length >= 8 && 
        password != null 
        && isNaN(password) == true) {
        return true;
    } else {
        return false;
    }
}

var btnAccept = document.getElementById("accept");
btnAccept.onclick = function(event) {
    var nameValidate = validationName();
    var lastNameValidate = validationLastName();
    var dateValidate = validationDate();
    var phoneValidate = validationPhone();
    var locationValidate= validationLocation();
    var adressValidate = validationAdress();
    var postalValidate = validationPostalCode();
    var emailValidate = validationEmail();
    var passwordValidate = validationPassword();
    var repeatPasswordValidate = validationRepeatPassword();
    if(nameValidate && 
        lastNameValidate && 
        dateValidate && 
        phoneValidate && 
        locationValidate &&
        adressValidate &&
        postalValidate &&
        emailValidate &&
        passwordValidate &&
        repeatPasswordValidate){ 
        alert("Name: " + emailInput.value + 
            "\nLastname: " + lastNameInput.value +
            "\nDate of birth: " + dateBirthInput.value +
            "\nPhone: " + phoneInput.value +
            "\nLocation: " + locationInput.value +
            "\nAdress: " + adressInput.value +
            "\nPostal Code: " + postalInput.value +
            "\nEmail: " + emailInput.value +
            "\nPassword: " + passwordInput.value +
            "\nRepeat Password: " + repeatPasswordInput.value);
    } else {
        if(nameValidate == false){
            alert("Invalid name: " + nameInput.value);
        }
        if(lastNameValidate == false) {
            alert("Invalid lastname: " + lastNameInput.value);
        }
        if(dateBirthInput == false) {
            alert("Invalid date of birth: " + dateBirthInput.value);
        }
        if(phoneInput == false) {
            alert("Invalid phone: " + phoneInput.value);
        }
        if(locationInput == false) {
            alert("Invalid phone: " + locationInput.value);
        }
        if(adressInput == false) {
            alert("Invalid adress: " + adressInput.value);
        }
        if(postalInput == false) {
            alert("Invalid Postal Code: " + postalInput.value);
        }
        if(emailInput == false) {
            alert("Invalid Email: " + emailInput.value);
        }
        if(passwordInput == false) {
            alert("Invalid Password: " + passwordInput.value);
        }
        if(repeatPasswordInput == false) {
            alert("Invalid Repeat Password: " + repeatPasswordInput.value);
        }
    }
    event.preventDefault();
    console.log(nameInput.value);
    console.log(lastNameInput.value);
    console.log(dateBirthInput.value);
    console.log(phoneInput.value);
    console.log(locationInput.value);
    console.log(adressInput.value);
    console.log(postalInput.value);
    console.log(emailInput.value);
    console.log(passwordInput.value);
    console.log(repeatPasswordInput.value);
}