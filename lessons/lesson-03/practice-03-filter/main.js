// 練習3（発展 / 宿題）: 気温配列を filter で絞り込む
// ゴール: 気温の配列から filter で「25 度以上」だけ残し、Console と画面に出す
//
// 進め方:
//  1) isHot(temp) … 気温を受け取り、25 度以上なら true、そうでなければ false を return する関数
//  2) temps.filter(...) で 25 度以上だけ残した「新しい配列」を作る
//  3) 結果と件数（.length）を console.log で確認する
//  4) 画面の output に「暑い日: 26, 30, ... ℃（◯件）」のように表示する
//  5) （発展）map と合わせて、暑い日を「26℃」のように単位付き文字列に変換して表示する
//
// ヒント:
//  - filter は「条件に合うものだけ残して、新しい配列を返す」メソッド
//  - filter に渡す関数は true / false（真偽値）を返す。true のものだけ残る
//  - map は「個数そのまま変換」、filter は「個数が減ることがある絞り込み」。役割が違う
//  - 25 を含めたいので「>=（以上）」を使う（「>」だと 25 ちょうどが消える）

// 1 週間の気温（℃）。ここは触らなくてよい。
const temps = [18, 26, 30, 22, 25, 19, 28];

// 画面の表示欄を取ってくる
const output = document.getElementById("output");
const source = document.getElementById("source");


// TODO 1: 気温 temp を受け取り、25 度以上なら true を return する関数を作る
//         ヒント: return temp >= 25;
function isHot(temp) {
  // ここを書く（true / false を return する）
  const temperature = source.value;
  return temp >= temperature;
}


function iscold(temp) {
  // ここを書く（true / false を return する）
  return temp < 20;
}

// TODO 2: temps を filter で絞り込んで、25 度以上だけの新しい配列 hotDays を作る
//         ヒント: temps.filter(isHot)

//const hotDays =   temps.filter(isHot); // 例: temps.filter(isHot)
source.addEventListener("input",() => {if(source.value == 0){output.innerText = "（ここに結果が出ます）"}else{updatedisplay()}});
const coldDays = temps.filter(iscold);


// TODO 3: Console で確認する（元の配列・絞り込み後・件数）
// 例: console.log("全部:", temps);
//     console.log("暑い日:", hotDays);
//     console.log("件数:", hotDays.length);

// TODO 4: 画面の output に表示する
//         「暑い日: 26, 30, 25, 28 ℃（4件）」のように出したい
//         配列を 1 行にするには .join(", ")、件数は hotDays.length
// 例: output.innerText = "暑い日: " + hotDays.join(", ") + " ℃（" + hotDays.length + "件）";


//output.innerText = "暑い日: " + hotDays.join(", ") + "℃ (" + hotDays.length + "件)";

function updatedisplay (){
const hotDays = temps.filter(isHot);

console.log("全部:", temps);
console.log("暑い日:", hotDays);
console.log("件数:", hotDays.length);

console.log("全部:", temps);
console.log("寒い日:", coldDays);
console.log("件数:", coldDays.length);

console.log("暑い温度:", source.value);

output.innerText = "暑い日("+ source.value +"℃以上): " + hotDays.join("℃, ") + "℃ (" + hotDays.length + "件)\n"+
                  "寒い日(20℃未満): " + coldDays.join("℃, ") + "℃ (" + coldDays.length + "件)";
}
// TODO 5（発展）: map と合わせ技
//   hotDays を map で「"26℃", "30℃", ...」のように単位付き文字列の配列にしてから表示してみよう。
//   ヒント: hotDays.map((t) => t + "℃")
//   ※ filter で絞ってから map で変換する、という「絞ってから整える」流れを体験する。

// ----- 余裕があれば拡張してみよう（宿題のネタ）-----
// ・しきい値 25 を変数 threshold にして、28 などに変えてみる
// ・「寒い日（20 度未満）」を残す filter も書いてみる
