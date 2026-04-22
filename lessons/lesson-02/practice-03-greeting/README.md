# 練習3: ラジオ選択で挨拶切替

## 問題

ラジオボタンで「朝 / 昼 / 夜」のどれかを選ぶと、
それに合わせて以下の挨拶が表示されるようにする。

| 選んだ値 (`value`) | 表示する文字 |
|----|------|
| `morning` | おはよう |
| `noon`    | こんにちは |
| `night`   | こんばんは |

編集するのは `main.js` だけ。

## 完成イメージ

- ページを開くと「朝」が最初から選ばれていて、下に「おはよう」が表示されている
- 「昼」を選ぶと → 「こんにちは」に切りかわる
- 「夜」を選ぶと → 「こんばんは」に切りかわる

## ヒント

1. 同じ `name="time"` のラジオの中から **今チェックされている 1 つ** を取るには:
   ```js
   const checked = document.querySelector('input[name="time"]:checked');
   const value = checked.value; // "morning" / "noon" / "night"
   ```
2. ラジオ全部に同じイベントを登録したい。`querySelectorAll` で全部取って `forEach` で回すとよい:
   ```js
   const radios = document.querySelectorAll('input[name="time"]');
   radios.forEach((radio) => {
     radio.addEventListener("change", updateGreeting);
   });
   ```
3. 値によって文言を変えるのは `if / else if / else`。入力値と出力値だけに集中した **関数** に切り出すと読みやすい（例: `decideGreeting(value)`）。

## チェックポイント

- [ ] **動作**: 朝 / 昼 / 夜 を選び直すたびに、表示文字列が正しく切りかわる
- [ ] **コード構造**: 「値 → 挨拶文字列」を決める処理が関数に分かれている（`if` を `addEventListener` の中に全部書きっぱなしにしない）
- [ ] **命名**: ラジオを入れる変数は `radios`（複数形）、表示先は `greeting` など、役割が名前から読めること

## 宿題チャレンジ（余力があれば）

- 選択肢を 4 つ以上にする（夕方・深夜など）
- 名前入力欄を足して「○○さん、おはよう」と出す
- **次回（第3回）への予告**: `decideGreeting(value)` の中身を増やしていくと `main.js` が長くなる。次回は、この「値 → 文字列」を決める部分を**別の関数や別のファイルに分けて整理する**練習をする。今のうちに「もし選択肢が 10 個になったら `if` の山で読みにくくないか？」と考えてみよう。

## 動かし方

VS Code の Live Server で `index.html` を開く。DevTools の Console を開いておくこと。
