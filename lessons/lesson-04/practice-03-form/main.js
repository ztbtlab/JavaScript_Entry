// 練習3: センサー登録フォーム
// ゴール: 空入力をはじいてエラーを出し、ちゃんと入力されたときだけ登録件数を増やす
//
// 今日の総合問題。使うのは全部これまでの組み合わせ:
//   ・状態（練習1）        let registeredCount = 0;
//   ・クラスの付け外し（練習2） sensorInput.classList.toggle("error", 条件)
//   ・検証（バリデーション）  入力が使える形か確かめる
//
// 完成条件（3 つとも満たすこと）:
//   1) 空のまま「登録」を押すとエラー文言が出て、件数は増えない
//   2) スペースだけでもエラーになる
//   3) 文字を入れて押すと件数が 1 増え、エラーが消え、入力欄が空に戻る
//
// 進め方:
//  1) showCount() … registeredCount を画面に映す（練習1 と同じ）
//  2) checkInput(text) … 使えるかどうかを true / false で返す（第3回の isHot と同じ形）
//  3) 「登録」ボタンのクリックで、検証 → 状態を変える → 画面を描き直す
//  4) エラーのとき入力欄の枠を赤くする
//  5) 読み込みのときに showCount() を 1 回呼ぶ
//
// ヒント:
//  - 入力欄の文字は sensorInput.value（<input> だけは innerText ではない。必ず文字列）
//  - trim() は前後の空白を取り除く。"   " 対策に最初から付けておくと安全
//  - 「同じ？」を比べるのは ===。if (text = "") と = ひとつで書くと壊れる
//  - ダメなときは if (checkInput(text) === false) { return; } で先に進まない
//  - classList.toggle("error", true) は必ず付ける、false は必ず外す

// ここは最初から書いてある（触らなくてよい）--------------------

let registeredCount = 0; // ← 状態。登録できた件数

const sensorInput = document.getElementById("sensorInput"); // 入力欄
const submitButton = document.getElementById("submitButton"); // 登録ボタン
const errorMessage = document.getElementById("errorMessage"); // エラー文言を出す場所
const countLabel = document.getElementById("count"); // 件数を映す場所

// ここから自分で書く ------------------------------------------

// TODO 1: showCount() を完成させる
//         registeredCount を countLabel.innerText に入れる（練習1 と同じ）
function showCount() {
  // ここを書く
  countLabel.innerText = registeredCount;
}

// TODO 2: checkInput(text) を完成させる
//         ・text が "" なら → errorMessage にエラー文言を出して、false を返す
//         ・そうでなければ → errorMessage を空文字にして（エラーを消して）、true を返す
//         エラーは「出す」だけでなく「消す」までがセット。消し忘れると赤いまま残る
//         （あとで TODO 4 でこの関数に 2 行戻ってくる）
function checkInput(text) {
  // ここを書く
      sensorInput.classList.toggle("error", text === "");
  if (text === "") {
    errorMessage.innerText = "センサー名を入力してください";
    return false;
  }else{
  errorMessage.innerText = "";
  return true;
  }
}

submitButton.addEventListener("click", () => {
  // TODO 3: 登録の流れを書く
  //   ① sensorInput.value.trim() を変数 text に入れる
  //   ② checkInput(text) が false なら、ここで終わり（return）
  //   ③ true なら registeredCount を 1 増やす
  //   ④ showCount() を呼ぶ
  //   ⑤ sensorInput.value = "" で入力欄を空に戻す
  // ここを書く
  const text = sensorInput.value.trim();
  if (checkInput(text) === false) {
    return;
  }else{
  registeredCount++;
  }
  showCount();
  sensorInput.value = "";
});

// TODO 4: エラーのとき入力欄の枠を赤くする
//         checkInput の中で sensorInput.classList.toggle("error", 条件) を使う
//         （第 2 引数が true なら付ける、false なら外す。練習2 の classList の応用）
//         → TODO 2 で書いた checkInput に 2 行足す形になる


// TODO 5: 最初の表示のために showCount() を 1 回呼ぶ
//         （画面は最初「-」。これが無いと、登録するまでずっと「-」のまま）
// ここを書く
showCount();

// ----- 余裕があれば拡張してみよう -----
// ・登録したセンサー名を配列にためて、画面に一覧表示する（第3回の map / join が使える）
// ・同じ名前が既に登録されていたら「もう登録済み」とエラーにする
// ・2 文字以上でないとエラー、という条件を足す（宿題の任意課題）
