$(document).ready(function(){
	var otimer = null;
	var oindex = 0;
	$(".pic_index").eq(0).css("background","#8BBB04");
	$(".pic_index").each(function(i){
		$(this).mouseover(function(){
			clearInterval(otimer);
			oindex = i;
			changePic(i);
		});
		$(this).mouseout(function(){
			otimer = setInterval(autopy,3000);
		});
	});
	$(".banner_center_pic").hover(function(){
		clearInterval(otimer);
	},function(){
		otimer = setInterval(autopy,3000);
	});
	otimer = setInterval(autopy,3000);
	function autopy(){
		if(oindex>=$(".pic_index").length-1){
			oindex = 0;
		}else{
			oindex++;
		}
		changePic(oindex);
	}
	
});
function changePic(i){
	$(".pic_index").css("background","#fff").eq(i).css("background","#8BBB04");
	$(".banner_center_pic").css("opacity",0).eq(i).css("opacity",1);
}
