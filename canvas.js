// variable for canvas
var canvas = document.querySelector('canvas');

// placing this code in JS insures that entire screen is included
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// variable for context allows us to draw object on canvas
var c = canvas.getContext('2d');

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
 // syntax c.fillRect(x, y, width, height)
 // 100px from left of screen and100 px from top of screen
// then width and height
 // c.fillRect(30, 30, 150, 150);
 // c.fillStyle = "rgba(0, 0, 255, 0.5)";
 // c.fillRect(350, 350, 100, 100);
 // c.fillStyle = "rgba(0, 255, 0, 0.5)";
 // c.fillRect(150, 350, 100, 100);

// line
//  c.beginPath();
//  // starting point (x, y)
//  c.moveTo(50, 300);
//  // ending point (x, y)
//  c.lineTo(300, 100);
// // each lineto adds to the line
//  c.lineTo(400, 300);
//  //  set color for stroke (rgba or hexadecimal or text value)
//  c.strokeStyle = "#17a2b8";
// //  call stroke method
// c.stroke();

// arc or circle
// syntax   c.arc(x: Int, y: Int, radius: Int, startAngle: Float,
    // endAngle: Float, drawCounterClockwise: Bool (false));
// x=300, y ==300, start of arc is at aero, size of arc is 360 degrees
    // based on radians calculation and will not be drawn counterclockwise
// c.stroke();
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "green";

// creates random colors
// var color = '#'+Math.random().toString(16).substr(-6);

// use a for loop to draw multiple circles

// for(var i=0; i<3; i++) {
//   var x = Math.random() * innerWidth;
//   var y = Math.random() * innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = color;
//   c.stroke();
//   }

// var wordArray[] = {'tenacious', 'creative'}
//
// for(var i=0; i<3; i++) {
//   var x = Math.random() * innerWidth;
//   var y = Math.random() * innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = color;
//   c.stroke();
//   }

//  create a javascript object
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fill();


  this.update = function(){
    //  causes drawing to change directions once edge of circle
     // reaches screen width
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy;
      }
      // increments x and y vars by 1. this is the x and y velocity.
      this.x += this.dx;
      this.y += this.dy;

      //  call draw function within update function
      this.draw();
      this.update();

      console.log('this.update function')
    }
  }

}

  //  store all of the circles created in for loop below
  var circleArray = [];
  // for loop creates multiple circles
  for (var i = 0; i < 100; i++){
    // //  circles radius
    var radius = 30;
    // variables for static circle:
    // random starting x and y values for animation
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    // // random x velocity that can be negative or positive
    // //  multiplying by a factor allows you to speed up or slow down radndom velocity
    var dx = (Math.random() -0.5) * 8;
    // // random y velocity that can be neg or pos
    var dy = (Math.random() -0.5) * 8;

    circleArray.push(new Circle(x, y, dx, dy, radius));
    //  instantiate a new object with starting variables
    var circle = new Circle(200, 200, 3, 3, 30);

    console.log(circleArray);

    }

// creates a continous loop
  function animate() {
    requestAnimationFrame(animate);
    // clears previous drawing from point (0, 0) for the entire screen
    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( var i = 0; i < circleArray.arrayLength; i++){
      // call the animate function
      circleArray[i].update();
    }
    console.log('animate function');
  }
  // call the animate function
  animate();
