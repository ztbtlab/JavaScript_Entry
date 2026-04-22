// 練習3: ラジオ選択で挨拶切替（完成版）
// 授業中は開かないこと。

// 1) 要素を取ってくる
const greeting = document.getElementById("greeting");
const radios = document.querySelectorAll('input[name="time"]');

if (!greeting || radios.length === 0) {
  console.error("必要な要素が見つかりません。index.html の id / name を確認してください。");
} else {
  // 2) 値から挨拶文字列を決める純粋関数（テストしやすい）
  function decideGreeting(value) {
    if (value === "morning") {
      return "おはよう";
    } else if (value === "noon") {
      return "こんにちは";
    } else if (value === "night") {
      return "こんばんは";
    } else {
      return "（未設定）";
    }
  }

  // 3) 画面を更新する関数
  function updateGreeting() {
    // 今チェック中のラジオを取得
    const checked = document.querySelector('input[name="time"]:checked');
    if (!checked) {
      greeting.innerText = "（何も選ばれていません）";
      return;
    }
    const value = checked.value;
    const message = decideGreeting(value);
    greeting.innerText = message;
    console.log("選ばれた:", value, "→", message);
  }

  // 4) 各ラジオに change イベントを登録
  radios.forEach((radio) => {
    radio.addEventListener("change", updateGreeting);
  });

  // 5) 最初の表示を整える（HTML で checked が付いているものに合わせる）
  updateGreeting();

  console.log("practice-03-greeting: 初期化完了");
}
