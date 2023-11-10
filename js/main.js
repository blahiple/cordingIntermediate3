// ロード画面制御
var loading = $(".loading");

//ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
$(window).on("load", function () {
  loading.delay("3000").fadeOut("2000");
});

// タイムアウト5秒
setTimeout(function () {
  loading.fadeOut("2000");
}, 5000);

//リンククリック時、スクロールアニメーション
$(document).ready(function () {
  // ナビゲーションのリンクがクリックされたとき
  $('.header__link').on('click', function (e) {
    // クリックされたリンクのhref属性の値を取得
    var targetSection = $(this).attr('href');

    // ターゲットセクションまでスクロール（ヘッダーの高さを引いた位置）
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 'slow');
  });
});

// Audio
var audio = document.getElementById("my-audio");
var audioOn = $(".header__sound-content--on");
var audioOff = $(".header__sound-content--off");
var audioHide = "header__sound-content--hide";

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioOff.addClass(audioHide);
    audioOn.removeClass(audioHide);
  } else {
    audio.pause();
    audioOn.addClass(audioHide);
    audioOff.removeClass(audioHide);
  }
}