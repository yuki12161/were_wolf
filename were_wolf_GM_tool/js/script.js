function check_winner() {
  let cnt_v = 0;
  let cnt_w = 0;
  let cnt_f = 0;

  let table = document.getElementById('tbl');

  for (let row of table.rows) {
    c1 = row.cells[3].children.c1.checked;
    c2 = row.cells[4].children.c2.checked;

    // 生存者をカウント
    if (!c1 && !c2) {
      if (row.classList.contains("village") == true) {
        cnt_v++;
      } else if(row.classList.contains("wolf") == true) {
        cnt_w++;
      } else if(row.classList.contains("fox") == true) {
        cnt_f++;
      }
    }
  }

  console.log('村カウント：' + cnt_v);
  console.log('狼カウント：' + cnt_w);
  console.log('狐カウント：' + cnt_f);

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
    alert('ゲーム続行\n\n■生存者\n・村：' + cnt_v + '\n・狼：' + cnt_w + '\n・狐：' + cnt_f);
  }
}