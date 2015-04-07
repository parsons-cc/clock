var lastSecond;
var c;
var d;
var e;
var x;
var y;

function getRandomColor() {
	var r = random(0,255);
	var g = random(0,255);
	var b = random(0,255);

	return color(
		floor(r),
		floor(g),
		floor(b)
	);
};

function getRandomLocation() {
  var c = random(x,y);
  var d = random(x,y);
  var e = random(x,y);
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	lastSecond = second();
  noStroke();
}

function draw() {
	background(255,255,255);

	if(lastSecond !== second()) {
		lastSecond = second();
    c = getRandomColor();
    d = getRandomColor();
    e = getRandomColor();
    }

  for (var i = 0; i < hour(); i++){
    fill(0);
    rect(i + 60, i + 30, 80, 80);
  };

  for (var i = 0; i < minute(); i++){
    fill(0);
    rect(i + 60, i + 200, 80, 80);
  };

  for (var i = 0; i < second(); i++){
    fill(0);
    rect(i + 60, i + 390, 80, 80);
  };


	textSize(70);
	fill(0,0,0);
	noStroke();
	text(hour()+"", 100, windowHeight-460, fill(0));
  text(minute()+"",100, windowHeight-280, fill(0));
  text(second()+"",100, windowHeight-65, fill(0));
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
