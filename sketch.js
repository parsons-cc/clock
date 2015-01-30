var lastSecond;
var c;


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


function setup() {
	createCanvas(windowWidth, windowHeight);
	lastSecond = second();
	c = getRandomColor();
}

function draw() {
	background(0,0,0);

	if(lastSecond !== second()) {
		lastSecond = second();
		c = getRandomColor();
	}

	fill(c);
	// random rect
	rect(minute(), second(), day()+hour(), month()+hour());
}


function mousePressed() {
	var isFullscreen = fullscreen();
	fullscreen(!isFullscreen);
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
