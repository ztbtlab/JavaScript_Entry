// 練習2: 距離センサー値を map で変換
// ゴール: cm の配列を map で「全部 10 倍」して mm の配列を作り、Console と画面に出す
//
// 進め方:
//  1) cmToMm(cm) … cm を受け取り、cm * 10（mm）を return で返す関数を作る
//  2) distancesCm.map(...) で、全要素を変換した「新しい配列」を作る
//  3) console.log で結果を確認する
//  4) 画面の output に、配列を文字列にして表示する（.join(", ")）
//
// ヒント:
//  - map は「1 個ずつ変換して、新しい配列を返す」メソッド。元の配列は変わらない
//  - map の中には「変換する関数」を渡す。cmToMm をそのまま渡せる: distancesCm.map(cmToMm)
//  - map は新しい配列を返すので、必ず変数で受け取る（受け取らないと消える）

// 距離センサーで測った値（cm）。ここは触らなくてよい。
const distancesCm = [12, 8, 30, 5, 21];

// 画面の表示欄を取ってくる
const output = document.getElementById("output");

// TODO 1: cm を受け取り、mm（cm * 10）を return で返す関数を作る
function cmToMm(cm) {
  // ここを書く（return を忘れない）
  return cm * 10;
}

// TODO 2: distancesCm を map で変換して、新しい配列 distancesMm を作る
//         ヒント: distancesCm.map(cmToMm)
const distancesMm = distancesCm.map(cmToMm); // 例: distancesCm.map(cmToMm)

// TODO 3: Console で確認する
//         元の配列と、変換後の配列の両方を出すと違いが分かりやすい
// 例: console.log("cm:", distancesCm);
//     console.log("mm:", distancesMm);
console.log("cm:", distancesCm);
console.log("mm", distancesMm);

// TODO 4: 画面の output に、変換後の配列を文字列にして表示する
//         配列を「120, 80, 300, ...」のように 1 行にするには .join(", ") を使う
// 例: output.innerText = distancesMm.join(", ") + " mm";

output.innerText = distancesMm.join(", ") + " mm";

// ----- 余裕があれば拡張してみよう -----
// ・map の中にアロー関数を直接書く:  const distancesMm = distancesCm.map((cm) => cm * 10);
// ・10 倍ではなく 100 倍（cm → 0.1mm 単位）にしてみる
