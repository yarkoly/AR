console.clear()

var oneModel = document.querySelector('#one'),
		twoModel = document.querySelector('#two'),
		rotateBtn = $(".rotate"),
		scaleBtn = $(".scale"),
		switchBtn = $(".switch"),
		startBtn = $(".start");


startBtn.click(function()
{
	startBtn.parent().css(
	{
		display: "none"
	});
});


rotateBtn.click(function(){
	if (rotateBtn.hasClass("rotate_fade")){
		oneModel.emit('endRotate');
		twoModel.emit('endRotate');
		rotateBtn.removeClass("rotate_fade");
	} else {
		oneModel.emit('rotate');
		twoModel.emit('rotate');
		rotateBtn.addClass("rotate_fade");
	}
});

var scaleFlag = 0,
		twoFlag = false;

scaleBtn.click(function(){
	if (scaleFlag == 0){
		scaleFlag = 1;
		oneModel.setAttribute("scale", scale="0.55 0.55 0.55");
		twoModel.setAttribute("scale", scale="0.55 0.55 0.55");
		scaleBtn.addClass("scale_one");
	} else if (scaleFlag == 1) {
		scaleFlag = 2;
		oneModel.setAttribute("scale", scale="0.7 0.7 0.7");
		twoModel.setAttribute("scale", scale="0.7 0.7 0.7");
		scaleBtn.addClass("scale_two");
		scaleBtn.removeClass("scale_one");
	} else if (scaleFlag == 2) {
		scaleFlag = 0;
		oneModel.setAttribute("scale", scale="0.4 0.4 0.4");
		twoModel.setAttribute("scale", scale="0.4 0.4 0.4");
		scaleBtn.removeClass("scale_two");
	}
});

switchBtn.click(function(){
	if (twoFlag == false){
		twoFlag = true;
		switchBtn.html("Previous");
		oneModel.setAttribute("visible", false);
		twoModel.setAttribute("visible", true);
	} else {
		twoFlag = false
		switchBtn.html("Next");
		oneModel.setAttribute("visible", true);
		twoModel.setAttribute("visible", false);
	}
});