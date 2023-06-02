function check_winner() {
  let village_cnt = 10;
  let wolf_cnt = 3;
  let fox_cnt = 1;

  // 村陣営
  for (let i = 0; i < document.village.c1.length; i++) {
    if (document.village.c1[i].checked || document.village.c2[i].checked) {
      village_cnt--;
    }
  }

  // 狂信者
  const v1_1 = document.getElementById('v1_1');
  const v1_2 = document.getElementById('v1_2');
  if (v1_1.checked || v1_2.checked) {
    village_cnt--;
  }

  // 背徳者
  const v2_1 = document.getElementById('v2_1');
  const v2_2 = document.getElementById('v2_2');
  if (v2_1.checked || v2_2.checked) {
    village_cnt--;
  }

  // 狼
  for (let i = 0; i < document.wolf.c1.length; i++) {
    if (document.wolf.c1[i].checked || document.wolf.c2[i].checked) {
      wolf_cnt--;
    }
  }

  // 狐
  const f1 = document.getElementById('f1');
  const f2 = document.getElementById('f2');
  if (f1.checked || f2.checked) {
    fox_cnt--;
  }

  console.log('村カウント：' + village_cnt);
  console.log('狼カウント：' + wolf_cnt);
  console.log('狐カウント：' + fox_cnt);

  if (wolf_cnt == 0) {
    if (fox_cnt == 0) {
      alert('村人陣営の勝利です')
    } else {
      alert('妖狐陣営の勝利です（村勝利条件成立）')
    }
  } else if (village_cnt <= wolf_cnt) {
    if (fox_cnt == 0) {
      alert('人狼陣営の勝利です')
    } else {
      alert('妖狐陣営の勝利です（狼勝利条件成立）')
    }
  } else {
    alert('ゲーム続行');
  }
}