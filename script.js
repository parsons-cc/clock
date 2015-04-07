/**
 * Here's where our JavaScript goes
 */

// We still define our variables here
var lastSecond;
var c;

/**
 * We're using the p5 "instance mode" for this new structure
 * http://p5js.org/learn/examples/Instance_Mode_Instantiation.php
 * So that we can use the function attribute `sketch` to access p5 functions
 */
var mySketch = new p5(function(sketch) {


	function getRandomColor() {
		var r = sketch.random(0,255);
		var g = sketch.random(0,255);
		var b = sketch.random(0,255);

		return sketch.color(
			sketch.floor(r),
			sketch.floor(g),
			sketch.floor(b)
		);
	};


	function mousePressed() {
		var isFullscreen = sketch.fullscreen();
		sketch.fullscreen(!isFullscreen);
	}


	function windowResized() {
		sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
	}

	/**
   * Same as `function setup() {}` before, but written a different way
   * using our namespace.
   */
	sketch.setup = function() {
		sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
		lastSecond = sketch.second();
		c = getRandomColor();
	}

	/**
   * Same as `function setup() {}` before, but written a different way
   * using our namespace.
   */
	sketch.draw = function() {
		sketch.background(0,0,0);

		if(sketch.lastSecond !== sketch.second()) {
			sketch.lastSecond = sketch.second();
			c = getRandomColor();
		}

		sketch.fill(c);
		// random rect
		sketch.rect(
			sketch.minute(),
			sketch.second(),
			sketch.day()+sketch.hour(),
			sketch.month()+sketch.hour()
		);

		sketch.textSize(20);
		sketch.fill(255,255,255);
		sketch.noStroke();
		sketch.text(sketch.hour()+":"+sketch.minute()+":"+sketch.second(), 10, sketch.windowHeight-10);
	}


});
