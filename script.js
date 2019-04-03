// By Jazil and Ahmed
// Roadrunner Game


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var img = new Image(600, 600);
img.src="longroad-cool.png";
img.onload = function(){
ctx.drawImage(img,0,0);
}

var x= 300;
var y= 200;
drawObject();

let theImg = new Image();
theImg.src = "car-ran.png";
theImg.onload = function() {
  ctx.drawImage(theImg, 10, 10);
}


function drawObject(){
ctx.fillstyle="black";
ctx.beginPath();
ctx.arc(300,300,10,0,50*Math.PI);
ctx.fill();
}
function clearCanvas(){
  ctx.clearRect(0,0,600,600);


}
function moveUp(){
  ctx.clearRect(0,0,600,600);
  if (y>=60){
  y-=10;
  }


  ctx.beginPath();
  ctx.arc(x,y,50,0,2*Math.PI);
  ctx.fill();
}

 function moveRight(){
   ctx.clearRect(0,0,600,600);
   if (x<=440){
    x+=50;
}
   ctx.beginPath();
   ctx.arc(x,y,50,0,2*Math.PI);
   ctx.fill();
 }
 function moveLeft(){
   ctx.clearRect(0,0,600,600);
   if (x>=60){
   x-=10;
   }

   ctx.beginPath();
   ctx.arc(x,y,50,0,2*Math.PI);
   ctx.fill();
 }

 function moveDown(){
   ctx.clearRect(0,0,600,600);
   if (y<=440){
   y+=10
   }

   ctx.beginPath();
   ctx.arc(x,y,50,0,2*Math.PI);
   ctx.fill();
 }



var pointX = 0;
var pointY = 0;



// Draw Function
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// Circle Function
function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

// This puts the circle on the canvas.
var CircleOnCanvas = function() {
  drawCircle(300 + pointX, 520 + pointY, 40, "black");
}



//Function to move the object.
function moveSomething(e) {
  switch (e.keyCode) {
    case 37:
      //left key pressed
      pointX -= 2;
      break;

    case 38:
      // up key pressed
      pointY -= 2;
      break;

    case 39:
      // right key pressed
      pointX += 2;
      break;

    case 40:
      // down key pressed
      pointY += 2;
      break;

    default:

  }

  e.preventDefault();

  //This puts the circle on the canvas.
  drawObject();

  //This puts the rectangle on the canvas.
  // drawRectangle();
}
