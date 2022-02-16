const button = document.getElementById('button_test');
const text = document.getElementById('text')
let clickCount = 0;
button.addEventListener('click', () => {
  text.innerHTML = clickCount +=1;
})