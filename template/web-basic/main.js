const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');

if (!countElement || !incrementButton) {
  console.error('カウンター機能に必要なHTML要素が見つかりません。idが正しいか確認してください。');
} else {
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
}
