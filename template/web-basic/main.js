const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');

let count = 0;

function renderCount() {
  countElement.textContent = String(count);
}

function handleIncrement() {
  count += 1;
  renderCount();
}

incrementButton.addEventListener('click', handleIncrement);

console.log('JavaScript Entry Template initialized');
renderCount();
