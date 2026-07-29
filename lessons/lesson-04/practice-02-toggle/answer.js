// 練習2: トグル（開く / 閉じる）（完成版）
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると
//        完成した動きになり、Console に「自己チェック」の合否が出る。

// ① 状態を持つ（今パネルが開いているか）
let isOpen = true;

const panel = document.getElementById("panel");
const toggleButton = document.getElementById("toggleButton");

// ③ 画面を描き直す係。状態に合わせてボタンの文字を決める
function updateButtonText() {
  if (isOpen) {
    toggleButton.innerText = "閉じる";
  } else {
    toggleButton.innerText = "開く";
  }
}

toggleButton.addEventListener("click", () => {
  // 見た目の切り替え。渡すのは "hidden"（CSS の「.」は付けない）
  panel.classList.toggle("hidden");

  // ② 状態をひっくり返す。! は「反対」の意味
  isOpen = !isOpen;

  // ③ 状態を変えたら必ず描き直す
  updateButtonText();
});

// 最初の表示を整える（読み込み時に 1 回だけ）
updateButtonText();

// 講師メモ:
//   panel.classList.contains("hidden") で判定する書き方もあるが、今日は
//   「状態は変数で持つ／画面から読み返さない」を通すため isOpen を使わせる。
//   質問が出たら、練習1 の「変数が正、画面はそのコピー」と同じ理由だと答える。

// ----- ここから下は「自己チェック」。期待値とズレていたら赤く知らせる -----
// （生徒の main.js には不要。answer.js が正しいことを Console で確かめるための仕掛け）
function check(label, actual, expected) {
  if (actual === expected) {
    console.log("OK ✓", label, "=", actual);
  } else {
    console.error("NG ✗", label, "= 期待値", expected, "なのに", actual);
  }
}

check("最初は開いている", isOpen, true);
check("最初のボタンの文字", toggleButton.innerText, "閉じる");
check("最初は hidden が付いていない", panel.classList.contains("hidden"), false);

toggleButton.click(); // 1 回目のクリック
check("1 回押したあとの isOpen", isOpen, false);
check("1 回押したあとのボタンの文字", toggleButton.innerText, "開く");
check("1 回押したあとの hidden", panel.classList.contains("hidden"), true);

toggleButton.click(); // 2 回目のクリック（元に戻るはず）
check("2 回押したあとの isOpen", isOpen, true);
check("2 回押したあとのボタンの文字", toggleButton.innerText, "閉じる");
check("2 回押したあとの hidden", panel.classList.contains("hidden"), false);

console.log("practice-02-toggle: 初期化完了");
