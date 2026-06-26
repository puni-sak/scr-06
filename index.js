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
    choose.forEach((t) => {
      t.classList.remove("chose");
    });

    chosing.classList.add('chose');
  });

});

//答えた問題を解答済にする
let miKaitou = [];
let sumiKaitou = [];

for(let i = 0; i < 10; i++) {
  miKaitou.push(choose[i]);
}

const chose = document.querySelectorAll(".chose");
let ok = document.getElementById('ok');
const maru = document.getElementById('maru');
const batsu = document.getElementById('batsu');

ok.addEventListener('click', function() {
  maru.classList.remove("mienai");
  maru.classList.add("mieru");
}, false);

})();
