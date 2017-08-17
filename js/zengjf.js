var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

$(function(){  
    var background_music = document.getElementById('background_music');  
    background_music.src = 'music/try.mp3';
    background_music.load();
    background_music.play();

    setTimeout(function () {
	    startHeartAnimation();
	}, 5000);

    $("#code").css("visibility","visible");
    adjustCodePosition();
	$("#code").typewriter();

}); 
