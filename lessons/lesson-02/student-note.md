# 第2回 生徒用ノート「ブラウザで動かす（DOM とイベント）」

印刷して配布する前提の 1 枚メモ。授業中に書き込みながら使う。

---

## 1. DOM（ドム）って何？

- **DOM = Document Object Model**
- ブラウザが HTML を読み込んだあと、「JavaScript から触れる形」に変換したもの。
- イメージ: **HTML = 設計図**、**DOM = 組み立て済みで、名札（id）で呼び出せば手に持てる状態**。
- JS は DOM を通じて「取ってくる」「中身を書きかえる」「色やサイズを変える」ことができる。

```js
// 「title」という id の要素を取ってくる
const title = document.getElementById("title");
// 中身の文字を書きかえる
title.innerText = "こんにちは！";
```

---

## 2. なぜ「イベント」が必要？（Arduino との比べっこ）

Arduino では、ボタンが押されたか知るために `loop()` の中で `digitalRead(pin)` を**毎回呼んで**いた。

```c
void loop() {
  if (digitalRead(BUTTON_PIN) == HIGH) {
    // 押されたときの処理
  }
}
```

ブラウザは違う。「押されたときに呼んで」と**予約しておけば**、ブラウザが勝手に呼んでくれる。
これが **イベント駆動** というやり方で、`addEventListener` がその予約の道具。

```js
const button = document.getElementById("go");
// 「click が起きたら handleClick を呼んでね」と予約
button.addEventListener("click", handleClick);

function handleClick() {
  console.log("押された！");
}
```

つまり、ループを自分で書かなくていい。Arduino の割り込み（ピンが変化したら自動で呼ばれる関数）に近い考え方。

---

## 3. よく使う API（今日の道具）

| API | 何をする | 例 |
|-----|---------|------|
| `document.getElementById("xxx")` | `id="xxx"` の HTML 要素を 1 つ取ってくる | `const h = document.getElementById("title");` |
| `document.querySelector("セレクタ")` | CSS セレクタで 1 つ取ってくる（`#id`、`.class`、`input[name="x"]` など） | `document.querySelector('input[name="time"]:checked')` |
| `document.querySelectorAll("セレクタ")` | 条件に合うもの**全部**取ってくる（配列っぽいもの） | `document.querySelectorAll('input[name="time"]')` |
| `要素.innerText` | 中身の文字を読む／書きかえる | `title.innerText = "やあ";` |
| `要素.value` | `<input>` や `<textarea>` に**入力された文字**を読む／書く | `const s = input.value;` |
| `要素.style.color` | 文字色を変える（他にも `backgroundColor` など） | `title.style.color = "red";` |
| `要素.addEventListener("種類", 関数)` | 「○○が起きたら関数を呼ぶ」予約 | `btn.addEventListener("click", handle);` |

### イベントの「種類」よく使う 3 つ

- `"click"` … クリックされた
- `"input"` … `<input>` などに文字が入力された（1 文字ごと）
- `"change"` … ラジオ・チェックボックスなどで選び直した

---

## 4. 困ったら DevTools Console（超重要）

### 開き方

- Windows: `F12` キー
- Mac: `⌘` + `Option` + `I`
- タブを **Console** に切りかえる

### 使い方

- 赤い文字 = エラー。まずそこを読む。`Cannot read properties of null` みたいなのは「`getElementById` の id 間違い」の合図。
- 自分でも `console.log` を仕込む:

```js
const input = document.getElementById("name");
console.log("input の中身:", input);
console.log("入力された文字:", input.value);
```

- Arduino の `Serial.println` と同じ役割だと思っていい。

---

## 5. 今日のまとめ 3 行

1. **HTML の `id` を `document.getElementById` で取ってきて、JS から触れる。**
2. **ユーザーの操作は `addEventListener("click" / "input" / "change", 関数)` で受け取る。**
3. **動かないときは DevTools の Console を開いて、エラーと `console.log` を読む。**

---

## 6. 宿題

- `practice-03-greeting` を自分で拡張する:
  - ラジオの選択肢を増やす（深夜・夕方など）
  - 名前入力欄を足して「○○さん、おはよう」と表示する など
- 次回の冒頭で「何を足したか」を 1 分だけ紹介する。
