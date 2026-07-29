// 練習2: トグル（開く / 閉じる）
// ゴール: ボタンを押すたびに説明パネルが消えたり出たりして、
//        ボタンの文字も「閉じる」↔「開く」で入れ替わる
//
// 今日の 3 ステップは同じ:
//   ① 状態を持つ           let isOpen = true;
//   ② イベントで状態を変える  isOpen = !isOpen;
//   ③ 画面を描き直す         updateButtonText();
//
// 進め方:
//  1) updateButtonText() を完成させる（isOpen に合わせてボタンの文字を決める）
//  2) クリックで panel の見た目を切り替える（classList.toggle）
//  3) 同じクリックの中で isOpen をひっくり返す
//  4) 状態を変えたら updateButtonText() を呼ぶ
//  5) 読み込みのときに updateButtonText() を 1 回呼ぶ
//
// ヒント:
//  - 見た目の切り替えは 1 行: 要素.classList.toggle("クラス名");
//  - 渡すのは "hidden"。CSS で書く「.」は付けない
//  - ! は「反対」。isOpen = !isOpen; で true ↔ false がひっくり返る
//  - 文字の切り替えは if (isOpen) { ... } else { ... }。練習1 の showCount() と同じ「表示更新関数」

// ここは最初から書いてある（触らなくてよい）--------------------

let isOpen = true; // ← 状態。今パネルが開いているかどうか

const panel = document.getElementById("panel"); // 出し入れするパネル
const toggleButton = document.getElementById("toggleButton"); // 切り替えボタン

// ここから自分で書く ------------------------------------------

// TODO 1: updateButtonText() を完成させる
//         isOpen が true なら「閉じる」、false なら「開く」を
//         toggleButton.innerText に入れる（if / else を使う）
function updateButtonText() {
  // ここを書く
}

toggleButton.addEventListener("click", () => {
  // TODO 2: panel に "hidden" クラスを付けたり外したりする（1 行）
  // ここを書く

  // TODO 3: 状態 isOpen をひっくり返す
  // ここを書く

  // TODO 4: 状態を変えたので、ボタンの文字を描き直す
  // ここを書く
});

// TODO 5: 最初の表示のために updateButtonText() を 1 回呼ぶ
// ここを書く

// ----- 余裕があれば拡張してみよう -----
// ・パネルが閉じているときだけボタンの色を変える（もう 1 つクラスを作って toggle する）
// ・「開いた回数」を数える状態を足して、画面に出す（宿題の任意課題）
