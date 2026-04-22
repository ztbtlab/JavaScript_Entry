// 練習1: ボタンで文字色を変える（完成版）
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると動作確認できる。

// 1) HTML の要素を id で取ってくる
const title = document.getElementById("title");
const button = document.getElementById("change-color");

// もし取れていなかったらエラーを出して止める（防御）
if (!title || !button) {
  console.error("必要な要素が見つかりません。index.html の id を確認してください。");
} else {
  // 2) クリックされたときの処理を関数にする
  function handleClick() {
    // 今の色を見て、赤と黒を切り替える（拡張版）
    // title.style.color は まだ何もしていない状態だと "" (空文字) になる
    if (title.style.color === "red") {
      title.style.color = "black";
    } else {
      title.style.color = "red";
    }
    console.log("色を変えました。今の色:", title.style.color);
  }

  // 3) ボタンにクリック予約をする
  button.addEventListener("click", handleClick);

  console.log("practice-01-color: 初期化完了");
}
