var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

function force_safari_play_audio() {
    background_music.loop = true;
    background_music.load();
    background_music.play();
}

function audio_auto_play(id) {
    var audio = document.getElementById(id);  
    audio.src = "music/try.mp3";
    audio.addEventListener('play', function() {
        // 当 audio 能够播放后, 移除这个事件
        window.removeEventListener('touchstart', force_safari_play_audio, false);
    }, false);
    audio.play();
}

$(function(){  
    // fake-autoplay-audio-ios-safari.html
    //     https://gist.github.com/ufologist/50b4f2768126089c3e11
    window.addEventListener('touchstart', force_safari_play_audio, false);
    audio_auto_play("background_music");

    setTimeout(function () {
	    startHeartAnimation();
	}, 5000);

    $("#code").css("visibility","visible");
    adjustCodePosition();
	$("#code").typewriter();

}); 
