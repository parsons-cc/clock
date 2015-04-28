var lastSecond;
var hourCount;
var minuteCount;
var secondCount;

function setup() {
	createCanvas(windowWidth, windowHeight);
	lastSecond = second();
  noStroke();

}

function draw() {

	background(255,255,255);



	if(lastSecond !== second()) {
		lastSecond = second();
    }


var hourCount = function(a) {
	for (var i = 0; i < hour(); i++){
		strokeWeight(0.5);
		stroke(0,180, 255,500+i);
		fill(30,255, 255,0);
		ellipse(400, 310, 4 * i + 535, 4*i + 535);
	};
}

hourCount();

	var minuteCount = function(b) {
		for (var i = 0; i < minute(); i++){
			strokeWeight(1);
			stroke(0,180, 255,500+i);
			fill(255,00,20,0);
			ellipse(400, 310, 7*i + 120, 7*i +120);
		};
	}

	minuteCount();


	var secondCount = function(c) {
		for (var i = 0; i < second(); i++){
			strokeWeight(0.25);
			stroke(0,180, 255,500+i);
			fill(90,90,200, 0);
			ellipse(400, 310, 1 + 2*i, 1 + 2*i);
		};
	}

secondCount();

if (second() % 2 === 0) {
	secondCount();
}


	textAlign(LEFT);
	textSize(25);
	fill(255,255,255,255);
	noStroke();
	textFont("Garamond");
	textStyle(BOLD)
	text("___" + hour()+"", 405 , windowHeight-570, fill(255,0,255,255));
  text("___" + minute()+"",405, windowHeight-390, fill(255,0,255,255));
  text("___" +second()+"",405, windowHeight-300, fill(255,0,255,255));

	textSize(9);
	textStyle(ITALIC);
	text("SEC",405, windowHeight-300, fill(255,0,255,255));
	text("MIN",405, windowHeight-390, fill(255,0,255,255));
	text("HOUR", 405 , windowHeight-570, fill(255,0,255,255));

	/*function getRandomPosition(element) {
		var x = document.body.offsetHeight-element.windowHeight;
		var y = document.body.offsetWidth-element.windowWidth;
		var randomX = Math.floor(Math.random()*x);
		var randomY = Math.floor(Math.random()*y);
		return [randomX,randomY];
	}*/

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
