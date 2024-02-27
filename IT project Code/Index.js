//form input validation//
const form = document.getElementById('form1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const conPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerHTML= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regex expresion//
    return re.test(string(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const conPasswordValue = conPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }

    if(conPasswordValue ===''){
        setError(conPassword, 'Please confirm your password');
    } else if(passwordValue !== conPasswordValue) {
        setError(password, "Password doesn't match");
    } else {
        setSuccess(conPassword);
    }
};

