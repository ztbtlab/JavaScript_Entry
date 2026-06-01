// 練習1: 関数で整理する（完成版）
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると
//        Console に結果と「自己チェック」の合否が出る。

// このお店の値段設定
const price = 120; // 単価（円）
const count = 3; // 個数

// 1) 単価 × 個数 の合計を返す関数（引数 2 つ・戻り値あり）
function calcTotal(price, count) {
  return price * count;
}

// 2) 税込み額（1.1 倍して小数切り捨て）を返す関数
//    アロー関数で書いてみた例。function で書いても同じ意味。
const applyTax = (amount) => Math.floor(amount * 1.1);

// 3) 呼び出して結果を変数に入れる
const total = calcTotal(price, count); // 120 * 3 = 360
const totalWithTax = applyTax(total); // floor(360 * 1.1) = floor(396) = 396

// 4) Console に表示
console.log("合計:", total, "円");
console.log("税込み:", totalWithTax, "円");

// ----- ここから下は「自己チェック」。期待値とズレていたら赤く知らせる -----
// （生徒の main.js には不要。answer.js が正しいことを Console で確かめるための仕掛け）
function check(label, actual, expected) {
  if (actual === expected) {
    console.log("OK ✓", label, "=", actual);
  } else {
    console.error("NG ✗", label, "= 期待値", expected, "なのに", actual);
  }
}

check("calcTotal(120, 3)", calcTotal(120, 3), 360);
check("applyTax(360)", applyTax(360), 396);
check("calcTotal(0, 5)", calcTotal(0, 5), 0); // 単価 0 円なら合計 0 円
check("applyTax(100)", applyTax(100), 110); // 100 円 → 110 円
check("applyTax(105)", applyTax(105), 115); // floor(105 * 1.1) = floor(115.5) = 115（切り捨て確認）
