(() => {

//問題文を格納
const mondaibun1 = [
  "Q. 吹奏楽で使う楽器の名称 10個答えろ",
  "Q. 問題文だよー",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun2 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun3 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun4 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun5 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun6 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun7 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

const mondaibun8 = [
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q.",
  "Q."
];

//時間制限(秒)
let time = 60;


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

//ｆボタンでフルスクリーンにするらしい
window.addEventListener('load', function(){
  // キーボード入力の受付
  window.addEventListener('keydown', switchFullScreen);
});

// 表示を切り替える
function switchFullScreen(event) {

  if (event.key === "f") {
        
    // フルスクリーン表示なら解除する
    if (checkFullScreen() ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }

    //通常画面ならフルスクリーンにする
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    }
  }
}

// フルスクリーン表示しているか確認
function checkFullScreen() {
  return Boolean(document.fullscreenElement);
}

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

//途中のユーザー操作なしの再生を許可してくれるらしい
window.addEventListener("touchstart", () => {
  bgm.play().catch(()=>{});
  bgm.pause();
  bgm.currentTime = 0;

  countdown.play().catch(()=>{});
  countdown.pause();
  countdown.currentTime = 0;

  gameoverOto.play().catch(()=>{});
  gameoverOto.pause();
  gameoverOto.currentTime = 0;
}, { once: true });

//連打に強くなるらしい
function playSE(audioElement) {
  const se = audioElement.cloneNode(true);
  se.currentTime = 0;
  se.play().catch(()=>{});
}

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
  maru.classList.add("mienai");
}
let batsuKesu = function() {
  batsu.classList.add("mienai");
}

let timer;

//キーが押されたら
document.addEventListener('keydown', event => {

  //aが押されたらbgm再生＆カウントダウンスタート
  if(event.key == "a") {
    clearInterval(timer);
    time = 60;
    tenmetsu.classList.remove("red");
    tenmetsu.classList.remove("tenmetsu");
    count_last.classList.remove("mienai");
    count_last.textContent = time;
    countdown.pause();
    clearOto.pause();
    gameoverOto.pause();
    bgm.currentTime = 0;
    bgm.play();

    timer = setInterval(() => {
      time--;
      count_last.classList.remove("mienai");
      count_last.textContent = time;

      if (time == 5) {
        bgm.pause();
        countdown.currentTime = 0;
        countdown.play();
        tenmetsu.classList.add("tenmetsu");
      }
      if (time <= 0) {
        clearInterval(timer);
        tenmetsu.classList.remove("tenmetsu");
        setTimeout(() => {
          gameover.classList.remove("mienai");
          gameover.classList.add("mieru");
          tenmetsu.classList.add("red");
          countdown.pause();
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
    playSE(seikaiOto);
    const chose = document.getElementsByClassName("chose");
    maru.classList.remove("mienai");
    maru.classList.add("mieru");
    setTimeout(maruKesu, 1000);
    chose[0].classList.remove("choose");
    chose[0].classList.add("noChoose");
  }

  //2が押されたらバツ
  if(event.key == "2") {
    playSE(fuseikaiOto);
    batsu.classList.remove("mienai");
    batsu.classList.add("mieru");
    setTimeout(batsuKesu, 1000);
  }

  //3が押されたらクリア
  if(event.key == "3") {
    if(clear.classList.contains("mienai")) {
      clear.classList.remove("mienai");
      tenmetsu.classList.remove("red");
      tenmetsu.classList.remove("tenmetsu");
      count_last.classList.add("mienai");
      gameoverOto.pause();
      bgm.pause();
      countdown.pause();
      clearInterval(timer);
      clearOto.currentTime = 0;
      clearOto.play();

    }
    else {
      clear.classList.add("mienai");
    }
  }

  //バックスペースが押されたら前の問題へ
  if(event.key == "Backspace") {
    mondaibangou = mondaibangou - 1;
    mondaibunn.classList.remove("under");
    tenmetsu.classList.remove("red");
    gameover.classList.add("mienai");
    clear.classList.add("mienai");

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
