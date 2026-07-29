// logic.js（模範解答）— 判定だけを担当するファイル
//
// ポイント: document が 1 回も出てこない。画面のことは何も知らない。

// 選ばれた番号が正解かどうかを true / false で返す
export function judge(question, selectedIndex) {
  return question.answerIndex === selectedIndex;
}
