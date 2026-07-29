// 練習1: カウンター
// ゴール: 「+1」「-1」ボタンを押すと、画面の数が増えたり減ったりする
//
// 今日の 3 ステップをそのままなぞる練習:
//   ① 状態を持つ           let count = 0;
//   ② イベントで状態を変える  count = count + 1;
//   ③ 画面を描き直す         showCount();
//
// 進め方:
//  1) showCount() を完成させる（count を画面に映す）
//  2) plusButton のクリックで count を 1 増やして、showCount() を呼ぶ
//  3) minusButton のクリックで count を 1 減らして、showCount() を呼ぶ
//  4) 読み込みのときに showCount() を 1 回呼んで、最初の表示を整える
//
// ヒント:
//  - 画面に文字を出すのは 要素.innerText = 値
//  - クリックの中では「状態を変える」と「画面を描き直す」の 2 つをやる。片方だけだと動かない
//  - count = count + 1 は count += 1 と短く書いてもよい
//  - 数が増えないときは console.log(count) を入れて、値が変わっているか先に確かめる

// ここは最初から書いてある（触らなくてよい）--------------------

let count = 0; // ← 状態。クリックのたびに書き換わるので let で持つ

const countLabel = document.getElementById("count"); // 数を映す場所（<span id="count">）
const plusButton = document.getElementById("plus"); // +1 ボタン
const minusButton = document.getElementById("minus"); // -1 ボタン

// 拡張演出で使う設定と状態（中身の説明はファイル下部の「拡張」を見る）
// ※ ここに置くのは、下の showCount() が読み込み直後に呼ばれるため。
//    const / let は「書いた行より後」でしか使えないので、先に用意しておく
const HOT_THRESHOLD = 10; // この数以上で「ホット」状態にする
let lastMilestone = 0; // 直近で祝った節目（10, 20, 30 ...）。同じ節目で二重に祝わないための記録

// 「動きを減らす」設定にしている人には、激しい演出を出さない（アクセシビリティ配慮）
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// ここから自分で書く ------------------------------------------

// TODO 1: showCount() を完成させる
//         仕事は 1 行だけ。count を countLabel.innerText に入れる
function showCount() {
  countLabel.innerText = count;
  updateHotState(); // ← 拡張: 数字に応じて見た目も描き直す
}

// TODO 2: plusButton がクリックされたら
//         ① count を 1 増やす  ② showCount() を呼ぶ
plusButton.addEventListener("click", () => {
  count++;
  showCount();
});

// TODO 3: minusButton がクリックされたら
//         ① count を 1 減らす  ② showCount() を呼ぶ
minusButton.addEventListener("click", () => {
  if(count > 0) {
    count--;
  }
  showCount();
});

// TODO 4: 最初の表示のために showCount() を 1 回呼ぶ
//         （画面は最初「-」。これが無いと、押すまでずっと「-」のままで状態とずれる）
// ここを書く
showCount();

// ----- 余裕があれば拡張してみよう -----
// ・0 より下にならないようにする（if (count > 0) のときだけ減らす）→ TODO 3 で対応済み
// ・count が 10 以上になったら countLabel の色を変える     → 下でド派手に対応
//
// ==============================================================
// 拡張: count が 10 以上になったら countLabel を派手にする
// ==============================================================
// 考え方は今日の 3 ステップと同じ。増えたのは「③ 画面を描き直す」の中身だけ。
//   ・見た目そのもの（色・アニメーション）は style.css に置く
//   ・JS の仕事は「クラスを付ける / 外す」だけ
// こう分けておくと、演出を変えたくなっても main.js を触らなくて済む。
// （HOT_THRESHOLD / lastMilestone / prefersReducedMotion はファイル上部で用意済み）

// count に応じて countLabel の見た目を切り替える。showCount() から毎回呼ばれる
function updateHotState() {
  const isHot = count >= HOT_THRESHOLD;

  // classList.toggle(名前, true/false) は「true なら付ける・false なら外す」
  countLabel.classList.toggle("is-hot", isHot);

  // 今いる節目を求める（12 → 10、25 → 20、9 → 0）
  const milestone = isHot ? Math.floor(count / HOT_THRESHOLD) * HOT_THRESHOLD : 0;

  // 前より上の節目に「初めて」乗ったときだけお祝いする（10 で足踏みしても連発しない）
  if (milestone > lastMilestone) {
    celebrate(milestone);
  }
  lastMilestone = milestone;
}

// お祝い演出のまとめ役。数が大きいほど紙吹雪も増える
function celebrate(milestone) {
  if (prefersReducedMotion) return;

  flashScreen();
  shakeCard();
  showBurstText(milestone + " !!");
  launchConfetti(60 + milestone * 4);
}

// 画面全体を一瞬光らせる
function flashScreen() {
  const flash = document.createElement("div");
  flash.className = "screen-flash";
  document.body.appendChild(flash);
  // アニメーションが終わったら自分で消える（DOM にゴミを残さない）
  flash.addEventListener("animationend", () => flash.remove());
}

// カードをぶるっと揺らす
function shakeCard() {
  const card = document.querySelector("main");
  card.classList.remove("is-shaking"); // 連続で呼ばれても再生し直せるように一度外す
  void card.offsetWidth; // ← ブラウザに「変わった」と認識させるおまじない（リフロー）
  card.classList.add("is-shaking");
  card.addEventListener("animationend", () => card.classList.remove("is-shaking"), {
    once: true,
  });
}

// 真ん中に大きな文字をドンと出す
function showBurstText(text) {
  const burst = document.createElement("div");
  burst.className = "burst-text";
  burst.textContent = text; // innerHTML ではなく textContent（文字をそのまま出す安全な書き方）
  document.body.appendChild(burst);
  burst.addEventListener("animationend", () => burst.remove());
}

const CONFETTI_COLORS = [
  "#ff3b6b",
  "#ffb300",
  "#39d98a",
  "#2b6cb0",
  "#a855f7",
  "#00d4ff",
];

// 紙吹雪を降らせる。1 枚ずつ <span> を作って、落ち方だけランダムにする
function launchConfetti(amount) {
  const total = Math.min(amount, 200); // 増やしすぎると重いので上限を決めておく

  const layer = document.createElement("div");
  layer.className = "confetti-layer";

  for (let i = 0; i < total; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.animationDelay = (Math.random() * 0.6).toFixed(2) + "s";
    piece.style.animationDuration = (1.8 + Math.random() * 1.4).toFixed(2) + "s";
    // CSS 変数として渡すと、落ち方の式は CSS 側に任せられる
    piece.style.setProperty("--drift", Math.round(Math.random() * 240 - 120) + "px");
    piece.style.setProperty("--spin", Math.round(Math.random() * 1080 - 540) + "deg");
    layer.appendChild(piece);
  }

  document.body.appendChild(layer);
  // 一番長い紙吹雪（遅延 0.6s + 落下 3.2s）が終わる頃にまとめて片付ける
  setTimeout(() => layer.remove(), 4000);
}
//
// ----- 宿題（全員） -----
// index.html にボタンを 2 つ足して、main.js から動かす:
//   ・「リセット」ボタン    → HTML の id は "reset"、変数名は resetButton（押すと count = 0）
//   ・「5 ずつ増やす」ボタン → HTML の id は "plus5"、変数名は plus5Button（押すと count = count + 5）
// ボタンが増えても、画面を書き換える関数は showCount() ひとつのままで済むことを確かめよう。
