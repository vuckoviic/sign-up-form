const pass = document.querySelector('#password');
const passCheck = document.querySelector('#confirm-password');

const submit = document.querySelector('#submit');

const passError = document.querySelector('#passError');

while (pass.value !== passCheck.value){
    pass.classList.add('error');
    passCheck.classList.add('error');
}

function checkingPassword() {
    if (passCheck.value !== "" && pass.value !== passCheck.value){
        passError.innerText = 'Passwords do not match! Try again.'.toUpperCase();
        pass.classList.add('error');
        passCheck.classList.add('error');
        return false;
    }
    
    else if (pass.value === passCheck.value) {
        passError.innerText = '';
        pass.classList.remove('error');
        passCheck.classList.remove('error');
        return true;
    }
}