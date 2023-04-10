const buttonsEl = document.querySelector('.button_container');
const [buttonStart, buttonStop] = buttonsEl.children;

buttonsEl.addEventListener('click', onClick);
let changerColor = null;
function onClick(e) {
  if ('start' in e.target.dataset) {
    changerColor = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  } else if ('stop' in e.target.dataset) {
    clearInterval(changerColor);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
  }
  return;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
