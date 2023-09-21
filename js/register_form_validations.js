let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordTwo = document.getElementById("password-two");
let usernameRegex = /\w\w\w\w*/;
let emailRegex = /^[a-z]\w\w*?@\w\w*?\.\w\w*/i;
let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let formIsCorrect = true;
let passwordAux;

username.addEventListener("change", (event)=>{
    event.preventDefault();
    console.log("change value in this point is: ", username.value);
    username.classList.remove("valid", "not-valid");
    if (username.value != "") {
        isValid = usernameRegex.test(username.value);
        console.log(isValid);
        if(isValid){
            username.classList.add("valid");
            usernameIconChecked.classList.add("valid");
            usernameIconFailed.classList.add("display-none")
            usernameIconChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            username.classList.add("not-valid")
            usernameIconFailed.classList.add("not-valid");
            usernameIconChecked.classList.add("display-none");
            usernameIconFailed.classList.remove("display-none");
            formIsCorrect = false;
            console.log("Not valid");
        }
    }else{
        nameIconChecked.classList.add("display-none");
        nameIconFailed.classList.add("display-none");
    }//if string.length longer than 0;
    console.log("Change made");
    console.log("nameInput value in this point is: ", username.value);
})//Regex validation on change;

email.addEventListener("change", (event)=>{
    event.preventDefault();
    console.log("change value in this point is: ", email.value);
    email.classList.remove("valid", "not-valid");
    if (email.value != "") {
        isValid = emailRegex.test(email.value);
        console.log(isValid);
        if(isValid){
            email.classList.add("valid");
            emailIconChecked.classList.add("valid");
            emailIconFailed.classList.add("display-none")
            emailIconChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            email.classList.add("not-valid")
            emailIconFailed.classList.add("not-valid");
            emailIconChecked.classList.add("display-none");
            emailIconFailed.classList.remove("display-none");
            formIsCorrect = false;
            console.log("Not valid");
        }
    }else{
        emailIconChecked.classList.add("display-none");
        emailIconFailed.classList.add("display-none");
    }//if string.length longer than 0;
    console.log("Change made");
    console.log("email value in this point is: ", email.value);
})//Regex validation on change;

password.addEventListener("change", (event)=>{
    event.preventDefault();
    console.log("change value in this point is: ", password.value);
    password.classList.remove("valid", "not-valid");
    if (password.value != "") {
        isValid = passwordRegex.test(password.value);
        console.log(isValid);
        if(isValid){
            password.classList.add("valid");
            passwordChecked.classList.add("valid");
            passwordFailed.classList.add("display-none")
            passwordChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
            passwordAux = password.value
        } else{
            password.classList.add("not-valid")
            passwordFailed.classList.add("not-valid");
            passwordChecked.classList.add("display-none");
            passwordFailed.classList.remove("display-none");
            formIsCorrect = false;
            console.log("Not valid");
        }
    }else{
        passwordChecked.classList.add("display-none");
        passswordFailed.classList.add("display-none");
    }//if string.length longer than 0;
    console.log("Change made");
    console.log("password value in this point is: ", password.value);
})//Regex validation on change;

passwordTwo.addEventListener("change", event=>{
    event.preventDefault;
    if (passwordTwo != "") {
        if(passwordTwo.value === passwordAux){
            passwordTwo.classList.add("valid");
            passwordTwoChecked.classList.add("valid");
            passwordTwoFailed.classList.add("display-none")
            passwordTwoChecked.classList.remove("display-none");
            passwordTwo.classList.remove("not-valid");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            passwordTwo.classList.add("not-valid")
            passwordTwoFailed.classList.add("not-valid");
            passwordTwoChecked.classList.add("display-none");
            passwordTwoFailed.classList.remove("display-none");
            passwordTwo.classList.remove("valid");
            formIsCorrect = false;
            console.log("Not valid");
        }  
    } else{
    passwordTwoChecked.classList.add("display-none");
    passwordTwoFailed.classList.add("display-none");
}//if string.length longer than 0;
console.log("Change made");
console.log("password value in this point is: ", passwordTwo.value);
})