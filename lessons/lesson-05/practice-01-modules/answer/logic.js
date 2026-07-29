// logic.js（模範解答）— 計算だけを担当するファイル
// 授業中は開かないこと。詰まった人だけ講師の許可のもとで参照。
//
// ポイント: このファイルに document は 1 回も出てこない。
//          画面のことを何も知らないので、画面が無くても計算だけ確かめられる。

// いまの値を受け取り、1 増やした値を返す
export function increment(count) {
  return count + 1;
}

// いまの値を受け取り、1 減らした値を返す
export function decrement(count) {
  return count - 1;
}

// 0 に戻す。いまの値は使わないので引数はいらない
export function reset() {
  return 0;
}

// ----- 発展（「5 ずつ増やす」ボタン用）-----
// increment との違いは「増やす量 amount を引数でもらう」こと。
export function incrementBy(count, amount) {
  return count + amount;
}
