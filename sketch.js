

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	background(0);
	noStroke();

	fill(255, 0, 0);
	ellipse(width/4, height/2, second()*2, second()*2);
	fill(0, 255, 0);
	ellipse(2*width/4, height/2, minute()*2, minute()*2);
	fill(0, 0, 255);
	ellipse(3*width/4, height/2, hour()*10, hour()*10);


	fill(255);
	textSize(50);
	textAlign(CENTER);

	var hourText = hour();
	var minuteText = setDigits(minute(), 2);
	var secondText = setDigits(second(), 2);

	text(hourText+':'+minuteText+':'+secondText, width/2, height/3);

}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setDigits(number, digits) {
	var str = number+'';

	while(str.length < digits) {
		str = '0'+str;
	}

	return str
}
