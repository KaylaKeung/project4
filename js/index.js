// left37,up38,right39,down40,空格32
let audio = $("#audio")[0];
let actionBox = $("#actionBox");
let activeBox = $("#activeBox");
let actives = [];
let i = 0;
let W = $(document.body).width();
let starting = false;
console.log($(".footer"), W);
$(".footer")[0].onclick = () => {
  starting = true;
  audio.src = "img/start-audio.mp3";
  audio.play();
  $(".warp").animate({
    marginLeft: "-" + W + "px",
  });
};
$(".replay-box")[0].onclick = () => {
  // audio.src="img/start-audio.mp3"
  // audio.play();
  starting = false;
  // actionBox.html("<img src='img/startpage-dance.gif'/>")
  $("#actionBox img")[0].src = "img/startpage-dance.gif";
  activeBox.html("");
  i = 0;
  actives = [];
  $("#activeBox").animate({ scrollLeft: 0 }, 200);
  $(".warp").animate({
    marginLeft: "0px",
  });
};
$(".reset-box .replay")[0].onclick = () => {
  $(".reset-box").css("display", "none");
  starting = true;
  // actionBox.html("<img src='img/startpage-dance.gif'/>")
  $("#actionBox img")[0].src = "img/startpage-dance.gif";
  activeBox.html("");
  i = 0;
  actives = [];
  $("#activeBox").animate({ scrollLeft: 0 }, 200);
};
$(".reset-box .replay-hover")[0].onclick = () => {
  $(".reset-box").css("display", "none");
  starting = true;
  // actionBox.html("<img src='img/startpage-dance.gif'/>")
  $("#actionBox img")[0].src = "img/startpage-dance.gif";
  activeBox.html("");
  i = 0;
  actives = [];
  $("#activeBox").animate({ scrollLeft: 0 }, 200);
};
$(".box .btn_t")[0].onclick = () => {
  if (actives[actives.length - 1] == "space-ending") {
    return;
  }
  remove();
  // actionBox.html("<img src='img/up-once.gif'/>")
  $("#actionBox img")[0].src = "img/up-once.gif";
  activeBox.append(
    "<div class='jianActive'><img class='jian' src='img/up-white.png'/><img class='jianRed' src='img/up-red.png'/></div>"
  );
  $("#activeBox").animate(
    { scrollLeft: $(".jianActive").position().left },
    200
  );
  actives.push("up");
  audio.src = "img/up-audio.mp3";
  audio.play();
};
$(".box .btn_l")[0].onclick = () => {
  if (actives[actives.length - 1] == "space-ending") {
    return;
  }
  remove();
  // actionBox.html("<img src='img/left-once.gif'/>")
  $("#actionBox img")[0].src = "img/left-once.gif";
  activeBox.append(
    "<div class='jianActive'><img class='jian' src='img/left-white.png'/><img class='jianRed' src='img/left-red.png'/></div>"
  );
  $("#activeBox").animate(
    { scrollLeft: $(".jianActive").position().left },
    200
  );
  actives.push("left");
  audio.src = "img/left-audio.mp3";
  audio.play();
};
$(".box .btn_d")[0].onclick = () => {
  if (actives[actives.length - 1] == "space-ending") {
    return;
  }
  remove();
  // actionBox.html("<img src='img/down-once.gif'/>")
  $("#actionBox img")[0].src = "img/down-once.gif";
  activeBox.append(
    "<div class='jianActive'><img class='jian' src='img/down-white.png'/><img class='jianRed' src='img/down-red.png'/></div>"
  );
  $("#activeBox").animate(
    { scrollLeft: $(".jianActive").position().left },
    200
  );
  actives.push("down");
  audio.src = "img/down-audio.mp3";
  audio.play();
};
$(".box .btn_r")[0].onclick = () => {
  if (actives[actives.length - 1] == "space-ending") {
    return;
  }
  remove();
  // actionBox.html("<img src='img/right-once.gif'/>")
  $("#actionBox img")[0].src = "img/right-once.gif";
  activeBox.append(
    "<div class='jianActive'><img class='jian' src='img/right-white.png'/><img class='jianRed' src='img/right-red.png'/></div>"
  );
  $("#activeBox").animate(
    { scrollLeft: $(".jianActive").position().left },
    200
  );
  actives.push("right");
  audio.src = "img/right-audio.mp3";
  audio.play();
};
$(".box .space")[0].onclick = () => {
  if (actives[actives.length - 1] == "space-ending") {
    i = 0;
    move(actives[i]);
    return;
  }
  activeBox.append("<div><p>Complete!</p></div>");
  actives.push("space-ending");
  move(actives[i]);
};
$(document).keydown(function (event) {
  // console.log(event.keyCode);
  let key = event.keyCode;
  switch (key) {
    case 37:
      if (starting && actives[actives.length - 1] != "space-ending") {
        remove();
        setTimeout(() => {
          $("#actionBox img")[0].src = "img/left-once.gif";
          // actionBox.html("<img src='img/left-repeat.gif'/>2")
          activeBox.append(
            "<div class='jianActive'><img class='jian' src='img/left-white.png'/><img class='jianRed' src='img/left-red.png'/></div>"
          );
          $("#activeBox").animate(
            { scrollLeft: $(".jianActive").position().left },
            200
          );
          actives.push("left");
          audio.src = "img/left-audio.mp3";
          audio.play();
        }, 200);
      }
      break;
    case 38:
      if (starting && actives[actives.length - 1] != "space-ending") {
        remove();
        // actionBox.html("<img src='img/up-once.gif'/>")
        $("#actionBox img")[0].src = "img/up-once.gif";
        activeBox.append(
          "<div class='jianActive'><img class='jian' src='img/up-white.png'/><img class='jianRed' src='img/up-red.png'/></div>"
        );
        $("#activeBox").animate(
          { scrollLeft: $(".jianActive").position().left },
          200
        );
        actives.push("up");
        audio.src = "img/up-audio.mp3";
        audio.play();
      }
      break;
    case 39:
      if (starting && actives[actives.length - 1] != "space-ending") {
        remove();
        // actionBox.html("<img src='img/right-once.gif'/>")
        $("#actionBox img")[0].src = "img/right-once.gif";
        activeBox.append(
          "<div class='jianActive'><img class='jian' src='img/right-white.png'/><img class='jianRed' src='img/right-red.png'/></div>"
        );
        $("#activeBox").animate(
          { scrollLeft: $(".jianActive").position().left },
          200
        );
        actives.push("right");
        audio.src = "img/right-audio.mp3";
        audio.play();
      }
      break;
    case 40:
      if (starting && actives[actives.length - 1] != "space-ending") {
        remove();
        // actionBox.html("<img src='img/down-once.gif'/>")
        $("#actionBox img")[0].src = "img/down-once.gif";
        activeBox.append(
          "<div class='jianActive'><img class='jian' src='img/down-white.png'/><img class='jianRed' src='img/down-red.png'/></div>"
        );
        $("#activeBox").animate(
          { scrollLeft: $(".jianActive").position().left },
          200
        );
        actives.push("down");
        audio.src = "img/down-audio.mp3";
        audio.play();
      }
      break;
    case 32:
      if (starting) {
        if (actives[actives.length - 1] == "space-ending") {
          i = 0;
          move(actives[i]);
        } else {
          activeBox.append("<div><p>Complete!</p></div>");
          actives.push("space-ending");
          move(actives[i]);
        }
      }
      break;
    default:
      break;
  }
});

function remove() {
  $("#actionBox img")[0].src = "img/startpage-dance.gif";
  // actionBox.html("<img src='img/startpage-dance.gif'/>1")
  let imgs = $("#activeBox>div");
  // console.log(imgs)
  if (!imgs) {
    return;
  }
  for (let i = 0; i < imgs.length; i++) {
    imgs.eq(i).removeClass("jianActive");
  }
}

function move(dir) {
  remove();
  // $("#activeBox").animate({scrollLeft: 0}, 100);
  let imgs = $("#activeBox>div");
  imgs.eq(i).addClass("jianActive");
  // console.log(imgs.eq(i).position())
  // $("#activeBox").animate({scrollLeft: 130}, 200);、
  if (i == actives.length - 1) {
    $("#activeBox").animate(
      { scrollLeft: imgs.eq(i).position().left + 260 },
      200
    );
  } else {
    $("#activeBox").animate({ scrollLeft: imgs.eq(i).position().left }, 200);
  }
  // actionBox.html("<img src='img/" + dir + "-once.gif'/>")
  $("#actionBox img")[0].src = "img/" + dir + "-once.gif";
  audio.src = "img/" + dir + "-audio.mp3";
  audio.play();
  if (i < actives.length - 1) {
    i++;
    setTimeout(() => {
      move(actives[i]);
    }, 700);
  } else {
    $(".reset-box").css("display", "flex");
  }
}
