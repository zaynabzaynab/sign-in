function shift() {
    document.querySelector(".slider__content").classList.toggle("shift");
}

// Form Validation
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('email_reset').addEventListener('blur', validateResetEmail);

let inputMail = document.getElementById('email'),
    resetInputMail =document.getElementById('email_reset'),
    inputPassword = document.getElementById('password'),
    button = document.getElementById('log-in'),
    resetButton = document.getElementById('sent-instruction');

button.addEventListener('click', welcome);

function validateEmail() {
    const email = document.getElementById('email');
    const errMessage = document.getElementById('invalid_error_mail');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;

    if (!re.test(email.value)) {
        errMessage.classList.remove('hidden');
        errMessage.classList.add('shake');
        email.classList.add('form__text-input--error');
    } else {
        errMessage.classList.add('hidden');
        errMessage.classList.remove('shake');
        email.classList.remove('form__text-input--error');
        email.classList.add('form__text-input--success');
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const errMessage = document.getElementById('invalid_error_pass');
    const re = /^[a-zA-Z0-9_\-\.]{8,}$/;

    if (!re.test(password.value)) {
        errMessage.classList.remove('hidden');
        errMessage.classList.add('shake');
        password.classList.add('form__text-input--error');
    } else {
        errMessage.classList.add('hidden');
        errMessage.classList.remove('shake');
        password.classList.remove('form__text-input--error');
        password.classList.add('form__text-input--success');
        return true;
    }
}


function checkInput() {
    button.disabled = !(inputMail.value.trim() !== '' && inputPassword.value.trim() !== '' && validatePassword() && validateEmail());
}



function validateResetEmail() {
    const email = document.getElementById('email_reset');
    const errMessage = document.getElementById('email_reset_error');
    const re = /\S+@\S+\.\S{2,}/;

    if (!re.test(email.value)) {
        errMessage.classList.remove('hidden');
        errMessage.classList.add('shake');
        email.classList.add('form__text-input--error');
    } else {
        errMessage.classList.add('hidden');
        errMessage.classList.remove('shake');
        email.classList.remove('form__text-input--error');
        email.classList.add('form__text-input--success');
        return true;
    }
}


function checkResetEmailInput() {
    resetButton.disabled = !(resetInputMail.value.trim() !== '' && validateResetEmail());
}

/*function welcome() {
    let html = `<h1 style="color: white; font-size: 52px; text-align: center">Welcome!</h1>`;
    document.getElementById('login').innerHTML = html;
}*/
