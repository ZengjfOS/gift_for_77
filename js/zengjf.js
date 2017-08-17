var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

$(function(){  
    var background_music = document.getElementById('background_music');  
    background_music.play(); 
    background_music.src = "music/try.mp3"; 
    background_music.play(); 
		  
    $(document).ready(function() {
        addEventListener('touchstart', function (e) {
            background_music.src = 'music/try.mp3';
            background_music.loop = true;
            background_music.play();
            background_music.pause();
            background_music.play();

            removeEventListener('touchstart');

            console.info("zengjf");
        });
    });

    setTimeout(function () {
	    startHeartAnimation();
	}, 5000);

    $("#code").css("visibility","visible");
    adjustCodePosition();
	$("#code").typewriter();

}); 
