const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const phone = document.querySelector('#phone');

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
})


const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message
    inputControl.classList.add('error')
    element.classList.add('border-red-500')
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Username is required')
    }
    if(emailValue === '') {
        setError(email, 'Email is required')
    }
    if(passwordValue === '') {
        setError(password, 'Password is required')
    }
    else if(passwordValue.length < 8) {
        setError(password, 'Password must be greater than 8')
    }
    else if(passwordValue.length > 15) {
        setError(password, 'Password must be smaller than 15')
    }
    if(phoneValue === '') {
        setError(phone, 'Phone is required')
    }
}