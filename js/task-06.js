const inpValue = document.querySelector('#validation-input')
console.log(inpValue);

inpValue.addEventListener('blur', onBlurValue )

function onBlurValue (event) {
const inpLength = event.currentTarget.getAttribute('data-length')


if (event.currentTarget.value.length !=inpLength ){
    event.currentTarget.classList.add("invalid");
} else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
}
if(event.currentTarget.value.length === 0 ) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.remove("valid");
}
}