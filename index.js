(() => {

//問題文を格納
let mondaibun1 = [
  "Q. 吹奏楽で使う楽器の名称 10個答えろ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun2 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun3 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun4 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun5 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun6 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun7 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let mondaibun8 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

//タイトル(問題セットの番号)を取得
const title = document.title;
let setbangou = Number( title );
let mondaibun = [];

if(setbangou == 1) {
  mondaibun = mondaibun1;
}
else if(setbangou == 2) {
  mondaibun = mondaibun2;
}
else if(setbangou == 3) {
  mondaibun = mondaibun3;
}
else if(setbangou == 4) {
  mondaibun = mondaibun4;
}
else if(setbangou == 5) {
  mondaibun = mondaibun5;
}
else if(setbangou == 6) {
  mondaibun = mondaibun6;
}
else if(setbangou == 7) {
  mondaibun = mondaibun7;
}
else{
  mondaibun = mondaibun8;
}

let mondaibangou = 0;

const mondaibunn = document.getElementById("mondaibun");

mondaibunn.innerHTML = mondaibun[0];

//画像がないとき
window.addEventListener("load", () => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach(img => {
    img.onerror = () => {
      img.style.display = "none";   // 読み込み失敗 → 非表示
      mondaibunn.classList.add("under");
    };

    img.onload = () => {
      img.style.display = "";
    };

    const observer = new MutationObserver(() => {
    });

    observer.observe(img, { attributes: true, attributeFilter: ["src"]});
  });
});

//答える問題を選択
const choose = document.querySelectorAll(".choose");

choose.forEach((chosing) => {

    chosing.addEventListener("click", () => {
      if(chosing.classList.contains("noChoose")) {
        return;
      } else {
      choose.forEach((t) => {
        t.classList.remove("chose");
      });
    }
    chosing.classList.add('chose');
    });
});

//キーボード操作
const maru = document.getElementById('maru');
const batsu = document.getElementById('batsu');
const gameover = document.getElementById('gameover');
const clear = document.getElementById('clear');
const seikaiOto = document.getElementById('seikai');
const fuseikaiOto = document.getElementById('fuseikai');
const clearOto = document.getElementById('clearOto');
const gameoverOto = document.getElementById('gameoverOto');
const bgm = document.getElementById("bgm");
const countdown = document.getElementById("countdown");
const tenmetsu = document.getElementById("tenmetsu");
const count_last = document.getElementById("count_last");

bgm.volume = 0.5;
seikaiOto.volume = 0.6;
clearOto.volume = 0.5;
gameoverOto.volume = 0.9;

let maruKesu = function() {
  maru.classList.remove("mieru");
  maru.classList.add("mienai");
}
let batsuKesu = function() {
  batsu.classList.remove("mieru");
  batsu.classList.add("mienai");
}

let timer;

//キーが押されたら
document.addEventListener('keydown', event => {

  //aが押されたらbgm再生＆カウントダウンスタート
  if(event.key == "a") {
    clearInterval(timer);
    tenmetsu.classList.remove("red");
    tenmetsu.classList.remove("tenmetsu");
    count_last.classList.add("mienai");
    bgm.currentTime = 0;
    bgm.play();

    let time = 60;
    timer = setInterval(() => {
      time--;

      if (time == 5) {
        bgm.pause();
        countdown.currentTime = 0;
        countdown.play();
        tenmetsu.classList.add("tenmetsu");
        count_last.classList.remove("up");
        if (mondaibunn.classList.contains("under")) {
          count_last.classList.add("up");
        }
        count_last.classList.remove("mienai");
        count_last.classList.add("shrink");
        count_last.textContent = "5";
      }
      if (time == 4) {
        count_last.textContent = "4";
      }
      if (time == 3) {
        count_last.textContent = "3";
      }
      if (time == 2) {
        count_last.textContent = "2";
      }
      if (time == 1) {
        count_last.textContent = "1";
      }
      if (time <= 0) {
        clearInterval(timer);
        tenmetsu.classList.remove("tenmetsu");
        count_last.classList.add("mienai");
        setTimeout(() => {
          gameover.classList.remove("mienai");
          gameover.classList.add("mieru");
          tenmetsu.classList.add("red");
          gameoverOto.currentTime = 0;
          gameoverOto.play();
        }, 300);
      }
    }, 1000);
  }

  //lが押されたら緊急ストップ
  if(event.key == "l") {
    clearInterval(timer);
    tenmetsu.classList.remove("red");
    tenmetsu.classList.remove("tenmetsu");
    count_last.classList.add("mienai");
    bgm.pause();
    countdown.pause();
    gameover.classList.add("mienai");
    clear.classList.add("mienai");
    gameoverOto.pause();
  }

  //1が押されたらマル
  if(event.key == "1") {
    seikaiOto.currentTime = 0;
    seikaiOto.play();
    const chose = document.getElementsByClassName("chose");
    maru.classList.remove("mienai");
    maru.classList.add("mieru");
    setTimeout(maruKesu, 1000);
    chose[0].classList.remove("choose");
    chose[0].classList.add("noChoose");
  }

  //2が押されたらバツ
  if(event.key == "2") {
    fuseikaiOto.currentTime = 0;
    fuseikaiOto.play();
    batsu.classList.remove("mienai");
    batsu.classList.add("mieru");
    setTimeout(batsuKesu, 1000);
  }

  //3が押されたらクリア
  if(event.key == "3") {
    if(clear.classList.contains("mienai")) {
      clear.classList.remove("mienai");
      clear.classList.add("mieru");
      bgm.pause();
      countdown.pause();
      clearInterval(timer);
      clearOto.currentTime = 0;
      clearOto.play();

    }
    else {
      clear.classList.remove("mieru");
      clear.classList.add("mienai");
    }
  }

  //4が押されたらゲームオーバー
  if(event.key == "4") {
    if(gameover.classList.contains("mienai")) {
      gameover.classList.remove("mienai");
      gameover.classList.add("mieru");
      bgm.pause();
      gameoverOto.currentTime = 0;
      gameoverOto.play();
    }
    else {
      gameover.classList.remove("mieru");
      gameover.classList.add("mienai");
    }
  }

  //バックスペースが押されたら前の問題へ
  if(event.key == "Backspace") {
    mondaibangou = mondaibangou - 1;
    mondaibunn.classList.remove("under");
    tenmetsu.classList.remove("red");

    if (mondaibangou < 0) {
      window.open("../../index.html", "_self");
    }
    else {
      document.getElementById("mondaibun").innerHTML = mondaibun[mondaibangou];
      document.getElementById("a").src = `img${mondaibangou + 1}/a.jpg`;
      document.getElementById("b").src = `img${mondaibangou + 1}/b.jpg`;
      document.getElementById("c").src = `img${mondaibangou + 1}/c.jpg`;
      document.getElementById("d").src = `img${mondaibangou + 1}/d.jpg`;
      document.getElementById("e").src = `img${mondaibangou + 1}/e.jpg`;
      document.getElementById("f").src = `img${mondaibangou + 1}/f.jpg`;
      document.getElementById("g").src = `img${mondaibangou + 1}/g.jpg`;
      document.getElementById("h").src = `img${mondaibangou + 1}/h.jpg`;
      document.getElementById("i").src = `img${mondaibangou + 1}/i.jpg`;
      document.getElementById("j").src = `img${mondaibangou + 1}/j.jpg`;

      //初期化
      choose.forEach((t) => {
        t.classList.remove("noChoose");
        t.classList.remove("chose");
      });
    }
  }

  //Enterが押されたら次の問題へ
  if(event.key == "Enter") {
    mondaibangou = mondaibangou + 1;
    mondaibunn.classList.remove("under");
    tenmetsu.classList.remove("red");

    //10問目なら終わり
    if(mondaibangou == mondaibun.length) {
      window.open("../../index.html", "_self");
    }
    //問題文・画像を次の問題用に変更
    else {
      document.getElementById("mondaibun").innerHTML = mondaibun[mondaibangou];
      document.getElementById("a").src = `img${mondaibangou + 1}/a.jpg`;
      document.getElementById("b").src = `img${mondaibangou + 1}/b.jpg`;
      document.getElementById("c").src = `img${mondaibangou + 1}/c.jpg`;
      document.getElementById("d").src = `img${mondaibangou + 1}/d.jpg`;
      document.getElementById("e").src = `img${mondaibangou + 1}/e.jpg`;
      document.getElementById("f").src = `img${mondaibangou + 1}/f.jpg`;
      document.getElementById("g").src = `img${mondaibangou + 1}/g.jpg`;
      document.getElementById("h").src = `img${mondaibangou + 1}/h.jpg`;
      document.getElementById("i").src = `img${mondaibangou + 1}/i.jpg`;
      document.getElementById("j").src = `img${mondaibangou + 1}/j.jpg`;

      //初期化
      choose.forEach((t) => {
        t.classList.remove("noChoose");
        t.classList.remove("chose");
      });
    }

    clear.classList.remove("mieru");
    clear.classList.add("mienai");
    gameover.classList.remove("mieru");
    gameover.classList.add("mienai");
  }
}, false);

})();
