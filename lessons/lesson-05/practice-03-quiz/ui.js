// ui.js — 画面に出すことだけを担当するファイル
//
// ルール: 正解かどうかの判定はしない（それは logic.js の仕事）。
//        渡されたものを画面に映すだけ。

// 画面の部品を取ってくる（ここは書いてある。触らなくてよい）
const questionLabel = document.getElementById("question"); // 問題文を出す場所
const resultLabel = document.getElementById("result"); // ◯ / ✗ を出す場所
const choiceButtons = [
  document.getElementById("choice0"), // 0 番の選択肢ボタン
  document.getElementById("choice1"), // 1 番
  document.getElementById("choice2"), // 2 番
];

// TODO 3-1: 問題 question を受け取り、画面に出す showQuestion を作って export する
//           やること:
//             ① questionLabel.innerText に question.text を入れる
//             ② 3 つのボタンの innerText に question.choices の 0・1・2 番を入れる
//                （for で回してもよいし、3 行並べて書いてもよい）
//             ③ resultLabel.innerText を "" にして、前の問題の ◯ / ✗ を消す

// TODO 3-2: 正解だったか isCorrect（true / false）を受け取り、
//           結果を画面に出す showResult を作って export する
//           ヒント: if (isCorrect) { ... } else { ... } で出す文字を変える
//                  例: "◯ 正解！" と "✗ ざんねん"

// ----- 発展（余裕があれば）-----
// TODO 3-3: 全問終わったときに点数を出す showScore(correctCount, total) を作って export する
//           例: questionLabel に「クイズは終わり！」、resultLabel に
//               total + " 問中 " + correctCount + " 問正解" を入れる
