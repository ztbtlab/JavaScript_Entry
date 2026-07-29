// 練習3: センサー登録フォーム（完成版）
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると
//        完成した動きになり、Console に「自己チェック」の合否が出る。

// ① 状態を持つ（登録できた件数）
let registeredCount = 0;

const sensorInput = document.getElementById("sensorInput");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
const countLabel = document.getElementById("count");

// ③ 画面を描き直す係（練習1 とまったく同じ形）
function showCount() {
  countLabel.innerText = registeredCount;
}

// 検証（バリデーション）。使えるかどうかを true / false で返す。
// 第3回で filter に渡した isHot(temp) と同じく「判定して返すだけ」の関数。
function checkInput(text) {
  if (text === "") {
    errorMessage.innerText = "センサー名を入力してください";
    sensorInput.classList.toggle("error", true); // 赤枠を付ける
    return false; // 使えない
  }

  errorMessage.innerText = ""; // エラーを消す。ここを忘れると赤いまま残る
  sensorInput.classList.toggle("error", false); // 赤枠を外す
  return true; // 使える
}

submitButton.addEventListener("click", () => {
  // .value は必ず文字列。trim() で前後の空白を落としてから調べる（"   " 対策）
  const text = sensorInput.value.trim();

  // ダメなときは早めに return して、先に進まない
  if (checkInput(text) === false) {
    return;
  }

  // ② 状態を変える → ③ 画面を描き直す
  registeredCount = registeredCount + 1;
  showCount();

  // 次の入力のために空に戻す
  sensorInput.value = "";
});

// 最初の表示を整える（読み込み時に 1 回だけ）
showCount();

// ----- ここから下は「自己チェック」。期待値とズレていたら赤く知らせる -----
// （生徒の main.js には不要。answer.js が正しいことを Console で確かめるための仕掛け）
function check(label, actual, expected) {
  if (actual === expected) {
    console.log("OK ✓", label, "=", actual);
  } else {
    console.error("NG ✗", label, "= 期待値", expected, "なのに", actual);
  }
}

// 検証関数そのものの確認
check('checkInput("") は false', checkInput(""), false);
check("空のときエラー文言が出る", errorMessage.innerText, "センサー名を入力してください");
check("空のとき赤枠が付く", sensorInput.classList.contains("error"), true);
check('checkInput("温度センサー") は true', checkInput("温度センサー"), true);
check("OK のときエラー文言が消える", errorMessage.innerText, "");
check("OK のとき赤枠が外れる", sensorInput.classList.contains("error"), false);

// 完成条件 1: 空のまま押しても件数は増えない
sensorInput.value = "";
submitButton.click();
check("空で登録しても件数は 0", registeredCount, 0);

// 完成条件 2: スペースだけでもエラー（trim が効いているか）
sensorInput.value = "   ";
submitButton.click();
check("スペースだけでも件数は 0", registeredCount, 0);
check("スペースだけでエラー文言が出る", errorMessage.innerText, "センサー名を入力してください");

// 完成条件 3: 文字を入れて押すと 1 増え、エラーが消え、入力欄が空に戻る
sensorInput.value = "温度センサー";
submitButton.click();
check("登録できたら件数は 1", registeredCount, 1);
check("画面の件数表示", countLabel.innerText, "1");
check("エラー文言は消えている", errorMessage.innerText, "");
check("入力欄は空に戻る", sensorInput.value, "");

sensorInput.value = " 距離センサー "; // 前後に空白があっても登録できる
submitButton.click();
check("2 件目も登録できる", registeredCount, 2);

// 自己チェックで増やした分を元に戻して、手で試せる状態にする
registeredCount = 0;
showCount();
sensorInput.value = "";
errorMessage.innerText = "";
sensorInput.classList.remove("error");
console.log("practice-03-form: 初期化完了");
