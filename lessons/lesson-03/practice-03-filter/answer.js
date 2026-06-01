// 練習3（発展 / 宿題）: 気温配列を filter で絞り込む（完成版）
// 授業中は開かないこと。
//
// 使い方: index.html の <script src="main.js"> を <script src="answer.js"> に差し替えると
//        画面に結果が出て、Console に「自己チェック」の合否も出る。

// 1 週間の気温（℃）
const temps = [18, 26, 30, 22, 25, 19, 28];

// 画面の表示欄を取ってくる
const output = document.getElementById("output");

// 防御: 表示欄が取れなかったら止める
if (!output) {
  console.error("output 要素が見つかりません。index.html の id を確認してください。");
} else {
  // 1) 「暑い日かどうか」を判定する関数（true / false を返す）
  //    25 を含めたいので >=（以上）を使う
  function isHot(temp) {
    return temp >= 25;
  }

  // 2) filter で 25 度以上だけ残した「新しい配列」を作る
  //    isHot をそのまま渡せる。アロー関数なら temps.filter((t) => t >= 25)
  const hotDays = temps.filter(isHot);

  // 3) Console で確認（元の配列・絞り込み後・件数）
  console.log("全部:", temps);
  console.log("暑い日:", hotDays);
  console.log("件数:", hotDays.length);

  // 4) 画面に表示
  output.innerText = "暑い日: " + hotDays.join(", ") + " ℃（" + hotDays.length + "件）";

  // 5) （発展）filter で絞ってから map で単位付き文字列に変換する合わせ技
  const hotLabels = hotDays.map((t) => t + "℃");
  console.log("単位付き:", hotLabels); // ["26℃", "30℃", "25℃", "28℃"]

  // ----- ここから下は「自己チェック」。期待値とズレていたら赤く知らせる -----
  function check(label, actual, expected) {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a === e) {
      console.log("OK ✓", label, "=", a);
    } else {
      console.error("NG ✗", label, "= 期待値", e, "なのに", a);
    }
  }

  check("isHot(25)", isHot(25), true); // 25 ちょうどは含む（>= の確認）
  check("isHot(24)", isHot(24), false); // 24 は含まない
  check("isHot(30)", isHot(30), true);
  check("hotDays", hotDays, [26, 30, 25, 28]);
  check("件数", hotDays.length, 4);
  // filter は個数が減ることがある（7 個 → 4 個）
  check("元より減っている", hotDays.length < temps.length, true);
  // 元の配列は変わらない
  check("元の配列はそのまま", temps, [18, 26, 30, 22, 25, 19, 28]);
  // 発展: filter → map の合わせ技
  check("単位付き", hotLabels, ["26℃", "30℃", "25℃", "28℃"]);
}
