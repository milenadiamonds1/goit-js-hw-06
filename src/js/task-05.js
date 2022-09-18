const inp = document.querySelector('input');
let inpValue = document.querySelector('#name-output')



inp.addEventListener('input', onInputName)

function onInputName (event) {
inpValue.textContent = event.currentTarget.value;
if(inpValue.textContent===""){
    inpValue.textContent="Anonymous";
}
};
