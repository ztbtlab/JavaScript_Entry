// 練習2: トグル（開く / 閉じる）
// ゴール: ボタンを押すたびに説明パネルが消えたり出たりして、
//        ボタンの文字も「閉じる」↔「開く」で入れ替わる
//
// 今日の 3 ステップは同じ:
//   ① 状態を持つ           let isOpen = true;
//   ② イベントで状態を変える  isOpen = !isOpen;
//   ③ 画面を描き直す         updateButtonText();
//
// 進め方:
//  1) updateButtonText() を完成させる（isOpen に合わせてボタンの文字を決める）
//  2) クリックで panel の見た目を切り替える（classList.toggle）
//  3) 同じクリックの中で isOpen をひっくり返す
//  4) 状態を変えたら updateButtonText() を呼ぶ
//  5) 読み込みのときに updateButtonText() を 1 回呼ぶ
//
// ヒント:
//  - 見た目の切り替えは 1 行: 要素.classList.toggle("クラス名");
//  - 渡すのは "hidden"。CSS で書く「.」は付けない
//  - ! は「反対」。isOpen = !isOpen; で true ↔ false がひっくり返る
//  - 文字の切り替えは if (isOpen) { ... } else { ... }。練習1 の showCount() と同じ「表示更新関数」

// ここは最初から書いてある（触らなくてよい）--------------------

let isOpen = true; // ← 状態。今パネルが開いているかどうか

const panel = document.getElementById("panel"); // 出し入れするパネル
const toggleButton = document.getElementById("toggleButton"); // 切り替えボタン

// 拡張演出で使う設定と状態（中身の説明はファイル下部の「拡張」を見る）
// ※ ここに置くのは、下の updateButtonText() が読み込み直後に呼ばれるため。
//    const / let は「書いた行より後」でしか使えないので、先に用意しておく

let openCount = 0; // 開いた回数（宿題の任意課題）
let dodgeCount = 0; // はぐらかされた回数（気まぐれで開かなかった回数）
let dodgeStreak = 0; // 続けてはぐらかした回数（続きすぎないようにするため）
let clickTimes = []; // 直近のクリック時刻。連打かどうかを見るために覚えておく
let rageLevel = 0; // 怒りゲージ 0〜3
let isBusy = false; // 演出中フラグ。true の間はクリックを受け付けない
let calmTimer = 0; // 「しばらく押さなければ落ち着く」タイマーの番号
let dodgeTimer = 0; // はぐらかし演出を元に戻すタイマーの番号

const DODGE_BASE_CHANCE = 0.35; // 開こうとしたときに はぐらかす確率（機嫌が悪いほど上がる）
const MAX_DODGE_STREAK = 2; // これ以上続けてはぐらかさない（永遠に開けないと困るので）
const PEEK_MS = 700; // 開きかけて閉じる演出の長さ（CSS のアニメーション時間と合わせる）
const RAGE_WINDOW_MS = 2500; // 「連打」とみなす時間の幅
const RAGE_STEPS = [4, 7, 10]; // この回数を超えるごとに 怒り 1 → 2 → 3
const FREEZE_MS = 1800; // ブチギレ中、ボタンを受け付けない時間

// 「動きを減らす」設定にしている人には、激しい演出を出さない（アクセシビリティ配慮）
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// 「開いた回数」と「ひとこと」を出す場所を JS で作ってボタンの下に差し込む
// （index.html を触らずに表示を増やしたいときの手）
const statusBar = document.createElement("p");
statusBar.className = "status";
const countLabel = document.createElement("span");
countLabel.className = "status-count";
const moodLabel = document.createElement("span");
moodLabel.className = "status-mood";
statusBar.append(countLabel, moodLabel);
toggleButton.insertAdjacentElement("afterend", statusBar);

// ここから自分で書く ------------------------------------------

// TODO 1: updateButtonText() を完成させる
//         isOpen が true なら「閉じる」、false なら「開く」を
//         toggleButton.innerText に入れる（if / else を使う）
function updateButtonText() {
  toggleButton.innerText = isOpen ? "閉じる" : "開く";
  updateMoodView(); // ← 拡張: 状態に合わせて色や回数の表示も描き直す
}

toggleButton.addEventListener("click", () => {
  // 拡張: 気まぐれ・ブチギレの判定。true が返ってきたら今回は開け閉めしない
  if (interceptClick()) return;

  // TODO 2: panel に "hidden" クラスを付けたり外したりする（1 行）
  panel.classList.toggle("hidden");

  // TODO 3: 状態 isOpen をひっくり返す
  isOpen = !isOpen;

  // TODO 4: 状態を変えたので、ボタンの文字を描き直す
  updateButtonText();

  // 拡張: 開いたら回数を数えて、開閉に合わせた演出を出す
  if (isOpen) {
    openCount++;
    playOpenEffect();
  } else {
    setMood(pick(CLOSE_LINES));
  }
  updateMoodView();
});

// TODO 5: 最初の表示のために updateButtonText() を 1 回呼ぶ
updateButtonText();
setMood("ご自由にどうぞ");

// ----- 余裕があれば拡張してみよう -----
// ・パネルが閉じているときだけボタンの色を変える → .is-closed クラスで対応（updateMoodView）
// ・「開いた回数」を数える状態を足して、画面に出す → openCount で対応（updateMoodView）
//
// ==============================================================
// 拡張: 気まぐれで、押しすぎるとブチギレるトグル
// ==============================================================
// やっていることは今日の 3 ステップのまま。増えたのはこの 2 つだけ。
//   ・② の前に「今回は本当に開け閉めするか」を決める関門（interceptClick）
//   ・③ で描き直すものが増えた（ボタンの色・回数・ひとこと）
// 見た目そのもの（色・アニメーション）は style.css に置いてあり、
// JS の仕事は「クラスを付ける / 外す」だけ。演出を変えても main.js は触らずに済む。

// ひとこと集。pick() でこの中からランダムに 1 つ選ぶ
const DODGE_LINES = [
  "…やっぱりやめた",
  "開くと思った？",
  "気が変わりました",
  "今はそういう気分じゃない",
  "もう一回、丁寧にお願い",
];
const OPEN_LINES = [
  "はいはい、どうぞ",
  "今日は機嫌がいい",
  "しょうがないなあ",
  "すんなり開けてあげる",
];
const CLOSE_LINES = ["ぱたん。", "はい、閉じました", "また今度ね"];
const RAGE_LINES = [
  ["……", "押しすぎでは？"], // 怒り 1
  ["ちょっと落ち着いて", "そんなに急がないで"], // 怒り 2
  ["だから押すなって！！", "いい加減にして！！"], // 怒り 3
];

// 配列から 1 つランダムに取り出す小道具
function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// クリックを受け取ったときの「関門」。true を返したら開け閉めしない
function interceptClick() {
  recordClick(); // まず連打かどうかを記録して、怒りゲージを更新する

  // 怒りが振り切れていたら、演出中かどうかより先にブチギレを優先する
  // （ここを isBusy の後ろに書くと、連打中はいつまでもブチギレない）
  if (rageLevel >= 3) {
    rageOut(); // しばらく受け付けない
    return true;
  }

  if (isBusy) return true; // 演出中は無視（多重再生で表示が壊れるのを防ぐ）

  // 閉じている（＝これから開く）ときだけ、気まぐれではぐらかす
  if (!isOpen && Math.random() < dodgeChance()) {
    playDodge();
    return true;
  }

  dodgeStreak = 0; // 素直に開け閉めできたので、連続はぐらかしの記録はリセット
  return false; // 通ってよし。いつも通り開け閉めする
}

// はぐらかす確率。機嫌が悪い（怒りゲージが高い）ほど上がる。
// ただし MAX_DODGE_STREAK 回続けたら、次は必ず開く（意地悪しすぎない）
function dodgeChance() {
  if (dodgeStreak >= MAX_DODGE_STREAK) return 0;
  return DODGE_BASE_CHANCE + rageLevel * 0.15;
}

// クリック時刻を記録して、直近 RAGE_WINDOW_MS の回数から怒りゲージを決める
function recordClick() {
  const now = Date.now();
  // 古いクリックは捨てる（残るのは「今から 2.5 秒以内」に押した分だけ）
  clickTimes = clickTimes.filter((time) => now - time < RAGE_WINDOW_MS);
  clickTimes.push(now);

  // RAGE_STEPS のうち「今の回数以下」のものを数えると、そのまま怒りの段階になる
  rageLevel = RAGE_STEPS.filter((step) => clickTimes.length >= step).length;

  // 押すのをやめれば時間で落ち着く。押すたびにタイマーは掛け直す
  clearTimeout(calmTimer);
  calmTimer = setTimeout(calmDown, RAGE_WINDOW_MS);

  if (rageLevel > 0 && rageLevel < 3) {
    setMood(pick(RAGE_LINES[rageLevel - 1]));
  }
  updateMoodView();
}

// 怒りゲージを 0 に戻す
function calmDown() {
  const wasAngry = rageLevel > 0;
  clickTimes = [];
  rageLevel = 0;
  if (wasAngry) setMood("ふう…。もう大丈夫です");
  updateMoodView();
}

// 開きかけて、やっぱり閉じる（気まぐれ演出）
function playDodge() {
  isBusy = true;
  dodgeCount++;
  dodgeStreak++;
  setMood(pick(DODGE_LINES));
  updateMoodView();

  // 「動きを減らす」設定の人には、ちらつく演出は出さずに言葉だけで伝える
  if (prefersReducedMotion) {
    isBusy = false;
    return;
  }

  panel.classList.remove("hidden"); // 一瞬だけ見せて…
  panel.classList.add("is-peeking"); // 開きかけ → ためらう → 閉じる アニメーション

  // animationend を待つ手もあるが、setTimeout なら「必ず元に戻る」ので安心
  dodgeTimer = setTimeout(() => {
    panel.classList.remove("is-peeking");
    panel.classList.add("hidden"); // 状態(isOpen)は変えていないので、見た目も閉じたまま戻す
    isBusy = false;
    updateMoodView();
  }, PEEK_MS);
}

// すんなり開いたときの演出
function playOpenEffect() {
  setMood(pick(OPEN_LINES));
  if (prefersReducedMotion) return;

  panel.classList.remove("is-opening");
  void panel.offsetWidth; // ← ブラウザに「変わった」と認識させるおまじない（リフロー）
  panel.classList.add("is-opening");
  panel.addEventListener(
    "animationend",
    () => panel.classList.remove("is-opening"),
    { once: true },
  );
}

// ブチギレ。しばらくボタンを受け付けない
function rageOut() {
  // はぐらかし演出の途中で割り込んだ場合は、パネルを閉じた状態に戻してから怒る
  clearTimeout(dodgeTimer);
  panel.classList.remove("is-peeking");
  if (!isOpen) panel.classList.add("hidden");

  isBusy = true;
  toggleButton.disabled = true;
  toggleButton.innerText = "…";
  setMood(pick(RAGE_LINES[2]));
  document.body.classList.add("is-raging");
  updateMoodView();

  if (!prefersReducedMotion) {
    flashScreen();
    shakeCard();
    showBurstText("うるさい！！");
  }

  setTimeout(() => {
    document.body.classList.remove("is-raging");
    toggleButton.disabled = false;
    isBusy = false;
    calmDown();
    updateButtonText(); // 「…」から本来の文字に戻す
  }, FREEZE_MS);
}

// ③ 画面を描き直す（拡張ぶん）。状態を見て、クラスと文字を合わせるだけ
function updateMoodView() {
  // 閉じているときだけボタンの色を変える
  toggleButton.classList.toggle("is-closed", !isOpen);

  // 怒りの段階もクラスで表す（true なら付ける・false なら外す）
  toggleButton.classList.toggle("is-rage-1", rageLevel === 1);
  toggleButton.classList.toggle("is-rage-2", rageLevel === 2);
  toggleButton.classList.toggle("is-rage-3", rageLevel >= 3);

  // クラス以外に data-* 属性で状態を渡す手もある（CSS 側は body[data-rage="2"] で拾える）
  document.body.dataset.rage = rageLevel;

  countLabel.textContent = `開いた回数: ${openCount} ／ はぐらかされた回数: ${dodgeCount}`;
}

// ひとことを差し替える。出すたびにアニメーションを頭から再生する
function setMood(text) {
  moodLabel.textContent = text;
  moodLabel.classList.remove("is-new");
  void moodLabel.offsetWidth;
  moodLabel.classList.add("is-new");
}

// 画面全体を一瞬光らせる（練習1 と同じ道具）
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
  void card.offsetWidth;
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
