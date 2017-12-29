window.onresize = function(){
	window.requestAnimationFrame(function () {
	  var AvailableWidth = window.innerWidth;
	  var fontSize = (AvailableWidth/375)*10;
	  todaycrop = document.getElementById('todaycropssr');
	  todaycrop.style.fontSize = fontSize+'px';
	});
}
;(function(){
    var fontSize = 20;
    todaycrop = document.getElementById('todaycropssr');
    todaycrop.style.fontSize = fontSize+'px';
})();
