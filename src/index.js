const formEl = document.getElementById('email-form');
const btnEl = document.getElementById('btn')
const emailEl = document.getElementById('email');
const errorMsgEl = document.getElementById('error-msg');
const errorIconEl = document.getElementById('error-icon');



const validateEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase) 
};

btnEl.addEventListener('click', () => {
    const email = emailEl.value;
    if (!validateEmail(email)) {
        errorMsgEl.classList.remove('hidden');
        errorIconEl.classList.remove('hidden');
        emailEl.classList.add('input-error');
        btnEl.classList.add('btn-error');
    }
});