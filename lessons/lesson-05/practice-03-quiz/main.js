// main.js — 司令塔。状態を持ち、3 つのファイルを呼び出してつなぐ
//
// このファイルは「自分では計算も画面書き換えもしない」のがきれい。
// 計算は logic.js に、画面は ui.js に頼む。Arduino の loop() と同じ役。

// TODO 4-1: 3 つのファイルから、必要なものを import する
//           ・quiz-data.js から questions
//           ・logic.js から judge
//           ・ui.js から showQuestion と showResult（発展の showScore も作ったなら一緒に）
//           形: import { 名前 } from "./ファイル名.js";
//           ※ 波カッコ { } ・ ./ ・ .js を忘れない

// ----- 状態（いまの様子を覚えている変数）-----
let currentIndex = 0; // いま何問目か（0 から数える）
let correctCount = 0; // 何問正解したか
let answered = false; // いまの問題にもう答えたか（2 回数えないための印）

// ----- 画面の部品（ボタンだけ。文字の書き換えは ui.js の仕事）-----
const choiceButtons = [
  document.getElementById("choice0"),
  document.getElementById("choice1"),
  document.getElementById("choice2"),
];
const nextButton = document.getElementById("next");

// ----- 選択肢ボタンが押されたとき -----
// i には 0 / 1 / 2 が入る（何番のボタンか）
for (let i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", () => {
    // TODO 4-2: 同じ問題に 2 回答えても数えないようにする
    //           ヒント: answered が true なら return; で何もせず終わる。
    //                  そのあと answered = true; にする

    // TODO 4-3: いまの問題（questions[currentIndex]）と i を judge に渡して、
    //           正解かどうかを isCorrect に入れる

    // TODO 4-4: 正解だったら correctCount を 1 増やす

    // TODO 4-5: showResult に isCorrect を渡して、◯ / ✗ を画面に出す
  });
}

// ----- 「次の問題へ」が押されたとき -----
nextButton.addEventListener("click", () => {
  // TODO 4-6: まだ答えていない（answered が false）なら、進まずに return する

  // TODO 4-7: currentIndex を 1 増やし、answered を false に戻す

  // TODO 4-8: まだ問題が残っていれば次の問題を出す
  //           ヒント: if (currentIndex < questions.length) { showQuestion(...) }
  //                  問題の数は questions.length で分かる
  //           ※ 全部終わったとき（else）の表示は発展。
  //             ui.js の TODO 3-3（showScore）を作った人は、ここで
  //             showScore(correctCount, questions.length) を呼ぶ。
  //             作っていない人は else を書かなくてよい（最後の問題が出たままになる）
});

// TODO 4-9: 最初の問題を画面に出す（ページを開いた時点で 1 問目が見えるように）
//           ヒント: showQuestion(questions[0]);

// ----- 余裕があれば拡張してみよう -----
// ・問題を出す順番をシャッフルする
// ・全問終わったあとに「もう一度」ボタンで最初からやり直せるようにする
// ・正解のときだけ result に class="result ok" を付けて色を変える（style.css に用意してある）
