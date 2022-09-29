let phone_number;
let password1 = document.getElementById('pass1');
let password2 = document.getElementById('pass2');

    
function validatePassword(){
    if (password1.value == " "){
        alert('Please fill in a password')
    }
    else if(password1.value !==password2.value){
        alert("Password desn,t match!");
    }
    
}


 function handleSubmit(){
    const username  = document.getElementById('username').value;
    const email  = document.getElementById('email').value;

    sessionStorage.setItem("USERNAME", username);
    sessionStorage.setItem("EMAIL", email);

    return;
}
