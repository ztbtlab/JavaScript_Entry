# 第3回 生徒用ノート「関数で整理する」

印刷して配布する前提の 1 枚メモ。授業中に書き込みながら使う。

---

## 1. 関数って何？（引数と戻り値）

- **関数 = 処理に名前を付けて、何度でも使い回せる道具。**
- 第2回 練習3 の「`if` の山」を思い出そう。処理を関数に切り出すと、読みやすく・直しやすくなる。
- 関数には **入口（引数）** と **出口（戻り値）** がある。

```js
// price（単価）と count（個数）を受け取り、合計を return で返す
function calcTotal(price, count) {
  return price * count; // ← return が出口。これを忘れると外に返らない
}

const total = calcTotal(120, 3); // ← 呼び出して戻り値を受け取る
console.log(total); // 360
```

- **引数（ひきすう）= 入口**。関数に渡すデータ（上の `price`, `count`）。
- **戻り値（もどりち）= 出口**。`return` で返すデータ。
- **`return` を忘れると `undefined`（値が無い印）になる**。今日の最頻出ミス。
- **関数は「作っただけ」では動かない**。`calcTotal(120, 3)` と呼び出して初めて動く。

---

## 2. アロー関数（同じことの別の書き方）

`function` を使わずに `=>`（アロー＝矢印）で書く、短い書き方。

```js
// function 版
function applyTax(amount) {
  return Math.floor(amount * 1.1);
}

// アロー関数版（同じ意味）
const applyTax = (amount) => Math.floor(amount * 1.1);
```

- 中身が `return 1 行だけ` なら、`{ }` と `return` を省いて `(amount) => amount * 1.1` とさらに短く書ける。
- 今は「`function` の短い書き方」くらいの理解で OK。次の `map` / `filter` に渡すときに便利さが分かる。

> 注意: `=>`（矢印・関数）と `>=`（以上・比較）は別物。見間違えないこと。

---

## 3. 配列をまとめて変換: `map`

- **配列 = 値をまとめた箱**。`const distancesCm = [12, 8, 30];`
- `map`（マップ）= **全部を 1 個ずつ変換して、新しい配列を返す**。

```js
const distancesCm = [12, 8, 30];
// 1 個ずつ 10 倍（cm → mm）
const distancesMm = distancesCm.map((cm) => cm * 10);
console.log(distancesMm); // [120, 80, 300]
```

- **個数は変わらない**（3 個 → 3 個）。
- `map` は **新しい配列を返す** ので、必ず変数で受け取る。**元の配列は変わらない**。
- `map` の中に渡すのが、さっきの **関数（アロー関数）**。

---

## 4. 配列を条件で絞り込む: `filter`

- `filter`（フィルター）= **条件に合うものだけ残して、新しい配列を返す**。

```js
const temps = [18, 26, 30, 22];
// 25 以上だけ残す
const hotDays = temps.filter((temp) => temp >= 25);
console.log(hotDays); // [26, 30]
```

- `filter` に渡す関数は **`true` / `false`（真偽値）を返す**。`true` のものだけ残る。
- **個数は減ることがある**（4 個 → 2 個）。
- 25 を含めたいなら `>=`（以上）。`>`（より大きい）だと 25 ちょうどが消える。

### `map` と `filter` の違い（今日の山）

| | `map` | `filter` |
|---|---|---|
| やること | 全部を変換 | 条件で残す |
| 個数 | 変わらない | **減ることがある** |
| 渡す関数が返すもの | 変換後の値 | `true` / `false` |

### `reduce` は名前だけ

- 配列を **1 つの値にまとめる**（合計など）メソッドもある。それが `reduce`（リデュース）。
- 今日は「そういうのもある」と名前を知るだけで OK。

---

## 5. Arduino との比べっこ

- Arduino は `void setup()` / `void loop()` という **関数の枠** に処理を書いていた。JS も「やることに名前を付けて関数にする」のは同じ発想。
  - 違い: JS の関数は **引数で受け取り、`return` で返せる**（Arduino の `void` は返さない）。
- センサーでためた値の配列を、PC 側の JS で **まとめて整える** のが `map` / `filter`。
  - 例: 距離（cm）を mm に直す（`map`）／ 暑かった日だけ取り出す（`filter`）。
- これは第6回（Node.js で Arduino ログを処理）への布石でもある。

---

## 6. 困ったら DevTools Console（今日は特に重要）

- 開き方: Windows `F12` / Mac `⌘ + Option + I` → **Console** タブ。
- **練習1 は画面に何も出ない**。Console を開いていないと結果が見えない。
- `undefined` が出たら → 関数の `return` 忘れ。
- 自分でも `console.log` を仕込む:

```js
const total = calcTotal(120, 3);
console.log("total:", total); // undefined なら return 忘れ
```

- Arduino の `Serial.println` と同じ役割。出す習慣を付ける。

---

## 7. 今日のまとめ 3 行

1. **処理は関数にまとめる。入口は引数、出口は `return`（忘れると `undefined`）。**
2. **配列をまとめて変換するのが `map`（個数そのまま）、条件で残すのが `filter`（個数が減る）。**
3. **困ったら DevTools の Console。練習1 は画面に出ないので必ず開く。**

---

## 8. 宿題

- **練習3 `practice-03-filter`（気温配列から 25 度以上だけ残す）** を家でやってくる。
  - 早く終わった人は授業中に着手してよい。
- 自分流に拡張（どれか 1 つ）:
  - しきい値（25）を変えて試す
  - `filter` のあと `map` で「26℃」のように単位付きにして表示する
- `answer/lesson-03-03-filter` ブランチで提出。次回冒頭で「何を試したか」を 1 分で紹介。
