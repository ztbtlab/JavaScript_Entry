// main.js（模範解答）— 司令塔。状態を持ち、3 つのファイルをつなぐ
//
// ポイント: ここでは計算も画面書き換えもしない。judge に聞き、show〜 に頼むだけ。

import { questions } from "./quiz-data.js";
import { judge } from "./logic.js";
import { showQuestion, showResult, showScore } from "./ui.js";

// ----- 状態 -----
let currentIndex = 0; // いま何問目か（0 から数える）
let correctCount = 0; // 何問正解したか
let answered = false; // いまの問題にもう答えたか

// ----- 画面の部品（ボタンだけ）-----
const choiceButtons = [
  document.getElementById("choice0"),
  document.getElementById("choice1"),
  document.getElementById("choice2"),
];
const nextButton = document.getElementById("next");

// ----- 選択肢ボタンが押されたとき -----
for (let i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", () => {
    if (answered) {
      return; // 同じ問題に 2 回答えても数えない
    }
    answered = true;

    const isCorrect = judge(questions[currentIndex], i); // 判定は logic に頼む

    if (isCorrect) {
      correctCount = correctCount + 1;
    }

    showResult(isCorrect); // 画面は ui に頼む
  });
}

// ----- 「次の問題へ」が押されたとき -----
nextButton.addEventListener("click", () => {
  if (!answered) {
    return; // まだ答えていないなら進まない
  }

  currentIndex = currentIndex + 1;
  answered = false;

  if (currentIndex < questions.length) {
    showQuestion(questions[currentIndex]); // 次の問題
  } else {
    showScore(correctCount, questions.length); // 全部終わった
  }
});

// 最初の問題を出す
showQuestion(questions[0]);
