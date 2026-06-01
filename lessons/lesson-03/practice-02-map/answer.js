// 練習2: 距離センサー値を map で変換（完成版）
// 授業中は開かないこと。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると
//        画面に結果が出て、Console に「自己チェック」の合否も出る。

// 距離センサーで測った値（cm）
const distancesCm = [12, 8, 30, 5, 21];

// 画面の表示欄を取ってくる
const output = document.getElementById("output");

// 防御: 表示欄が取れなかったら止める
if (!output) {
  console.error("output 要素が見つかりません。index.html の id を確認してください。");
} else {
  // 1) cm を mm に変換する関数（1 個ぶんの変換ルール）
  function cmToMm(cm) {
    return cm * 10;
  }

  // 2) map で全要素を変換した「新しい配列」を作る
  //    cmToMm をそのまま渡せる。アロー関数で書くなら distancesCm.map((cm) => cm * 10)
  const distancesMm = distancesCm.map(cmToMm);

  // 3) Console で確認（元の配列は変わっていないことも確認できる）
  console.log("cm:", distancesCm);
  console.log("mm:", distancesMm);

  // 4) 画面に表示（配列を 1 行の文字列にする）
  output.innerText = distancesMm.join(", ") + " mm";

  // ----- ここから下は「自己チェック」。期待値とズレていたら赤く知らせる -----
  function check(label, actual, expected) {
    // 配列同士は JSON 文字列にして比べると簡単
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a === e) {
      console.log("OK ✓", label, "=", a);
    } else {
      console.error("NG ✗", label, "= 期待値", e, "なのに", a);
    }
  }

  check("cmToMm(12)", cmToMm(12), 120);
  check("cmToMm(0)", cmToMm(0), 0); // 0 cm は 0 mm
  check("distancesMm", distancesMm, [120, 80, 300, 50, 210]);
  // map は個数を変えない（5 個 → 5 個）
  check("個数は変わらない", distancesMm.length, distancesCm.length);
  // 元の配列は変わっていない（map は新しい配列を返すだけ）
  check("元の配列はそのまま", distancesCm, [12, 8, 30, 5, 21]);
}
