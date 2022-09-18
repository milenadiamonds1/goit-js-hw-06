function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  btnColor:document.querySelector('.change-color'),
  spanContent:document.querySelector('.color'),
  body:document.querySelector('body')
}

refs.btnColor.addEventListener('click', onButtonColor);

function onButtonColor(event){
  const colorFunction = getRandomHexColor();
refs.body.style.backgroundColor = colorFunction;
refs.spanContent.textContent = colorFunction;
}