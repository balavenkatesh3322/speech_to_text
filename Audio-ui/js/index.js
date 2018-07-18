var audio = document.getElementById("audio-player");

$(document).ready(function() {
  $("#play-button").click(function() {
    if ($(this).hasClass("unchecked")) {
      $(this)
        .addClass("play-active")
        .removeClass("play-inactive")
        .removeClass("unchecked");
      $(".info-two")
        .addClass("info-active");
      $("#pause-button")
        .addClass("scale-animation-active");
      $(".waves-animation-one, #pause-button, .seek-field, .volume-icon, .volume-field, .info-two").show();
      $(".waves-animation-two").hide();
      $("#pause-button")
        .children('.icon')
        .addClass("icon-pause")
        .removeClass("icon-play");
      setTimeout(function() {
        $(".info-one").hide();
      }, 400);
      audio.play();
      audio.currentTime = 0;      
    } else {
      $(this)
        .removeClass("play-active")
        .addClass("play-inactive")
        .addClass("unchecked");
      $("#pause-button")
        .children(".icon")
        .addClass("icon-pause")
        .removeClass("icon-play");
      $(".info-two")
        .removeClass("info-active");
      $(".waves-animation-one, #pause-button, .seek-field, .volume-icon, .volume-field, .info-two").hide();
      $(".waves-animation-two").show();
      setTimeout(function() {
        $(".info-one").show();
      }, 150);
      audio.pause();
      audio.currentTime = 0;
    }
  });
  $("#pause-button").click(function() {
    $(this).children(".icon")
      .toggleClass("icon-pause")
      .toggleClass("icon-play");

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  $("#play-button").click(function() {
    setTimeout(function() {
      $("#play-button").children(".icon")
        .toggleClass("icon-play")
        .toggleClass("icon-cancel");
    }, 350);
  });
  $(".like").click(function() {
    $(".icon-heart").toggleClass("like-active");
  });

$("span").click(function (){
var Id=$(this).attr('id');
console.log(Id);
audio.currentTime = Id;  
$( "#audio-player" ).load(window.location.href + " #audio-player" );
});

});

// function CreateSeekBar() {
  var seekbar = document.getElementById("audioSeekBar");
  seekbar.min = 0;
  seekbar.max = audio.duration;
  seekbar.value = 0;
// }

function EndofAudio() {
  document.getElementById("audioSeekBar").value = 0;
}

function audioSeekBar() {
  var seekbar = document.getElementById("audioSeekBar");
  audio.currentTime = seekbar.value;
}

function SeekBar() {
  var seekbar = document.getElementById("audioSeekBar");
  seekbar.value = audio.currentTime;
}

audio.addEventListener("timeupdate", function() {
  var duration = document.getElementById("duration");
  var s = parseInt(audio.currentTime % 60);
  var m = parseInt((audio.currentTime / 60) % 60);
  duration.innerHTML = m + ':' + s;
}, false);

Waves.init();
Waves.attach("#play-button", ["waves-button", "waves-float"]);
Waves.attach("#pause-button", ["waves-button", "waves-float"]);

