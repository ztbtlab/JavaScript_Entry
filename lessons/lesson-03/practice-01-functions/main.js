// 練習1: 関数で整理する
// ゴール: 「合計を出す関数」と「税込みにする関数」を作り、Console に結果を出す
//
// この練習は画面には何も出ない。DevTools の Console を開いて結果を見ること。
//
// 進め方:
//  1) calcTotal(price, count) … 単価 × 個数 を return で返す
//  2) applyTax(amount)        … 金額に 1.1 を掛けて小数を切り捨てて return で返す
//  3) 作った関数を呼び出して、結果を変数に入れる
//  4) console.log で「合計」と「税込み」を表示する
//
// ヒント:
//  - 関数の出口は return。計算しただけだと外に返らない（undefined になる）
//  - 小数の切り捨ては Math.floor(数値)
//  - 関数は「作っただけ」では動かない。呼び出して初めて動く

// このお店の値段設定（ここは触らなくてよい）
const price = 120; // 単価（円）
const count = 3; // 個数

// TODO 1: 単価 price と 個数 count を受け取り、合計（price * count）を return で返す関数
function calcTotal(price, count) {
  // ここを書く（return を忘れない）
  return price * count;
}

// TODO 2: 金額 amount を受け取り、税込み額（amount * 1.1 を小数切り捨て）を return で返す関数
//         ヒント: Math.floor(amount * 1.1)
function applyTax(amount) {
  // ここを書く（return を忘れない）
  return amount * 1.1;
}

// TODO 3: 上の関数を呼び出して、結果を変数に入れる
//         ① calcTotal(price, count) の戻り値を total に入れる
//         ② applyTax(total) の戻り値を totalWithTax に入れる
const total = calcTotal(price, count); // 例: calcTotal(price, count)
const totalWithTax = applyTax(total); // 例: applyTax(total)

// TODO 4: Console に表示する
//         「合計: ○○ 円」「税込み: ○○ 円」のように console.log で出す
// 例: console.log("合計:", total, "円");
console.log("合計:", total, "円")
console.log("税込み:", totalWithTax.toFixed(0), "円")

// ----- 余裕があれば拡張してみよう -----
// ・calcTotal をアロー関数に書き直す:  const calcTotal = (price, count) => price * count;
// ・送料を足す関数 addShipping(amount) を増やす（例: 500 円足す）
