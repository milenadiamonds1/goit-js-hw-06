function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  boxesDiv:document.querySelector('#boxes'),
  input:document.querySelector('input'),
  dataCreate:document.querySelector('button[data-create]'),
  dataDestroy:document.querySelector('button[data-destroy]')
}
refs.dataCreate.addEventListener('click', createBoxes);
refs.dataDestroy.addEventListener('click', removeBoxes);
function createBoxes(amount){
  const boxes = [];
  amount = refs.input.value;

  for(let i = 0; i<amount; i+=1){
    const box = document.createElement('div');
    box.style.width = `${30+i*10}px`;
    box.style.height = `${30+i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = `10px`; 
    boxes.push(box);
  }
  console.log(boxes);
  refs.boxesDiv.append(...boxes);
  refs.input.value = '';
}
function removeBoxes(){
  refs.boxesDiv.innerHTML = '';
}