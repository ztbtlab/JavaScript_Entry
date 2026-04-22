// 練習1: ボタンで文字色を変える
// ゴール: 「色を変える」ボタンを押したら、見出し(#title)の文字色が赤になる
//
// 進め方:
//  1) HTML の要素を id で取ってくる
//  2) ボタンに「クリックされたら呼ばれる関数」を登録する
//  3) その関数の中で、見出しの style.color を変える
//
// ヒント:
//  - 要素を取るのは document.getElementById("xxx")
//  - クリック予約は 要素.addEventListener("click", 関数)
//  - 文字色は 要素.style.color = "red"

// TODO 1: 見出し要素を取ってくる（id は "title"）
const title = null;

// TODO 2: ボタン要素を取ってくる（id は "change-color"）
const button = null;

// 取れたかどうか Console で確認する（これはヒント用、消してよい）
console.log("title:", title);
console.log("button:", button);

// TODO 3: クリックされたときに呼ばれる関数を作る
//         中で title の文字色を "red" に変える
function handleClick() {
  // ここを書く
}

// TODO 4: ボタンに「クリックされたら handleClick を呼んでね」と予約する
//         ヒント: button.addEventListener("click", handleClick);

// ----- 余裕があれば拡張してみよう -----
// ・もう一度押したら黒に戻る（今の色を見て切り替える）
// ・ランダムな色にする（配列からランダムに選ぶ）
