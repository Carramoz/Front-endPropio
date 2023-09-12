let nameInput = document.getElementById("name");
let nameRegex = /^\w/;
let emailInput = document.getElementById("email");
let emailRegex = /^[a-z]\w\w*?@\w\w*?\.\w\w*/i
let telephoneInput = document.getElementById("telephone")
let telephoneRegex = /\d{10}/;
let messageInput = document.getElementById("message");
let messageRegex = /^\w\w\w*/;
let nameIconChecked = document.getElementById("nameIconChecked");
let nameIconFailed = document.getElementById("nameIconFailed");
let emailIconChecked = document.getElementById("emailIconChecked");
let emailIconFailed = document.getElementById("emailIconFailed");
let telephoneIconChecked = document.getElementById("telIconChecked");
let telephoneIconFailed = document.getElementById("telIconFailed");
let messageIconChecked = document.getElementById("messageIconChecked");
let messageIconFailed = document.getElementById("messageIconFailed");
let btnEnviar = document.getElementById("btnEnviar");
let alertDiv = document.getElementById("alertDiv");
let isValid;
let formIsCorrect = true;

btnEnviar.addEventListener("click", event=>{
    event.preventDefault();
    if(formIsCorrect){
        alertDiv.style.display="flex";
    } else{
        
    }
})

nameInput.addEventListener("input", (event)=>{
    event.preventDefault();
    console.log("nameInput value in this point is: ", nameInput.value);
    nameInput.classList.remove("valid", "not-valid");
    if (nameInput.value != "") {
        isValid = nameRegex.test(nameInput.value);
        console.log(isValid);
        if(isValid){
            nameInput.classList.add("valid");
            nameIconChecked.classList.add("valid");
            nameIconFailed.classList.add("display-none")
            nameIconChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            nameInput.classList.add("not-valid")
            nameIconFailed.classList.add("not-valid");
            nameIconChecked.classList.add("display-none");
            nameIconFailed.classList.remove("display-none");
            formIsCorrect = false;
            console.log("Not valid");
        }
    }else{
        nameIconChecked.classList.add("display-none");
        nameIconFailed.classList.add("display-none");
    }//if string.length longer than 0;
    console.log("Change made");
    console.log("nameInput value in this point is: ", nameInput.value);

})//Regex validation in real time;

emailInput.addEventListener("input", event=>{
    event.preventDefault();
    console.log("nameInput value in this point is: ", emailInput.value);
    emailInput.classList.remove("valid", "not-valid");
    if (emailInput.value != "") {
        isValid = emailRegex.test(emailInput.value);
        console.log(isValid);
        if(isValid){
            emailInput.classList.add("valid");
            emailIconChecked.classList.add("valid");
            emailIconFailed.classList.add("display-none")
            emailIconChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            emailInput.classList.add("not-valid")
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
    console.log("nameInput value in this point is: ", emailInput.value);

})

telephoneInput.addEventListener("input", event=>{
    event.preventDefault();
    console.log("message value in this point is: ", emailInput.value);
    telephoneInput.classList.remove("valid", "not-valid");
    if (telephoneInput.value != "") {
        isValid = telephoneRegex.test(telephoneInput.value);
        console.log(isValid);
        if(isValid){
            telephoneInput.classList.add("valid");
            telephoneIconChecked.classList.add("valid");
            telephoneIconFailed.classList.add("display-none")
            telephoneIconChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            telephoneInput.classList.add("not-valid")
            telephoneIconFailed.classList.add("not-valid");
            telephoneIconChecked.classList.add("display-none");
            telephoneIconFailed.classList.remove("display-none");
            formIsCorrect = false;
            console.log("Not valid");
        }
    }else{
        telephoneIconChecked.classList.add("display-none");
        telephoneIconFailed.classList.add("display-none");
    }//if string.length longer than 0;
    console.log("Change made");
    console.log("telephoneInput value in this point is: ", emailInput.value);

})

messageInput.addEventListener("input", event=>{
    event.preventDefault();
    console.log("telephoneInput value in this point is: ", messageInput.value);
    messageInput.classList.remove("valid", "not-valid");
    if (messageInput.value != "") {
        isValid = messageRegex.test(messageInput.value);
        console.log(isValid);
        if(isValid){
            messageInput.classList.add("valid");
            messageIconChecked.classList.add("valid");
            messageIconFailed.classList.add("display-none")
            messageIconChecked.classList.remove("display-none");
            console.log("Valid!");
            formIsCorrect = true;
        } else{
            messageInput.classList.add("not-valid")
            messageIconFailed.classList.add("not-valid");
            messageIconChecked.classList.add("display-none");
            messageIconFailed.classList.remove("display-none");
            formIsCorrect = false;
            console.log("Not valid");
        }
    }else{
        messageIconChecked.classList.add("display-none");
        messageIconFailed.classList.add("display-none");
    }//if string.length longer than 0;
    console.log("Change made");
    console.log("messageInput value in this point is: ", emailInput.value);

})

