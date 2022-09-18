const inpFontSize = document.querySelector('#font-size-control');
const spanId = document.querySelector('#text');

inpFontSize.addEventListener('input', onFontSizeColor);
spanId.style.fontSize = `${inpFontSize.value}px`;
function onFontSizeColor (event) {
spanId.style.fontSize = event.currentTarget.value + "px"
};