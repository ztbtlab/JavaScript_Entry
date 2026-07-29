# 練習2: トグル（開く / 閉じる）

## 問題

ボタンを押すたびに、説明パネルの **表示 / 非表示** を切り替える。
ボタンの文字も状態に合わせて「閉じる」↔「開く」で入れ替える。

- ボタンを押すとパネルが消え、もう一度押すと出る
- ボタンの文字とパネルの状態が **ずれない**

編集するのは `main.js` だけ。`style.css` に `.hidden { display: none; }` は用意してある。

## 今日の言葉: `classList`

クラス（class）は **見た目の名札**。CSS 側で「この名札が付いていたらこう見せる」を決めておく。

```css
.hidden {
  display: none; /* 名札が付いたら消える */
}
```

JS からは 3 つの操作ができる。今日の主役は `toggle`。

```js
要素.classList.add("クラス名");    // 名札を付ける（消す）
要素.classList.remove("クラス名"); // 名札を外す（出す）
要素.classList.toggle("クラス名"); // 付いてたら外す、外れてたら付ける（切替）
```

この練習で使う「要素」と「クラス名」は、下の **「使う名前」** の表を見ること。

**`toggle`（トグル）= 交互に切り替える**という意味。
Arduino で LED を押すたびに点けたり消したりした `ledState = !ledState;` と同じ発想。

## 使う名前

| 種類 | 名前 | 役割 |
|------|------|------|
| 状態 | `isOpen` | 今開いているか（`let isOpen = true;`） |
| 対象 | `panel` | 出し入れする `<div id="panel">` |
| ボタン | `toggleButton` | `<button id="toggleButton">` |
| 関数 | `updateButtonText()` | `isOpen` に合わせてボタン文字を書き換える |
| CSS クラス | `hidden` | `display: none;` |

## ヒント（番号は `main.js` の TODO と同じ）

1. `updateButtonText()` は `if (isOpen) { ... } else { ... }` で文字を決める。
   これは練習1 の `showCount()` と同じ **表示更新関数**。（TODO 1）
2. 見た目を変えるのは **1 行**。`panel` に `"hidden"` を付け外しする: `panel.classList.____("hidden");`（TODO 2）
3. `!` は「反対」の意味。`isOpen` を **ひっくり返す**と `true` ↔ `false` が入れ替わる。（TODO 3）
4. 状態を変えたら `updateButtonText()` を呼ぶ。③ を忘れない。（TODO 4）
5. 最初の表示のために `updateButtonText()` を 1 回呼ぶ。（TODO 5）

> 見た目は 2 か所（パネルとボタン文字）変わる。**どちらもクリックの中でまとめてやる**こと。片方だけだとズレる。

## つまずきやすいところ

- **`classList.toggle(".hidden")` と `.` を付ける** → `.` は CSS の書き方。JS には名前だけ渡す。
- **何も起きない** → CSS に `.hidden` があるか確認（この練習では用意済み）。
  名札は付いていても、見え方を決める CSS が無ければ画面は変わらない。
- **`class` と `classList` を混同する** → `classList` が JS 側の窓口。`class=` は HTML の書き方。

## チェックポイント

- [ ] **動作**: 押すたびにパネルが消える / 出る
- [ ] **文字**: ボタンが「閉じる」↔「開く」で入れ替わる
- [ ] **ズレなし**: パネルの状態とボタンの文字が必ず一致する
- [ ] **状態**: `isOpen` を `!` でひっくり返している（画面から読み返していない）
- [ ] **初期表示**: 読み込み時に `updateButtonText()` を 1 回呼んでいる

## 動かし方

VS Code の Live Server で `index.html` を右クリック → **Open with Live Server**。
切り替わらないときは `F12`（Mac は `⌘ + Option + I`）で Console を開いてエラーを読む。
パネルに `hidden` が付いているかは、DevTools の Elements タブでも確かめられる。

## もっとやりたい人へ

- パネルが閉じているときだけボタンの色を変える（もう 1 つクラスを作って `toggle` する）
- 「開いた回数」を数える状態を足して画面に出す（宿題の任意課題）
