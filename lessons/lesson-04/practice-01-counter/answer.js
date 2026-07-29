// 練習1: カウンター（完成版）
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると
//        完成した動きになり、Console に「自己チェック」の合否が出る。

// ① 状態を持つ（関数の外に置くのがポイント。中に書くとクリックのたびに 0 に戻る）
let count = 0;

const countLabel = document.getElementById("count");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

// ③ 画面を描き直す係。状態を画面に映すのが仕事
function showCount() {
  countLabel.innerText = count;
}

// ② イベントで状態を変える → そのあと必ず ③ を呼ぶ
plusButton.addEventListener("click", () => {
  count = count + 1; // count += 1 でも同じ
  showCount();
});

minusButton.addEventListener("click", () => {
  count = count - 1; // count -= 1 でも同じ
  showCount();
});

// 最初の表示を整える（読み込み時に 1 回だけ）
showCount();

// ----- 宿題（リセット / 5 ずつ増やす）の講師用参考実装 -----
// 生徒には index.html に次のボタンを足してもらう:
//   <button id="reset" type="button">リセット</button>
//   <button id="plus5" type="button">+5</button>
// 変数名は resetButton / plus5Button で揃える（第5回でファイル分割するときに同じ名前を使う）。
//
// const resetButton = document.getElementById("reset");
// const plus5Button = document.getElementById("plus5");
//
// resetButton.addEventListener("click", () => {
//   count = 0;
//   showCount();
// });
//
// plus5Button.addEventListener("click", () => {
//   count = count + 5;
//   showCount();
// });
//
// ボタンが 4 つに増えても、画面を書き換える場所は showCount() の 1 か所だけ。
// 「表示更新を関数にまとめた御利益」をここで確認させる。

// ----- ここから下は「自己チェック」。期待値とズレていたら赤く知らせる -----
// （生徒の main.js には不要。answer.js が正しいことを Console で確かめるための仕掛け）
function check(label, actual, expected) {
  if (actual === expected) {
    console.log("OK ✓", label, "=", actual);
  } else {
    console.error("NG ✗", label, "= 期待値", expected, "なのに", actual);
  }
}

// クリックを 3 回・-1 を 1 回、プログラムから起こして確かめる
plusButton.click();
plusButton.click();
plusButton.click();
check("+1 を 3 回押したあとの count", count, 3);
check("画面の表示", countLabel.innerText, "3");

minusButton.click();
check("-1 を 1 回押したあとの count", count, 2);
check("画面の表示", countLabel.innerText, "2");

// 自己チェックで動かした分を元に戻して、手で試せる状態にする
count = 0;
showCount();
console.log("practice-01-counter: 初期化完了");
