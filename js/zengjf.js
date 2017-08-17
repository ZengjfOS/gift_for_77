var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

$(function(){  
    var background_music = document.getElementById('background_music');  
    background_music.play(); 

    setTimeout(function () {
	    startHeartAnimation();
	}, 5000);

    adjustCodePosition();
	$("#code").typewriter();
}); 
