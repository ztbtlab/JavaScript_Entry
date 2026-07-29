// quiz-data.js（模範解答）— 問題のデータだけを置くファイル
// 自分で作るときの参考に。テーマは自由なので、中身は同じでなくてよい。
//
// 1 問 = text（問題文）/ choices（三択の配列）/ answerIndex（正解の番号。0 から数える）

export const questions = [
  {
    text: "Arduino で digitalWrite に渡すのは、次のうちどれ？",
    choices: ["HIGH か LOW", "0.5", "「あか」という文字"],
    answerIndex: 0,
  },
  {
    text: "JS で「他のファイルに部品を貸し出す」ときに書くのは？",
    choices: ["import", "export", "console.log"],
    answerIndex: 1,
  },
  {
    text: "配列 [10, 20, 30] の 20 は何番目？（数え始めは 0）",
    choices: ["0 番", "1 番", "2 番"],
    answerIndex: 1,
  },
];
