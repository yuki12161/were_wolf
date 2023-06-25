function judge_winner(call_show_msg, is_all_msg) {

  counter = count_player()
  cnt_v = counter[0]
  cnt_w = counter[1]
  cnt_f = counter[2]

  if (call_show_msg) {
    // 描画より先にaleatが起動しない工夫
    setTimeout(show_msg, 100, cnt_v, cnt_w, cnt_f, is_all_msg)
  }
}

function count_player() {

  let cnt_v = 0;
  let cnt_w = 0;
  let cnt_f = 0;

  let table = document.getElementById('tbl');

  for (let row of table.rows) {
    c1 = row.cells[3].children.c1.checked;
    c2 = row.cells[4].children.c2.checked;

    // 生存者をカウント
    if (!c1 && !c2) {
      row.classList.remove("row_gray")
      if (row.classList.contains("village") == true) {
        cnt_v++;
      } else if(row.classList.contains("wolf") == true) {
        cnt_w++;
      } else if(row.classList.contains("fox") == true) {
        cnt_f++;
      }
    } else {
      row.classList.add("row_gray")
    }
  }
  return [cnt_v, cnt_w, cnt_f]
}

function show_msg(cnt_v, cnt_w, cnt_f, is_all_msg){

  if (cnt_w == 0) {
    if (cnt_f == 0) {
      alert('村人陣営の勝利です')
    } else {
      alert('妖狐陣営の勝利です（村勝利条件成立）')
    }
  } else if (cnt_v <= cnt_w) {
    if (cnt_f == 0) {
      alert('人狼陣営の勝利です')
    } else {
      alert('妖狐陣営の勝利です（狼勝利条件成立）')
    }
  } else {
    if (is_all_msg) {
      alert('ゲーム続行\n\n■生存者\n・村：' + cnt_v + '\n・狼：' + cnt_w + '\n・狐：' + cnt_f);
    }
  }

}