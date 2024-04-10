const nameField = document.querySelector('#nameField');
const numberField = document.querySelector('#numberField');
const registrationForm = document.querySelector('#registrationForm');
const usernameField = document.querySelector('#usernameField');
const passwordField = document.querySelector('#passwordField');
const conformPasswordField = document.querySelector('#conformPasswordField');
const emailField = document.querySelector('#emailField');
let nameValid = true;
let emailValid = true;
let UsernameValid = true;
let passwordValid = true;
let phoneValid = true;
let conformPasswordValid = true;

function emptyValue(value,input,warning,message) {
    if(!value) {
     warning.innerHTML = `${message} cannot be empty`;
     input.classList.add('redBorder');
     return true;
    }
    else {
        warning.innerHTML ="";
        input.classList.remove('redBorder');
        return false;
    }
    
}

function checkSpecialCharAndNum(input,value,warning,message) {
    // const  regex = /^[a-zA-Z][a-zA-Z\\s]+$/;
    // if(regex.test(value)) {
    //     input.classList.remove('redBorder');
    //    warning.innerHTML="";
    //    return false;            
    // }
    // else {
    //     input.classList.add('redBorder');
    //     warning.innerHTML = `${message} is not valid`;
    //     return true;
    // }
    for(i=0;i<value.length;i++) {
    const char = value.charAt(i);
    if(!(char>="a"&& char<="z") && !(char>="A"&& char<="Z") && char!=" " ) {
        input.classList.add('redBorder');
        warning.innerHTML = `${message} is not valid`;
        return true;
    }
    else {
        input.classList.remove('redBorder');
        warning.innerHTML="";
    }
  }
  return false;
}

function checkSpecialChar(input,value,warning,message) {
    // const userRegex = /^[a-zA-Z0-9]+$/;
    // if(userRegex.test(value)) {
    //     input.classList.remove('redBorder');
    //     warning.innerHTML="";
    //     return false;
    // }
    // else {
    //     input.classList.add('redBorder');
    //     warning.innerHTML = `${message} is not valid`;
    //     return true;
    // }
    for(i=0;i<value.length;i++) {
        const char = value.charAt(i);
        if((char>="a"&& char<="z") || (char>="A"&& char<="Z") || char===" " || !isNaN(Number(char))) {
            input.classList.remove('redBorder');
            warning.innerHTML="";
        }
        else {
            input.classList.add('redBorder');
            warning.innerHTML = `${message} is not valid`;
            return true;
        }
    }  
    return false;      
}

function checkNumber(value,warning) {
    // const  phoneregex =/^\d+$/;
    // if(phoneregex.test(value)) {
    //     numberField.classList.remove('redBorder');
    //     warning.innerHTML="";
    //     return true;
    // }
    // else {
    //     numberField.classList.add('redBorder');
    //     warning.innerHTML="Enter numeric value";
    //     return false;
    // }
    for(i=0;i<value.length;i++) {
        const char = value.charAt(i);
        const warning = document.querySelector("#numberWarning");
        if(isNaN(Number(char))) {
            numberField.classList.add('redBorder');
            warning.innerHTML="Enter numeric value";
            return false;
        }
        else {
            numberField.classList.remove('redBorder');
            warning.innerHTML="";
        }
      }
      return true;
}


function comparePassword(conformPassword,input,warning) {   
       const password = passwordField.value;  
       if(!password) return;
       if(conformPassword != password) {
         input.classList.add('redBorder');
         warning.innerHTML="Not matching with password";
         return false;
       }
       else {
        input.classList.remove('redBorder');
        warning.innerHTML="";
        return true;
       }
}

function validateEmail(value,warning) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailRegex.test(value)) {
        emailField.classList.remove('redBorder');
        warning.innerHTML="";
        return true;
    }
    else {
        emailField.classList.add('redBorder');
        warning.innerHTML="Invalid Email Address"; 
        return false;
    }
}

function nameChangeHandler(e) {
    const warning = document.querySelector("#nameWarning");
    const value = e.target.value;
    if(emptyValue(value,nameField,warning,"Name")) return;
    if(checkSpecialCharAndNum(nameField,value,warning,"Name")) nameValid=false;
    else nameValid = true;
}

function numberChangeHandler(e) {
    const warning = document.querySelector("#numberWarning");
    const value = e.target.value;
    if(emptyValue(value,numberField,warning,"Phone Number")) return;
    if(checkNumber(e.target.value,warning)) phoneValid=true;
    else phoneValid=false; 
}

function usernameChangeHandler(e) {
    const warning = document.querySelector("#usernameWarning");
    const value = e.target.value;
    if(emptyValue(value,usernameField,warning,"Username")) return;
    if(checkSpecialChar(usernameField,value,warning,"Username")) UsernameValid=false;
}

function passwordChangeHandler(e) {
    const warning = document.querySelector("#passwordWarning");
    const value = e.target.value;
    emptyValue(value,passwordField,warning,"Password");
}

function conformPasswordChangeHandler(e) {
    const warning = document.querySelector("#conformPasswordWarning");
    const value = e.target.value;
    if(emptyValue(value,conformPasswordField,warning,"Conform Password")) return;
    if(comparePassword(value,conformPasswordField,warning)) conformPasswordValid=true;
    else conformPasswordValid=false;
    
}

function emailChangeHandler(e) {
    const warning = document.querySelector("#emailWarning");
    const value = e.target.value;
    if(emptyValue(value,emailField,warning,"Email")) return;
    validateEmail(value,warning)
}

function formSubmitHandler(e) {
    e.preventDefault();

    const nameWarning = document.querySelector('#nameWarning')
    if(!nameField.value) {
       emptyValue(nameField.value,nameField,nameWarning,"Name"); 
       nameValid= false;
    }

    const usernameWarning = document.querySelector('#usernameWarning');
    if(!usernameField.value) {
    emptyValue(usernameField.value,usernameField,usernameWarning,"Username"); 
    UsernameValid= false;
    }

    const emailWarning = document.querySelector('#emailWarning');
    if(!emailField.value) {
    emptyValue(emailField.value,emailField,emailWarning,"Email"); 
    emailValid= false;
    }

    const passwordWarning = document.querySelector('#passwordWarning')
    if(!passwordField.value) {
    emptyValue(passwordField.value,passwordField,passwordWarning,"Password")
    passwordValid= false;
    }

    const numberWarning = document.querySelector('#numberWarning')
    if(!numberField.value) {
    emptyValue(numberField.value,numberField,numberWarning,"Phone Number")
    phoneValid= false;
    }

    const conformPasswordWarning = document.querySelector('#conformPasswordWarning')
    if(!conformPasswordField.value) {
    emptyValue(conformPasswordField.value,conformPasswordField,conformPasswordWarning,"Conform Password")
    conformPasswordValid= false;
    }
    comparePassword(conformPasswordField.value,conformPasswordField,conformPasswordWarning);


    if(!phoneValid || !nameValid || !UsernameValid || !passwordValid || !conformPasswordValid || !emailValid) {
       alert("Fill the form correctly");
       nameValid = true;
       emailValid = true;  
       UsernameValid = true;
       passwordValid = true;
       phoneValid = true;
       conformPasswordValid = true;
       return;
    } 

    const details = {
        Name:nameField.value,
        Username:usernameField.value,
        Email:emailField.value,
        "Phone Number":numberField.value,
        Password:passwordField.value,

    }
    localStorage.setItem('details',JSON.stringify(details));
    window.location.href = 'details.html';
    registrationForm.reset();
}


nameField.addEventListener("keyup",nameChangeHandler)
numberField.addEventListener("keyup",numberChangeHandler)
usernameField.addEventListener("keyup",usernameChangeHandler);
passwordField.addEventListener("keyup",passwordChangeHandler);
conformPasswordField.addEventListener("keyup",conformPasswordChangeHandler);
emailField.addEventListener("keyup",emailChangeHandler);
registrationForm.addEventListener("submit",formSubmitHandler)

