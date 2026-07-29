// main.js — このファイルは完成している。読むだけでよい（書き換えない）。
//
// profile.js から favoriteThing を import（借りてくる）して、画面に出しているだけ。
// 練習1 でやった export / import が、そのまま使われている。

import { favoriteThing } from "./profile.js";

const favoriteLabel = document.getElementById("favorite");

favoriteLabel.innerText = favoriteThing;
