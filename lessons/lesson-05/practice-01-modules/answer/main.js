// main.js（模範解答）— 状態を持ち、2 つのファイルを呼び出してつなぐ司令塔
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// Arduino でいう loop() の役。「計算は logic に、画面は ui に頼む」だけで、
// 自分では計算も画面書き換えもしない。

import { increment, decrement, reset } from "./logic.js";
import { showCount } from "./ui.js";

// 状態（いまの値を覚えている変数）はここが持つ。第4回と同じ
let count = 0;

// ボタンを取ってくる（数を出す場所 countLabel は ui.js が持っているので、ここには無い）
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

plusButton.addEventListener("click", () => {
  count = increment(count); // 計算は logic に頼む
  showCount(count); // 画面は ui に頼む
});

minusButton.addEventListener("click", () => {
  count = decrement(count);
  showCount(count);
});

resetButton.addEventListener("click", () => {
  count = reset();
  showCount(count);
});

// 最初の表示
showCount(count);
