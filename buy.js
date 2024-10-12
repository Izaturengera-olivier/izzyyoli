const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const pro = document.querySelector('#pro')
const submit = document.querySelector('#submit');
submit.addEventListener('click', (Event) => {
    Event.preventDefault();
    if (username.value.trim() == "") {
        error(username, "no_name_you_entered");
    } else {
        success(username);
    }
    if (email.value.trim() == "") {
        error(email, "you_skipped_email");
    } else {
        if (!isValidEmail(email.value.trim())) {
            error(email, "email is not valid");
        } else {
            success(email);
        }
    }
    if (username.value.trim() == "") {
        error(password, "no_password_you_entered");
    } else {
        success(password);
    }
    if (pro.value.trim() == "") {
        error(pro, "enter_the_product_name");
    } else {
        success(pro);
    }
});

function error(element, msg) {
    element.style.border = '3px red solid ';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = "visible";
}

function success(element) {
    element.style.border = '3px green solid ';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = "hidden";

}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}