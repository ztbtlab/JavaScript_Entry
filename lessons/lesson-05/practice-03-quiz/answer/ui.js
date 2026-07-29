// ui.js（模範解答）— 画面に出すことだけを担当するファイル
//
// ポイント: 正解かどうかの判定はしない。渡されたものを映すだけ。

const questionLabel = document.getElementById("question");
const resultLabel = document.getElementById("result");
const choiceButtons = [
  document.getElementById("choice0"),
  document.getElementById("choice1"),
  document.getElementById("choice2"),
];

// 問題文と三択を画面に出す
export function showQuestion(question) {
  questionLabel.innerText = question.text;

  // 3 つのボタンの文字を、この問題の選択肢に入れかえる
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].innerText = question.choices[i];
  }

  resultLabel.innerText = ""; // 前の問題の ◯ / ✗ を消す
  resultLabel.className = "result";
}

// ◯ か ✗ を画面に出す
export function showResult(isCorrect) {
  if (isCorrect) {
    resultLabel.innerText = "◯ 正解！";
    resultLabel.className = "result ok"; // style.css で緑になる
  } else {
    resultLabel.innerText = "✗ ざんねん";
    resultLabel.className = "result ng"; // style.css で赤になる
  }
}

// 全問終わったときに点数を出す
export function showScore(correctCount, total) {
  questionLabel.innerText = "クイズは終わり！";
  resultLabel.innerText = total + " 問中 " + correctCount + " 問正解";
  resultLabel.className = "result";

  // もう選べないようにボタンを止める
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].innerText = "－";
    choiceButtons[i].disabled = true;
  }
}
