// 練習3: ラジオ選択で挨拶切替
// ゴール: ラジオで 朝 / 昼 / 夜 を選ぶと、それぞれ
//        「おはよう」「こんにちは」「こんばんは」が表示される
//
// 進め方:
//  1) ラジオボタン全部と、表示欄(#greeting)を取ってくる
//  2) 各ラジオに "change" イベントを登録する（選び直されたとき発火）
//  3) 選ばれている値を読み、if / else if / else で文言を決めて表示する
//
// ヒント:
//  - 同じ name の中から今チェック中のものを取るには:
//      document.querySelector('input[name="time"]:checked')
//    これで要素が取れるので .value で "morning" などが取れる
//  - ラジオ全部を取るには:
//      document.querySelectorAll('input[name="time"]')
//    これは配列っぽいものなので、forEach で 1 つずつ処理できる

// TODO 1: 表示欄を取ってくる（id="greeting"）
const greeting = document.getElementById("greeting");

// TODO 2: ラジオボタンを全部取ってくる
const radios = document.querySelectorAll('input[name="time"]'); // 例: document.querySelectorAll('input[name="time"]')
const checked = document.querySelector('input[name="time"]:checked');
const value = checked.value;

let greeting_text;
let test;

console.log("greeting:", greeting);
console.log("radios:", radios);


radios.forEach(radio => {
  radio.addEventListener("change", decideGreeting);
});



// TODO 3: 選ばれた値を受け取って、挨拶文字列を返す関数を作る
//         value は "morning" / "noon" / "night" の 3 つ
//         ヒント: if / else if / else で 3 分岐して、それぞれ return する
function decideGreeting(value) {
  console.log("decideGreeting");

for (let i = 0; i < 3; i++){
    if (radios.item(i).checked){
        test = radios.item(i).value;
        console.log(test);
    }
}


  if(test == "morning"){
    greeting_text = "おはよう";
  }else if(test == "noon"){
    greeting_text = "こんにちは";
  }else{
    greeting_text = "こんばんは";
  }
  updateGreeting();
  return "";
}

// TODO 4: 画面を更新する関数
//         手順:
//          ① 今チェック中のラジオを取る（README ヒント 1 参照）
//          ② その value を取り出す
//          ③ decideGreeting(value) で挨拶文字列を作る
//          ④ greeting.innerText にセットする
function updateGreeting() {
  greeting.innerText = greeting_text;
}

// TODO 5: 各ラジオに "change" イベントを登録
//         radios を 1 つずつ回して addEventListener を呼ぶ。
//         配列っぽいものを 1 つずつ処理する書き方は README ヒント 2 を見る。

// TODO 6: 最初の表示を整える
//         ページを開いた直後、朝が selected の状態に合わせて挨拶が出るようにしたい。
//         「ページを開いた時点で 1 回だけ」updateGreeting を呼ぶ書き方を考えよう。

// ----- 余裕があれば -----
// ・「深夜」「夕方」を増やす（HTML と JS の両方に足す）
// ・入力欄で名前を受け取って「○○さん、おはよう」にする
