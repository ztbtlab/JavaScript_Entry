# 練習1: 関数で整理する

## 問題

買い物の「合計金額」と「税込み金額」を計算する関数を 2 つ作る。

- `calcTotal(price, count)` … 単価 × 個数 の **合計** を返す
- `applyTax(amount)` … 金額に 1.1 を掛けて小数を切り捨てた **税込み額** を返す

そして、その 2 つを呼び出して、結果を **Console に表示** する。

編集するのは `main.js` だけ。この練習は **画面には何も表示されない**（結果は Console に出る）。

## 完成イメージ（Console の表示）

単価 120 円・個数 3 個のとき:

```
合計: 360 円
税込み: 396 円
```

## ヒント

1. 関数の出口は `return`。`calcTotal` は `price * count` を `return` で返すだけ。**計算しただけ（`return` なし）だと外に返らず `undefined`（値が無い印）になる**ので注意。
2. 小数の切り捨ては `Math.floor(数値)`。`applyTax` は `Math.floor(amount * 1.1)` を `return` する。
3. 関数は「作っただけ」では動かない。`const total = calcTotal(price, count);` のように **呼び出して** 戻り値を受け取る。
4. 表示は `console.log("合計:", total, "円");` のように、ラベルと値を並べると読みやすい。

> いきなり答えを書かず、まず `console.log(total);` を入れて、関数の戻り値がちゃんと数になっているか（`undefined` でないか）を確認しよう。

## チェックポイント

- [ ] **動作**: Console に「合計」「税込み」が正しい数で出る
- [ ] **戻り値**: `calcTotal` と `applyTax` が両方とも `return` で値を返している（`undefined` が出ていない）
- [ ] **呼び出し**: 関数を定義しただけでなく、`calcTotal(price, count)` のように呼び出して結果を変数に入れている
- [ ] **命名**: 変数名が `total` / `totalWithTax` など役割の分かる名前になっている

## 動かし方

VS Code の Live Server で `index.html` を右クリック → **Open with Live Server**。
ブラウザが開いたら `F12`（Mac は `⌘+Option+I`）で DevTools を開き、**Console タブ**を見ること。
この練習は画面に何も出ないので、**Console を開いていないと結果が見えない**。

## デバッグのコツ

- `undefined` が出たら、関数に `return` を書き忘れている合図。
- 数が合わないときは、`console.log(price, count);` で引数の中身を確認する。
- アロー関数（`const calcTotal = (price, count) => price * count;`）に書き直しても結果は同じ。余裕があれば試してみよう。
