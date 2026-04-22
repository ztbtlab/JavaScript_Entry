// 練習2: 入力を大文字に変換（完成版）
// 授業中は開かないこと。

// 1) 要素を取ってくる
const source = document.getElementById("source");
const output = document.getElementById("output");

if (!source || !output) {
  console.error("必要な要素が見つかりません。index.html の id を確認してください。");
} else {
  // 2) 入力があったときの処理
  function handleInput() {
    // 入力欄の value を取ってきて、大文字にして表示欄に入れる
    const text = source.value;
    const upper = text.toUpperCase();

    if (upper === "") {
      output.innerText = "（まだ入力されていません）";
    } else {
      output.innerText = upper;
    }

    console.log("入力:", text, "→ 出力:", upper);
  }

  // 3) "input" イベントを予約する（クリックではなく、1 文字入るたびに発火）
  source.addEventListener("input", handleInput);

  // 最初の表示を整える
  handleInput();

  console.log("practice-02-uppercase: 初期化完了");
}
