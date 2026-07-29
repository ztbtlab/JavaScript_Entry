// 練習1: カウンターを 3 つのファイルに分ける
// ゴール: この 1 ファイルに全部入っているカウンターを、
//        logic.js（計算担当）・ui.js（画面担当）・main.js（司令塔）に分ける
//
// ★ いまの状態: このファイルだけで完成している（そのままでも動く）。第4回の復習でもある。
//   まず Live Server で開いて、＋1 / −1 / リセットが動くことを確かめてから分け始めること。
//
// 進め方（一気に全部移さない。1 つ動かしてから次へ）:
//  1) logic.js に increment を 1 つだけ移して import で呼び、動くか確かめる  → TODO 1・3
//  2) 動いたら decrement / reset も同じように移す
//  3) 画面の書き換えを ui.js の showCount(value) に移す                      → TODO 2
//  4) index.html の <script> に type="module" を足す                         → TODO 4
//
// ヒント:
//  - 分けたあとも「動きが変わらない」のが正解。見た目が同じなら成功
//  - count（状態）は分けたあとも main.js が持つ。logic.js には置かない
//  - 分けたあとは showCount() ではなく showCount(count) と値を渡す形になる

// ----- 画面の部品を取ってくる -----
// ※ 分けたあと、countLabel の行は ui.js に引っ越す（main.js からは消える）
const countLabel = document.getElementById("count"); // 数を出す場所
const plusButton = document.getElementById("plus"); // ＋1 ボタン
const minusButton = document.getElementById("minus"); // −1 ボタン
const resetButton = document.getElementById("reset"); // リセットボタン

// ----- 状態（いまの値を覚えている変数）-----
// ※ ここは分けたあとも main.js に残す
let count = 0;

// ----- 画面に反映する（＝画面の仕事。ui.js へ引っ越す部分）-----
// 第4回では引数なしで、外の count を直接読んでいた。
// 分けると count は別ファイルになるので、showCount(value) と引数で受け取る形に変える。
function showCount() {
  countLabel.innerText = count;
}

// ----- ボタンが押されたときの動き（＝司令塔の仕事。main.js に残す）-----
plusButton.addEventListener("click", () => {
  count = count + 1; // ← この計算が logic.js の increment(count) になる
  showCount();
});

minusButton.addEventListener("click", () => {
  count = count - 1; // ← この計算が logic.js の decrement(count) になる
  showCount();
});

resetButton.addEventListener("click", () => {
  count = 0; // ← この計算が logic.js の reset() になる
  showCount();
});

// 最初の表示（ページを開いた時点の値を画面に出す）
showCount();

// TODO 3-1: logic.js と ui.js から、必要な関数を import する
//           書く場所は「ファイルの 1 行目」（const countLabel = ... より上）
//           形: import { 名前1, 名前2 } from "./ファイル名.js";
//           ※ 波カッコ { } ・ ./ ・ .js の 3 つを忘れやすい

// TODO 3-2: 上の 3 つの addEventListener の中を、import した関数を使う形に書き換える
//           例（＋1 のとき）:
//             count = increment(count);  // 計算は logic に頼む
//             showCount(count);          // 画面は ui に頼む
//           −1 とリセットも同じように書き換える。最後の showCount(); も忘れずに

// TODO 3-3: ui.js に引っ越した行（countLabel の取得と showCount の中身）を、
//           このファイルから消す。二重に書いてあると、どちらが効いているか分からなくなる

// ----- 余裕があれば拡張してみよう -----
// ・logic.js に incrementBy(count, amount) を足して、「5 ずつ増やす」ボタンを付ける
//   （HTML にボタンを 1 つ増やして、id は plus5 にする）
//   increment との違いを見ると、「引数を増やす」感覚がつかめる
