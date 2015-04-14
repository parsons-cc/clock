var lastSecond;
var lastMillis;
var randomX;
var randomY;
var x;
var y;

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

  for (var i = 0; i < hour(); i++){
		strokeWeight(10);
		stroke(0,255, 255,500+i);
		fill(30,20, 255,0);
    ellipse(50, 320, 50 * i + 5, 50*i + 5);

  };

  for (var i = 0; i < minute(); i++){
		strokeWeight(5);
		stroke(255,255,0,500 + i);
		fill(255,10,20,0);
    ellipse(50, 320, 20*i + 5, 20*i +5);
  };

  for (var i = 0; i < second(); i++){
		//fill(255,255,20,15);
		strokeWeight(1);
		stroke(255,0,255,500 + i);
		fill(255,255,255, 0);
    ellipse(50, 320, 5 + 20* i, 5 + 20* i);
  };

	textAlign(CENTER);
	textSize(10);
	fill(255,255,255,255);
	noStroke();
	textFont("Futura");
	textStyle(ITALIC)
	text(hour()+"", 100, windowHeight-460, fill(0));
  text(minute()+"",100, windowHeight-280, fill(0));
  text(second()+"",100, windowHeight-65, fill(0));

	/*function getRandomPosition(element) {
		var x = document.body.offsetHeight-element.windowHeight;
		var y = document.body.offsetWidth-element.windowWidth;
		var randomX = Math.floor(Math.random()*x);
		var randomY = Math.floor(Math.random()*y);
		return [randomX,randomY];
	}*/

	/*if(lastMillis !== millis()){
		lastMillis = millis();
		};

		for (var i = 0; i < millis(); i++){
			if(lastMillis < 1001){
			fill(150);
			ellipse(randomX, randomY, 80, 80)
		}else{

		}
	};*/
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
