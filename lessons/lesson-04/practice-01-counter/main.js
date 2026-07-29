// 練習1: カウンター
// ゴール: 「+1」「-1」ボタンを押すと、画面の数が増えたり減ったりする
//
// 今日の 3 ステップをそのままなぞる練習:
//   ① 状態を持つ           let count = 0;
//   ② イベントで状態を変える  count = count + 1;
//   ③ 画面を描き直す         showCount();
//
// 進め方:
//  1) showCount() を完成させる（count を画面に映す）
//  2) plusButton のクリックで count を 1 増やして、showCount() を呼ぶ
//  3) minusButton のクリックで count を 1 減らして、showCount() を呼ぶ
//  4) 読み込みのときに showCount() を 1 回呼んで、最初の表示を整える
//
// ヒント:
//  - 画面に文字を出すのは 要素.innerText = 値
//  - クリックの中では「状態を変える」と「画面を描き直す」の 2 つをやる。片方だけだと動かない
//  - count = count + 1 は count += 1 と短く書いてもよい
//  - 数が増えないときは console.log(count) を入れて、値が変わっているか先に確かめる

// ここは最初から書いてある（触らなくてよい）--------------------

let count = 0; // ← 状態。クリックのたびに書き換わるので let で持つ

const countLabel = document.getElementById("count"); // 数を映す場所（<span id="count">）
const plusButton = document.getElementById("plus"); // +1 ボタン
const minusButton = document.getElementById("minus"); // -1 ボタン

// ここから自分で書く ------------------------------------------

// TODO 1: showCount() を完成させる
//         仕事は 1 行だけ。count を countLabel.innerText に入れる
function showCount() {
  // ここを書く
  if (count >= 10) {
  countLabel.style.color = "blue";
  }else{
    countLabel.style.color = "black";
  }


  countLabel.innerText = count;
}

// TODO 2: plusButton がクリックされたら
//         ① count を 1 増やす  ② showCount() を呼ぶ
plusButton.addEventListener("click", () => {
  // ここを書く（2 つやる）
  count ++;
  showCount();
});

// TODO 3: minusButton がクリックされたら
//         ① count を 1 減らす  ② showCount() を呼ぶ
minusButton.addEventListener("click", () => {
  // ここを書く（2 つやる）
  if (count > 0) {
    count --;
    showCount();
  }
});

// TODO 4: 最初の表示のために showCount() を 1 回呼ぶ
//         （画面は最初「-」。これが無いと、押すまでずっと「-」のままで状態とずれる）
// ここを書く
showCount();



// ----- 余裕があれば拡張してみよう -----
// ・0 より下にならないようにする（if (count > 0) のときだけ減らす）
// ・count が 10 以上になったら countLabel の色を変える
//
// ----- 宿題（全員） -----
// index.html にボタンを 2 つ足して、main.js から動かす:
//   ・「リセット」ボタン    → HTML の id は "reset"、変数名は resetButton（押すと count = 0）
//   ・「5 ずつ増やす」ボタン → HTML の id は "plus5"、変数名は plus5Button（押すと count = count + 5）
// ボタンが増えても、画面を書き換える関数は showCount() ひとつのままで済むことを確かめよう。
