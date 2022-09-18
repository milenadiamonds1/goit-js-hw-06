
const btn = document.querySelectorAll('button');
let btnValue = document.querySelector('#value');

btn[0].addEventListener('click', onDecrementBtn);
btn[1].addEventListener('click', onIncrementBtn);

let counterValue=0;

function onDecrementBtn () {
    counterValue -=1;
    btnValue.textContent = counterValue;
}
function onIncrementBtn (){
    counterValue +=1;
    btnValue.textContent = counterValue;
}
