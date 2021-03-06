var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

function force_safari_play_audio() {
    background_music.src = "http://zorozeng.com/music/try.mp3";
    background_music.loop = true;
    background_music.load();
    background_music.play();
}

function audio_auto_play(id) {
    var audio = document.getElementById(id);  
    audio.play();

    audio.addEventListener('play', function() {
        // 当 audio 能够播放后, 移除这个事件
        window.removeEventListener('touchstart', force_safari_play_audio);
    });
}

$(function(){  
    // fake-autoplay-audio-ios-safari.html
    //     https://gist.github.com/ufologist/50b4f2768126089c3e11
    window.addEventListener('touchstart', force_safari_play_audio);
    audio_auto_play("background_music");

    setTimeout(function () {
	    startHeartAnimation();
	}, 5000);

    /*
    $('.fireworks').fireworks({ 
        sound: false, // 声音效果
        opacity: 0.3, 
        width: '100%', 
        height: '100%'
    });
    */

    $("#code").css("visibility","visible");
    adjustCodePosition();
	$("#code").typewriter();
}); 
