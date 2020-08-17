let clickCount = 0;
const pCounter = document.createElement('p');
document.body.appendChild(pCounter);

const button = document.querySelector('#clickme');

button.addEventListener('click', _ => {
  clickCount += 1;
  pCounter.innerHTML = clickCount;
})