# 練習1: カウンターを 3 つのファイルに分ける

## 問題

第4回で作ったカウンター（＋1 / −1 / リセット）が、いまは `main.js` 1 つに全部入っている。
これを **役割ごとに 3 つのファイルに分ける**。

| ファイル | 担当 | 中身 |
|----------|------|------|
| `logic.js` | **計算だけ** | `increment(count)` / `decrement(count)` / `reset()` を `export` |
| `ui.js` | **画面だけ** | `showCount(value)` を `export`（`countLabel` の取得もこのファイル） |
| `main.js` | **司令塔** | `let count = 0;` と 3 つの `addEventListener`。上の 2 つを `import` してつなぐ |
| `index.html` | — | `<script>` に `type="module"` を足す |

**完成条件: 分ける前とまったく同じ動き**（＋1 / −1 / リセットが効いて、画面の数字が変わる）。
**動きが変わらないのが正解**。

> `logic.js` に `document` を書かないこと。書きたくなったら、それは画面の仕事なので `ui.js` に置く。

## 動かし方（⚠️ 今日はダブルクリック禁止）

VS Code で `index.html` を右クリック → **Open with Live Server**。
アドレスが `http://127.0.0.1:5500/...` になっていれば OK。

ダブルクリックで開く（アドレスが `file://` で始まる）と、Console にこんなエラーが出て動かない。

```
Access to script at 'file:///.../logic.js' from origin 'null' has been blocked by CORS policy
```

ブラウザが安全のため、ファイルを直接開いた状態では別ファイルの読み込みを禁止しているから
（**CORS**＝コルス。別の場所のファイルを読んでよいか決めるブラウザの安全ルール）。
**このエラーを見たら Live Server で開き直す**、とだけ覚えておけばよい。

## 進め方（一気に全部やらない）

配布された `main.js` は **そのままでも動く**。まず Live Server で開いて、
3 つのボタンが効くことを確かめてから分け始めること。

1. **`logic.js` に `increment` を 1 つだけ移す** → `main.js` から `import` して、＋1 が動くか確かめる
2. 動いたら `decrement` / `reset` も同じように移す
3. 画面の書き換えを `ui.js` の `showCount(value)` に移す
   （前回は引数なしだったが、今回は**値を渡す形**にする）
4. `index.html` の `<script>` に `type="module"` が付いているか確認する
5. 仕上げに `logic.js` を読み返して、`document` が 1 つも無いか確かめる

> `import` を書いたのに `type="module"` を足していないと、そこでエラーになる。
> 「`import` を書いたら `type="module"`」はセットで覚える。

## ヒント

1. `export` は **貸し出す印**。`function` の前に付ける。

   ```js
   export function increment(count) {
     return count + 1;
   }
   ```

2. `import` は **借りてくる**。**波カッコ `{ }`**・**`./`**・**`.js`** の 3 つを忘れやすい。

   ```js
   import { increment, decrement, reset } from "./logic.js";
   ```

3. `reset()` に引数はいらない。「いまの値」を使わずに 0 を返すだけだから。
4. 状態（`let count = 0;`）は分けたあとも **`main.js` が持つ**。`logic.js` には置かない。
5. 画面に `undefined` が出たら、`showCount()` を**引数なしで呼んでいる**合図。`showCount(count)` と渡す。
6. `main.js` に引っ越し元の行が残っていないか確認する（二重に書いてあると混乱のもと）。

> いきなり全部移さないこと。**1 つ移して動かす → 次を移す**の順が、いちばん早く終わる。

## チェックポイント

- [ ] **動作**: ＋1 / −1 / リセットが分ける前と同じように動く
- [ ] **分け方**: `logic.js` に `document` が 1 回も出てこない
- [ ] **分け方**: `ui.js` が計算をしていない（渡された値を映すだけ）
- [ ] **状態**: `let count = 0;` が `main.js` にある
- [ ] **引数**: `showCount(count)` と値を渡す形になっている
- [ ] **HTML**: `<script type="module" src="main.js"></script>` になっている
- [ ] **重複**: 引っ越し元の行が `main.js` に残っていない

## デバッグのコツ（この順で見る）

1. **アドレス欄**が `http://127.0.0.1:...` か（`file://` なら Live Server で開き直す）
2. **`type="module"`** が付いているか
3. **Console のエラー 1 行目**を読む（全部読まなくてよい）

Console に `count` と打っても `count is not defined` になるが、**これで正常**。
`type="module"` にすると、そのファイルの中で作った変数は外から見えなくなる（他のファイルと名前がぶつからないようにする安全策）。
中身を見たいときは、コードの中に `console.log(count);` を書く。

> `logic.js` は画面を知らないので、**画面が無くても確かめられる**のが利点。
> Console で `const m = await import("./logic.js"); m.increment(3);` と打つと `4` が返る。
> 「計算だけ切り出すと試しやすい」を体験したい人は試してみよう（できなくても問題ない）。

## 模範解答について

`answer/` フォルダに分けたあとの完成形（`logic.js` / `ui.js` / `main.js` / `index.html`）が入っている。
**授業中は開かないこと。** 詰まった人だけ講師の許可のもとで参照する。
`answer/index.html` を Live Server で開けば、完成形の動きを確認できる。

> ⚠️ `answer/` フォルダと `answer/*` ブランチは **講師の模範解答置き場** であって、提出先ではない。

## 提出について

**練習1 は授業内で終わらせる練習。この時間に提出の作業はしない**（＋1 / −1 / リセットが
分ける前と同じように動けば OK。講師に見せて次へ進む）。

提出のしかた（ブランチと PR）は、このあとの **練習2 で習う**。
練習2 を終えたら、自分で切った `feature/lesson-05-01-modules-xx` ブランチから
**練習1 の分もまとめて PR で提出**する（`xx` は講師が配る自分の記号）。
コマンドは練習2 の `steps.md` がそのまま使える。

> 練習1 の時点ではまだ習っていない手順なので、**先に自分で push しようとしなくてよい**。

## 余裕があれば（発展）

- `logic.js` に `incrementBy(count, amount)` を足して、**「5 ずつ増やす」ボタン**を自分で付ける。
  - `index.html` にボタンを 1 つ増やす（`id="plus5"`）
  - `main.js` で `count = incrementBy(count, 5);` を呼ぶ
  - `increment` との違いは「増やす量を引数でもらう」こと

## 用語メモ

- **モジュール**: 役割ごとに分けた JS ファイル 1 つ 1 つのこと。
- **`export`（エクスポート）**: 他のファイルに部品を貸し出す。
- **`import`（インポート）**: 他のファイルから部品を借りてくる。
- **`id="count"` と `countLabel` の違い**: `count` は**数そのもの**（状態）、`countLabel` は**数を出す場所**（画面の部品）。名前が似ているので混同しないこと。
