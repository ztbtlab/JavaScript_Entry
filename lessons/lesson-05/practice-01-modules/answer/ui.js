// ui.js（模範解答）— 画面に出すことだけを担当するファイル
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// ポイント: 計算はしない。渡された値をそのまま映すだけ。

// 数を出す場所（main.js から引っ越してきた行）
const countLabel = document.getElementById("count");

// 渡された値を画面に映す
// 第4回は引数なしで外の count を読んでいたが、分けたあとは value で受け取る
export function showCount(value) {
  countLabel.innerText = value;
}
