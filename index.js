(() => {

//入力コーナー

//問題文を格納
const mondaibun = [
  //1
  ["Q. 地中海に面している国　10コ答えよ",
   "Q. 東京オリンピックで使用されたピクトグラムが表す競技名　10コ答えよ"],
  //2
  ["Q. それぞれの国旗が表す国名　10コ答えよ",
   "Q. 四日市高校に通うことのできる三重県の北中部の市町村　10コ答えよ"],
  //3
  ["Q. それぞれの地図記号は何を表しているか　10コ答えよ",
   "Q. 世界の1人あたりGDP上位25位までの国　10コ答えよ"],
  //4
  ["Q. 日本の祝日　10コ答えよ",
   "Q. 昨年、四日市高校から3人以上進学した国公立大学　10コ答えよ"],
  //5
  ["Q. 日本人に多い名字上位15位までのもの　10コ答えよ",
   "Q. アメリカの州　10コ答えよ"],
  //6
  ["Q. 日本の政令指定都市　10コ答えよ",
   "Q. 近鉄名古屋線で急行が止まる駅(松阪以南を除く)　10コ答えよ"],
  //7
  ["Q. 漢数字の入ったことわざ　10コ答えよ",
   "Q. 日本の中央省庁　10コ答えよ"],
  //8
  ["Q. 面積の大きい都道府県上位15位までの都道府県　10コ答えよ",
   "Q. それぞれの元素記号があらわす元素　10コ答えよ"],
  //9
  ["Q. 91",
   "Q. 92"],
  //10
  ["Q. 101",
   "Q. 102"],
  //11
  ["Q. 111",
   "Q. 112"],
  //12
  ["Q. 121",
   "Q. 122"],
  //13
  ["Q. 131",
   "Q. 132"],
  //14
  ["Q. 141",
   "Q. 142"],
  //15
  ["Q. 151",
   "Q. 152"],
  //16
  ["Q. 161",
   "Q. 162"],
  //17
  ["Q. 171",
   "Q. 172"],
  //18
  ["Q. 181",
   "Q. 182"],
  //19
  ["Q. 191",
   "Q. 192"],
  //20
  ["Q. 201",
   "Q. 202"]
];

//問題セット数
const setdayo = 20;

//1人あたりの問題数
const mondaisu = 2;

//時間制限(秒)
let time = 60;


//処理コーナー

const gamenA = document.querySelectorAll(".gamenA");
const gamenB = document.querySelectorAll(".gamenB");
const mondaibunn = document.getElementById("mondaibun");
const number = document.getElementById("number");

let setbangou = 0;
let mondaibangou = 1;

number.addEventListener("change", inputChange);

//ｆボタンでフルスクリーンにするらしい
window.addEventListener('load', function(){
  // キーボード入力の受付
  window.addEventListener('keydown', switchFullScreen);
});

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

//キーボード操作
const maru = document.getElementById('maru');
const batsu = document.getElementById('batsu');
const gameover = document.getElementById('gameover');
const clear = document.getElementById('clear');
const next = document.getElementById("next");
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
clearOto.volume = 0.7;
gameoverOto.volume = 0.9;

//マルとバツを消すやつ
let maruKesu = function() {
  maru.classList.add("mienai");
}
let batsuKesu = function() {
  batsu.classList.add("mienai");
}

let timer;

//functionコーナー

// フルスクリーンの表示を切り替える
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

//問題選択画面(A)に移動
function changeGamenA() {
  gamenA.forEach(element => {
    element.classList.remove("mienai");
  });
  gamenB.forEach(element => {
    element.classList.add("mienai");
  });
  document.removeEventListener("keydown", keyEvent);
  number.value = "";
}

//問題の画面(B)に移動
function changeGamenB() {
  gamenA.forEach(element => {
    element.classList.add("mienai");
  });
  gamenB.forEach(element => {
    element.classList.remove("mienai");
  });
  document.addEventListener("keydown", keyEvent);
  mondaibangou = 1;
}

//問題番号が入力されたら画面Bに遷移
function inputChange() {
  setbangou = Number( number.value );
  if (Number.isNaN(setbangou) | setbangou <= 0 | (setdayo + 1) <= setbangou ) {
    return; // 不正入力なら処理しない
  }
  changeGamenB();
  mondaibunn.classList.add("mienai");
  choose.forEach((t) => {
    t.classList.add("mienai");
  });
}

//マルバツが連打に強くなるらしい
function playSE(audioElement) {
  const se = audioElement.cloneNode(true);
  se.currentTime = 0;
  se.play().catch(()=>{});
}

//キーが押されたら
function keyEvent(event) {

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
    chose[0]?.classList.remove("choose");
    chose[0]?.classList.add("noChoose");
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
    count_last.classList.add("mienai");

    //問題が表示されていたら背景だけの画面へ
    if (mondaibangou % 2 == 1) {
      mondaibunn.classList.add("mienai");
      choose.forEach((t) => {
        t.classList.add("mienai");
      });
      if ((mondaibangou != 1) && (mondaibangou != mondaisu * 2 + 1)) {
        next.classList.remove("mienai");
      }
    }

    //待機画面なら問題を表示
    else {
      mondaibunn.classList.remove("mienai");
      next.classList.add("mienai");
      choose.forEach((t) => {
        t.classList.remove("mienai");
      });

      if (mondaibangou <= 0) {
        changeGamenA();

      }
      else {
        gazou();

        //初期化
        choose.forEach((t) => {
          t.classList.remove("noChoose");
          t.classList.remove("chose");
        });
      }
    }
  }

  //Enterが押されたら次の問題へ
  if(event.key == "Enter") {
    mondaibangou = mondaibangou + 1;
    mondaibunn.classList.remove("under");
    tenmetsu.classList.remove("red");
    clear.classList.add("mienai");
    gameover.classList.add("mienai");
    count_last.classList.add("mienai");

    //問題が表示されていたら背景だけの画面へ
    if (mondaibangou % 2 == 1) {
      mondaibunn.classList.add("mienai");
      choose.forEach((t) => {
        t.classList.add("mienai");
      });

      if ((mondaibangou != 1) && (mondaibangou != mondaisu * 2 + 1)) {
        next.classList.remove("mienai");
      }
    }

    //待機画面なら問題を表示
    else {
      mondaibunn.classList.remove("mienai");
      next.classList.add("mienai");
      choose.forEach((t) => {
        t.classList.remove("mienai");
      });

      //最終問題が終わってたら終わり
      if(mondaibangou == mondaisu * 2 + 2) {
        changeGamenA();
      }
      //問題文・画像を次の問題用に変更
      else {
        gazou();

        //初期化
        choose.forEach((t) => {
          t.classList.remove("noChoose");
          t.classList.remove("chose");
        });
      }
    }
  }
}

//画像の切り替え用
function gazou() {
  mondaibunn.innerHTML = mondaibun[setbangou - 1][mondaibangou / 2 - 1];
  document.getElementById("a").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/a.jpg`;
  document.getElementById("b").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/b.jpg`;
  document.getElementById("c").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/c.jpg`;
  document.getElementById("d").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/d.jpg`;
  document.getElementById("e").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/e.jpg`;
  document.getElementById("f").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/f.jpg`;
  document.getElementById("g").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/g.jpg`;
  document.getElementById("h").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/h.jpg`;
  document.getElementById("i").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/i.jpg`;
  document.getElementById("j").src = `mondai_imgs/${setbangou}/img${mondaibangou / 2}/j.jpg`;
}

})();
