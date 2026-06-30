(() => {

//問題を変える
let mondaibun1 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun2 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun3 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun4 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun5 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun6 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun7 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
];

let mondaibun8 = [
  '問題文１',
  '問題文２',
  '問題文３',
  '問題文４',
  '問題文５',
  '問題文６',
  '問題文７',
  '問題文８',
  '問題文９',
  '問題文１０'
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

document.getElementById("mondaibun").innerHTML = mondaibun[0];

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

let maruKesu = function() {
  maru.classList.remove("mieru");
  maru.classList.add("mienai");
}
let batsuKesu = function() {
  batsu.classList.remove("mieru");
  batsu.classList.add("mienai");
}

//キーが押されたら
document.addEventListener('keydown', event => {

  //1が押されたらマル
  if(event.key == "1") {
    const chose = document.getElementsByClassName("chose");
    maru.classList.remove("mienai");
    maru.classList.add("mieru");
    setTimeout(maruKesu, 1000);
    chose[0].classList.remove("choose");
    chose[0].classList.add("noChoose");
  }

  //2が押されたらバツ
  if(event.key == "2") {
    batsu.classList.remove("mienai");
    batsu.classList.add("mieru");
    setTimeout(batsuKesu, 1000);
  }

  //3が押されたらクリア
  if(event.key == "3") {
    clear.classList.remove("mienai");
    clear.classList.add("mieru");
    let bg = mondaibangou;
  }

  //4が押されたらゲームオーバー
  if(event.key == "4") {
    gameover.classList.remove("mienai");
    gameover.classList.add("mieru");
  }

  //Enterが押されたら次の問題へ
  if(event.key == "Enter") {
    mondaibangou = mondaibangou + 1;

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
        console.log(choose);
      });
    }

    clear.classList.remove("mieru");
    clear.classList.add("mienai");
    gameover.classList.remove("mieru");
    gameover.classList.add("mienai");
  }
}, false);

//画像がないとき
window.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach(img => {
    img.onerror = () => {
      img.style.display = "none";   // 読み込み失敗 → 非表示
    };

    const observer = new MutationObserver(() => {
      img.style.display = "";
    });

    observer.observe(img, { attributes: true, attributeFilter: ["src"]});
  });
});

})();
