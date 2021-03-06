function test_console() {
  console.log("testtttttt");
}

test_console();

var cursor = $(".cursor"),
  follower = $(".follower"),
  cWidth = 8, //カーソルの大きさ
  fWidth = 40, //フォロワーの大きさ
  delay = 10, //数字を大きくするとフォロワーがより遅れて来る
  mouseX = 0, //マウスのX座標
  mouseY = 0, //マウスのY座標
  posX = 0, //フォロワーのX座標
  posY = 0; //フォロワーのX座標

/*
    第三引数は{}で囲い、その中で様々な指定を行います。cssのプロパティや、
    TweenMaxがもっている機能の指定をここでおこないます
*/

//TweenMaxでなにか処理を行います。
//btn
//まわらなくない？
$(".btns").on("click", function() {
  console.log("そもそもこれ走ってるのか？");
  TweenMax.to("#btns", 3, {
    left: "300px",
    ratation: 180
  });
});

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, 0.001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;

    TweenMax.set(follower, {
      css: {
        left: posX - fWidth / 2,
        top: posY - fWidth / 2
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX - cWidth / 2,
        top: mouseY - cWidth / 2
      }
    });
  }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$("a").on({
  mouseenter: function() {
    cursor.addClass("is-active");
    follower.addClass("is-active");
  },
  mouseleave: function() {
    cursor.removeClass("is-active");
    follower.removeClass("is-active");
  }
});
