$(document).ready(function(){
	var video = $(".myVideo");

	function showTitle(e){
		if (e) {
			$(".caption").stop().animate({"top":0},500);
			$(".control").stop().animate({"bottom":0},500)
		}else{
			$(".caption").stop().animate({"top":-50},500);
			$(".control").stop().animate({"bottom":-50},500)
		}
			
	}

	video.on("loadedmetadata",function(){
		showTitle(false);
		$(".container").hover(function(){
			showTitle(true);
		},function(){
			showTitle(false);
		});
	});
})