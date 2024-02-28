function drawHill(context, centerX, centerY, radiusX, radiusY) { //Draw hill using ellipse
    context.beginPath();
    context.ellipse(centerX, centerY, radiusX, radiusY, 0, Math.PI, 0);
    context.fillStyle = 'green';
    context.closePath();
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
}
//Create birds using arcs
function drawBirds(context, centerX, centerY, radius) {
    
    context.beginPath();
    context.arc(centerX - radius, centerY, radius, Math.PI, 0);
    context.strokeStyle = 'black';
    context.stroke();
    //Place both arcs side by side
    context.beginPath();
    context.arc(centerX + radius, centerY, radius, Math.PI, 0);
    context.strokeStyle = 'black';
    context.stroke();
}

function drawSunWithRays(context, centerX, centerY, sunRadius, rayLength, rayCount, rayThickness) {
    //Draw the sun
    context.beginPath();
    context.arc(centerX, centerY, sunRadius, 0, Math.PI);
    context.fillStyle = 'orange';
    context.fill();

    context.lineWidth = rayThickness;

    //Draw the rays around the sun
    for(let i = 0; i < rayCount; i++) {
        let angle = (Math.PI * 2 / rayCount) * i;
        let rayStartX = centerX + sunRadius * Math.cos(angle);
        let rayStartY = centerY + sunRadius * Math.sin(angle);
        let rayEndX = centerX + (sunRadius + rayLength) * Math.cos(angle);
        let rayEndY = centerY + (sunRadius + rayLength) * Math.sin(angle);

        context.beginPath();
        context.moveTo(rayStartX, rayStartY);
        context.lineTo(rayEndX, rayEndY);
        context.strokeStyle = 'yellow';
        context.stroke();
    }
}

function drawRocket(context, x, y, width, height, rotation) {
    context.save();

    //Move the context to the rocket's position
    context.translate(x, y);

    context.rotate(rotation);

    context.save();
    context.scale(0.60, 1.2);
    context.beginPath();
    context.arc(0, 0, width/2, 0, Math.PI*2, false);
    context.fillStyle = 'gray';
    context.fill();
    context.restore();
    context.strokeStyle = 'black';
    context.stroke();

    //Create circular Window
    context.beginPath();
    context.arc(0, 0, width * 0.165, 0, Math.PI * 2);
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.fill();
    context.stroke();

    context.restore();
}

//Create rocket fins
function drawRocketFins(context, x, y, width, height, rotation) {
    
    context.save();

    context.translate(x, y);

    context.rotate(rotation);
    //Right fin
    context.translate(-x, -y);
    context.beginPath();
    context.moveTo(x + width * 0.85, y);
    context.quadraticCurveTo(
      x + width * 2, y + height * 0.2,
      x + width * 0.75, y + height * 0.45 
    );
    context.quadraticCurveTo(
      x + width * 1.2, y + height * 0.2,
      x + width * 0.6, y + height * 0.25 
    );
    context.lineWidth = 1.3;
    context.fillStyle = "lightgray";
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    //Left Fin
    context.beginPath();
    context.moveTo(x - width * 0.85, y);
    context.quadraticCurveTo(
      x - width * 2, y + height * 0.2, 
      x - width * 0.75, y + height * 0.45
    );
    context.quadraticCurveTo(
      x - width * 1.2, y + height * 0.2,
      x - width * 0.6, y + height * 0.25
    );
    context.lineWidth = 1.3;
    context.fillStyle = "lightgray";
    context.strokeStyle = "black";
    context.closePath();
    context.fill();
    context.stroke();

    //Middle Fin
    context.beginPath();
    //Center the third fin
    const horizontalRadius = width * 0.1;
    const verticalRadius = height * 0.24;
    context.ellipse(
      x, y + height * 0.23,
      horizontalRadius, verticalRadius,
      0, 0, 2 * Math.PI
    );
    context.fillStyle = "lightgray";
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    context.restore();
}

//Create propeller at the bottom of the rocket
function drawPropeller(context, x, y, width, height, rotation) {
  context.save();

  //Translate to the center of the rocket
  context.translate(x + width / 2, y + height / 2);

  //Apply rotation if specified
  context.rotate(rotation);
  
  context.beginPath();
  //Adjust the coordinates to draw the propeller relative to the center of the rocket
  //Multiply the coordinates by width and height to scale the propeller
  context.moveTo(-30 * width, 105 * height);
  context.lineTo(-50 * width, 170 * height);
  context.lineTo(50 * width, 170 * height);
  context.lineTo(30 * width, 105 * height);
  context.lineTo(-30 * width, 105 * height);
  context.fillStyle = 'silver';
  context.fill();
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
}

//Draw flame at the bottom of the propeller
function drawFlames(context, x, y, width, height, rotation) {

  context.save();

  context.translate(x + width / 2, y + height / 2);

  context.rotate(rotation);

  context.translate(-x - width / 2, -y - height / 2);

  context.beginPath();
  for(let i = 0; i < 5; i++) {
      context.moveTo(x + i * width / 10, y);
      context.lineTo(x + (i + 0.5) * width / 10, y + height);
      context.lineTo(x + (i + 1) * width / 10, y);
  }
  context.fillStyle = 'orange';
  context.fill();

  context.beginPath();
  for(let i = 0; i < 5; i++) {
      context.moveTo(x + i * width / 10, y + height / 2);
      context.lineTo(x + (i + 0.5) * width / 10, y + height);
      context.lineTo(x + (i + 1) * width / 10, y + height / 2);
  }
  context.fillStyle = 'red';
  context.fill();
  context.restore();
}

//Draw grass on the hill
function drawGrass(ctx, startX, startY, spikeWidth, spikeHeight, spikeCount) {
  for (let i = 0; i < spikeCount; i++) {
    ctx.beginPath();
    ctx.moveTo(startX + i * spikeWidth, startY);
    ctx.lineTo(startX + i * spikeWidth + spikeWidth / 2, startY - spikeHeight);
    ctx.lineTo(startX + (i + 1) * spikeWidth, startY);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
  }
}

var countdown = 5;
var countdownFinished = false;

//Create a countdown bjefore the rocket launches
function updateCountdown(context) {
  if (countdown > 0) {
      context.clearRect(context.canvas.width / 2 - 100, context.canvas.height / 2 - 50, 200, 100);
      context.font = '50px Arial';
      context.fillText(countdown, context.canvas.width / 2, context.canvas.height / 2); //Draw the countdown
      countdown--;
      setTimeout(() => updateCountdown(context), 1000);
  } else {
      countdownFinished = true;
      updateRocketLaunchCanvas(); //Call the updateRocketLaunchCanvas function after the countdown finishes
  }
}

var rocketLaunchCanvas = document.querySelector('#rocket-launch');
var rocketLaunch = rocketLaunchCanvas.getContext('2d');
updateCountdown(rocketLaunch);

var rocket = {
  x: 450,
  y: 220,
  width: 200,
  height: 100,
  rotate: 0,
  dy: 2
};

updateRocketLaunchCanvas = function() {
if(!countdownFinished) {
    return;
}

var rocketLaunchCanvas = document.querySelector('#rocket-launch');
var rocketLaunch = rocketLaunchCanvas.getContext('2d');

rocketLaunch.clearRect(0, 0, rocketLaunchCanvas.width, rocketLaunchCanvas.height);

rocketLaunchCanvas.style.border = '2px solid black';
rocketLaunchCanvas.style.backgroundColor = 'lightblue';
rocketLaunch.beginPath();
rocketLaunch.arc(900, -10, 180, 0, Math.PI, false);
rocketLaunch.fillStyle = 'orange';
rocketLaunch.fill();

drawHill(rocketLaunch, 450, 500, 500, 120);

rocketLaunch.beginPath();
rocketLaunch.moveTo(240, 440);
rocketLaunch.lineTo(650, 440);
rocketLaunch.lineTo(580, 390);
rocketLaunch.lineTo(300, 390);
rocketLaunch.closePath();
rocketLaunch.fillStyle = 'lightgray';
rocketLaunch.fill();
rocketLaunch.stroke();

drawBirds(rocketLaunch, 100, 100, 10);
drawBirds(rocketLaunch, 300, 50, 10);
drawBirds(rocketLaunch, 400, 150, 10);
drawBirds(rocketLaunch, 600, 100, 10);
drawBirds(rocketLaunch, 220, 180, 10);
drawBirds(rocketLaunch, 620, 200, 10);

drawGrass(rocketLaunch, 80, 450, 10, 10, 5);
drawGrass(rocketLaunch, 180, 430, 10, 10, 5);
drawGrass(rocketLaunch, 180, 430, 10, 10, 5);
drawGrass(rocketLaunch, 700, 470, 10, 10, 5);
drawGrass(rocketLaunch, 670, 420, 10, 10, 5);

rocketLaunch.arc(900, -10, 180, 0, Math.PI);

drawSunWithRays(rocketLaunch, 900, -10, 200, 50, 20, 3);

drawPropeller(rocketLaunch, rocket.x, rocket.y, 1, 1, 0);
drawRocket(rocketLaunch, rocket.x, rocket.y, rocket.width, rocket.height, 0);
drawRocketFins(rocketLaunch, rocket.x, rocket.y + rocket.height / 2, 67, 200, 0);

rocket.y -= rocket.dy;
drawFlames(rocketLaunch, rocket.x - 50, rocket.y + rocket.height + 20 + rocket.height / 2, rocket.width, rocket.height / 2, 0);

requestAnimationFrame(updateRocketLaunchCanvas);

}
updateRocketLaunchCanvas();

var earthImg = new Image();
earthImg.src = 'earth.jpg';

earthImg.onload = function() {
  //Start the animation after the Earth image has loaded
  updateRocketFlyingCanvas();
};

function drawEarth(context, x, y, width, height) {
  //Draw the loaded earth image
  context.drawImage(earthImg, x, y, width, height);
}

function drawMoon(context, x, y, width, height) {
  //Create gradient for 3d effect
  var grd = context.createRadialGradient(x, y, 0, x, y, width);
  grd.addColorStop(0, 'lightgray');
  grd.addColorStop(1, 'gray');

  context.beginPath();
  context.arc(x, y, width, 0, Math.PI * 2, false);
  context.fillStyle = grd;
  context.fill();
  context.stroke();

  //Draw craters
  var craterSize = width / 8;
  context.fillStyle = 'darkgray';
  context.beginPath();
  context.arc(x + width / 4, y + width / 4, craterSize, 0, Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.arc(x - width / 3, y - width / 3, craterSize, 0, Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.arc(x + width / 2, y - width / 2, craterSize, 0, Math.PI * 2, false);
  context.fill();
}

var rocketFlying = {
  x: 450,
  y: 240,
  width: 50,
  height: 50,
  dy: 2
};

var rocketSpeed = 1.1;

updateRocketFlyingCanvas = function() {
  
  var rocketFlyingCanvas = document.querySelector('#rocket-flying');
  var rocketFlyingContext = rocketFlyingCanvas.getContext('2d');

  rocketFlyingContext.clearRect(0, 0, rocketFlyingCanvas.width, rocketFlyingCanvas.height);

  rocketFlyingCanvas.style.border = '2px solid black';
  rocketFlyingCanvas.style.backgroundColor = 'black';

  var starsCount = 500;
  for (var i = 0; i < starsCount; i++) {
    var starX = Math.random() * rocketFlyingCanvas.width;
    var starY = Math.random() * rocketFlyingCanvas.height;
    rocketFlyingContext.fillStyle = 'white';
    rocketFlyingContext.beginPath();
    rocketFlyingContext.arc(starX, starY, 1, 0, Math.PI * 2, false);
    rocketFlyingContext.fill();
  }

  var rocketRotation = -Math.PI / 2;
  drawRocket(rocketFlyingContext, rocketFlying.x + 150, rocketFlying.y, rocketFlying.width, rocketFlying.height, rocketRotation);
  drawPropeller(rocketFlyingContext, rocketFlying.x + 138, rocketFlying.y, 0.3, 0.3, rocketRotation);
  drawFlames(rocketFlyingContext, rocketFlying.x + 177, rocketFlying.y - 25, rocketFlying.width, rocketFlying.height * 0.5, rocketRotation);
  drawRocketFins(rocketFlyingContext, rocketFlying.x + 160, rocketFlying.y, rocketFlying.width * 0.3, rocketFlying.height, rocketRotation);

  drawEarth(rocketFlyingContext, 700, 130, 210, 200);
  drawMoon(rocketFlyingContext, 100, 300, 50, 50);

  //Calculate the distance to the target
  var dx = 100 - (rocketFlying.x + 150); //X position of the moon - X position of the rocket
  var dy = 300 - rocketFlying.y; //Y position of the moon - Y position of the rocket

  var distance = Math.sqrt(dx * dx + dy * dy);
  var directionX = dx / distance;
  var directionY = dy / distance;

  //Move the rocket towards the target
  rocketFlying.x += directionX * rocketSpeed;
  rocketFlying.y += directionY * rocketSpeed;

  if (distance > rocketSpeed) {
    window.requestAnimationFrame(updateRocketFlyingCanvas);
  }
} 

updateRocketFlyingCanvas();
