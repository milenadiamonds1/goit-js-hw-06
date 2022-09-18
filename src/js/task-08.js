const form = document.querySelector('.login-form')
const input = document.querySelectorAll('input');
form.addEventListener('submit', onFormSubmit)

const email = input[0].getAttribute("name");
const pass = input[1].getAttribute('name')
function onFormSubmit (event) {
event.preventDefault();
const {
    elements:{email, password}

} = event.currentTarget;
if(email.value === "" || password.value === ""){
    alert("Всі поля повинні бути заповнені");
}
console.log({email: email.value, password: password.value});
event.currentTarget.reset();
}


