// 練習2: 入力を大文字に変換
// ゴール: 入力欄に文字を打つたびに、下の "結果:" に大文字が表示される
//
// 進め方:
//  1) 入力欄(#source)と表示欄(#output)を取ってくる
//  2) 入力欄に "input" イベントの予約をする
//  3) 入力されるたびに、value を大文字にして output.innerText に入れる
//
// ヒント:
//  - 入力欄の中身は .innerText ではなく .value で取る
//  - 大文字にするのは 文字列.toUpperCase()
//  - クリックではなく入力ごとに反応させたいので "input" イベントを使う

// TODO 1: 入力欄を取ってくる（id="source"）
const source = null;

// TODO 2: 表示欄を取ってくる（id="output"）
const output = null;

console.log("source:", source);
console.log("output:", output);

// TODO 3: 入力があったときに呼ばれる関数を作る
//         手順:
//          ① 入力欄の中身（value）を変数に入れる
//          ② 大文字に変える
//          ③ それを output.innerText に入れる
function handleInput() {
  // ここを書く（3 ステップを 3 行で書いてみる）
}

// TODO 4: source に "input" イベントを登録する
//         「入力されるたびに handleInput を呼んでね」と予約する書き方を、
//         生徒用ノートの「よく使う API」を見て思い出そう。

// ----- 余裕があれば -----
// ・空っぽのときは "（まだ入力されていません）" と出す
// ・大文字ではなく .toLowerCase() にしてみる
