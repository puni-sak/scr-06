(() => {
window.addEventListener('load', function(){

// フルスクリーン表示
document.getElementById('button1').addEventListener('click', function(){

// Chrome & Firefox v64以降
if( document.body.requestFullscreen ) {
 document.body.requestFullscreen();

// Safari & Edge & Chrome v68以前
} else if( document.body.webkitRequestFullscreen ) {
  document.body.webkitRequestFullscreen();
}
});

// フルスクリーン解除
document.getElementById('button2').addEventListener('click', function(){

// Chrome & Firefox v64以降
if( document.exitFullscreen ) {
  document.exitFullscreen();

// Safari & Edge & Chrome v44以前
} else if( document.webkitCancelFullScreen ) {
  document.webkitCancelFullScreen();
}
});
});

//答える問題を選択
// 要素を取得
const choose = document.querySelectorAll(".choose");

// 一括でイベントリスナ
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


let ok = document.getElementById('ok');
let ng = document.getElementById('ng');
let gameover = document.getElementById('gameover');
const maru = document.getElementById('maru');
const batsu = document.getElementById('batsu');
const gameoverImg = document.getElementById('gameoverImg');
const clear = document.getElementById('clear');

let maruKesu = function() {
  maru.classList.remove("mieru");
  maru.classList.add("mienai");
}
let batsuKesu = function() {
  batsu.classList.remove("mieru");
  batsu.classList.add("mienai");
}
let clearhyozi = function() {
  clear.classList.remove("mienai");
  clear.classList.add("mieru");
}

ok.addEventListener('click', function() {
  const chose = document.getElementsByClassName("chose");
  maru.classList.remove("mienai");
  maru.classList.add("mieru");
  //chose[0].classList.remove("chose");
  chose[0].classList.remove("choose");
  chose[0].classList.add("noChoose");
  setTimeout(maruKesu, 1000);
  const noChoose = document.getElementsByClassName("noChoose");
  if(noChoose.length === 10) {
    setTimeout(clearhyozi, 2000);
  }
}, false);

ng.addEventListener('click', function() {
  batsu.classList.remove("mienai");
  batsu.classList.add("mieru");
  setTimeout(batsuKesu, 1000);
}, false);

gameover.addEventListener('click', function() {
  gameoverImg.classList.remove("mienai");
  gameoverImg.classList.add("mieru");
}, false);

})();
