// Create a hill using an ellipse
function drawHill(context, color, centerX, centerY, radiusX, radiusY) { //Draw hill using ellipse
  context.beginPath();
  context.ellipse(centerX, centerY, radiusX, radiusY, 0, Math.PI, 0);
  context.fillStyle = color;
  context.closePath();
  context.fill();
  context.strokeStyle = 'black';
  context.stroke();
}
// Create birds using arcs
function drawBirds(context, centerX, centerY, radius) {
  
  context.beginPath();
  context.arc(centerX - radius, centerY, radius, Math.PI, 0);
  context.strokeStyle = 'black';
  context.stroke();
  // Place both arcs side by side
  context.beginPath();
  context.arc(centerX + radius, centerY, radius, Math.PI, 0);
  context.strokeStyle = 'black';
  context.stroke();
}

function drawSunWithRays(context, centerX, centerY, sunRadius, rayLength, rayCount, rayThickness) {
  // Draw the sun
  context.beginPath();
  context.arc(centerX, centerY, sunRadius, 0, Math.PI);
  context.fillStyle = 'orange';
  context.fill();

  context.lineWidth = rayThickness;

  // Draw the rays around the sun
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
// Create the rocket shape
function drawRocket(context, x, y, width, rotation) {
  context.save();

  // Move the context to the rocket's position
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

  // Create circular Window
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
  // Right fin
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

  // Left Fin
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

  // Middle Fin
  context.beginPath();
  // Center the third fin
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

// Create propeller at the bottom of the rocket
function drawPropeller(context, x, y, width, height, rotation) {
context.save();

// Translate to the center of the rocket
context.translate(x + width / 2, y + height / 2);

// Apply rotation if specified
context.rotate(rotation);

context.beginPath();
// Adjust the coordinates to draw the propeller relative to the center of the rocket
// Multiply the coordinates by width and height to scale the propeller
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

// Draw flame at the bottom of the propeller
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

// Draw grass on the hill
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
var scene1Finished = false;
// Create a countdown before the rocket launches
function updateCountdown(context) {
if (countdown > 0) {
    context.clearRect(context.canvas.width / 2 - 100, context.canvas.height / 2 - 50, 200, 100);
    context.font = '50px Arial';
    context.fillText(countdown, context.canvas.width / 2, context.canvas.height / 2); //Draw the countdown
    countdown--;
    setTimeout(() => updateCountdown(context), 1000);
} else {
    countdownFinished = true;
    updateRocketLaunchCanvas(); // Play rocket launch when the countdown is finished
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

  if(!countdownFinished) { // If the countdown is not finished, halt the rocketlaunch
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

drawHill(rocketLaunch, 'green', 450, 500, 500, 120);

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
drawRocket(rocketLaunch, rocket.x, rocket.y, rocket.width, 0);
drawRocketFins(rocketLaunch, rocket.x, rocket.y + rocket.height / 2, 67, 200, 0);

rocket.y -= rocket.dy;
drawFlames(rocketLaunch, rocket.x - 50, rocket.y + rocket.height + 20 + rocket.height / 2, rocket.width, rocket.height / 2, 0);

if (rocket.y < -300) {
  scene1Finished = true; // When the launch animation is finished, set scene1Finished to true
  updateRocketFlyingCanvas(); // Call next scene when this scene is finished
} else {
  requestAnimationFrame(updateRocketLaunchCanvas); // Else continue the animation loop
  }
}

var earthImg = new Image();
earthImg.src = 'earth.jpg';

function drawEarth(context, x, y, width, height) {
// Draw the loaded earth image
context.drawImage(earthImg, x, y, width, height);
}

function drawMoon(context, x, y, width) {
// Create gradient for 3d effect
var grd = context.createRadialGradient(x, y, 0, x, y, width);
grd.addColorStop(0, 'lightgray');
grd.addColorStop(1, 'gray');

context.beginPath();
context.arc(x, y, width, 0, Math.PI * 2, false);
context.fillStyle = grd;
context.fill();
context.stroke();

// Draw craters
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
x: 700,
y: 240,
width: 50,
height: 50,
dy: 2
};

var rocketSpeed = 1.3;

updateRocketFlyingCanvas = function() {

  if (!scene1Finished) {
    return;
  }

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

// Calculate the distance to the target
var dx = 100 - (rocketFlying.x + 150); // X position of the moon - X position of the rocket
var dy = 300 - rocketFlying.y; // Y position of the moon - Y position of the rocket

var distance = Math.sqrt(dx * dx + dy * dy);
var directionX = dx / distance;
var directionY = dy / distance;

// Calculate scale factor based on distance
var scaleFactor = Math.max(0.10, distance / 1000);

drawEarth(rocketFlyingContext, 700, 130, 210, 200);
drawMoon(rocketFlyingContext, 100, 300, 50);

var rocketRotation = -Math.PI / 2;
drawRocket(rocketFlyingContext, rocketFlying.x + 150 * scaleFactor, rocketFlying.y, rocketFlying.width * scaleFactor, rocketRotation);
drawPropeller(rocketFlyingContext, rocketFlying.x + 138 * scaleFactor, rocketFlying.y, 0.3 * scaleFactor, 0.3 * scaleFactor, rocketRotation);
drawFlames(rocketFlyingContext, rocketFlying.x + 190 * scaleFactor, rocketFlying.y - 37 * scaleFactor, rocketFlying.width * scaleFactor, rocketFlying.height * scaleFactor, rocketRotation);
drawRocketFins(rocketFlyingContext, rocketFlying.x + 160 * scaleFactor, rocketFlying.y, rocketFlying.width * 0.3 * scaleFactor, rocketFlying.height * scaleFactor, rocketRotation);


// Move the rocket towards the target
rocketFlying.x += directionX * rocketSpeed;
rocketFlying.y += directionY * rocketSpeed;

if (rocketFlying.x < 98) {
  // When the flying animation is finished, set scene2Finished to true
  scene2Finished = true;
  // Then, start the moon landing scene
  updateRocketMoonLandingCanvas();
} else {
  requestAnimationFrame(updateRocketFlyingCanvas);
  }
}

function drawCrater(context, x, y, width, height) {
  // Draw the main ellipse
  context.beginPath();
  context.ellipse(x, y, width / 2, height / 2, 0, 0, 2 * Math.PI);
  context.fillStyle = 'darkgray';
  context.fill();
  context.stroke();

  // Draw the inner arc
  var arcRadius = width / 2; 
  var arcCenterY = y + (height / 2) - (arcRadius / 10) - 5; 
  var startAngle = 0;
  var endAngle = Math.PI;

  context.beginPath();
  context.ellipse(x, arcCenterY, arcRadius, arcRadius / 10, 0, startAngle, endAngle, true);
  context.lineWidth = 2;
  context.stroke();
}
// Draw stars on the canvas
function drawStars(canvas, context, starsCount) {
  
  for (var i = 0; i < starsCount; i++) {
    var starX = Math.random() * canvas.width;
    var starY = Math.random() * canvas.height;
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(starX, starY, 1, 0, Math.PI * 2, false);
    context.fill();
  }
}
// Rocketlanding values
var rocketLanding = {
  x: 450,
  y: -300,
  width: 200,
  height: 100,
  rotate: 0,
  dy: 2
};

var scene2Finished = true;
updateRocketMoonLandingCanvas = function() {

  if (!scene2Finished) {
    return;
  }

  var rocketMoonLandingCanvas = document.querySelector('#rocket-moon-landing');
  var rocketMoonLandingContext = rocketMoonLandingCanvas.getContext('2d');

  rocketMoonLandingContext.clearRect(0, 0, rocketMoonLandingCanvas.width, rocketMoonLandingCanvas.height);

  rocketMoonLandingCanvas.style.border = 'black';
  rocketMoonLandingCanvas.style.backgroundColor = 'black';

  drawStars(rocketMoonLandingCanvas, rocketMoonLandingContext, 500);

  drawHill(rocketMoonLandingContext, 'gray', 450, 500, 750, 200);

  drawPropeller(rocketMoonLandingContext, rocketLanding.x, rocketLanding.y, 1, 1, 0);
  drawRocket(rocketMoonLandingContext, rocketLanding.x, rocketLanding.y, rocketLanding.width, 0);
  drawRocketFins(rocketMoonLandingContext, rocketLanding.x, rocketLanding.y + rocketLanding.height / 2, 67, 200, 0);

  drawCrater(rocketMoonLandingContext, 100, 390, 120, 25);
  drawCrater(rocketMoonLandingContext, 650, 330, 120, 25);
  drawCrater(rocketMoonLandingContext, 300, 350, 100, 25);
  drawCrater(rocketMoonLandingContext, 280, 450, 75, 25);
  drawCrater(rocketMoonLandingContext, 690, 400, 70, 25);
  drawCrater(rocketMoonLandingContext, 600, 450, 125, 25);
  drawCrater(rocketMoonLandingContext, 810, 430, 60, 25);

  rocketLanding.y += rocketLanding.dy; // Move rocket down
  
  if(rocketLanding.y < 235) {
  drawFlames(rocketMoonLandingContext, rocketLanding.x - 50, rocketLanding.y + rocketLanding.height + 20 + rocketLanding.height / 2, rocketLanding.width, rocketLanding.height / 2, 0);
  }

  if (rocketLanding.y >= 300 - rocketLanding.height / 2) {
    scene3Finished = true; // Scene completed
    updateRocketMissionCompleteCanvas(); // Start next scene
  } else {
    // If the landing is not complete, continue the animation loop
    requestAnimationFrame(updateRocketMoonLandingCanvas);
  }
}
// Creates the flag
function drawFlag(context, originX, originY, flagWidth, flagHeight) {
  context.save();
  
  context.translate(originX, originY);

  context.scale(flagWidth / context.canvas.clientWidth, flagHeight / context.canvas.clientHeight);

  stripes(context);
  field(context);
  context.restore();
}

// Function to draw the stripes
function stripes(context) {
  var stripecount = 13;
  for (var x = 0; x < stripecount ; x++) {
      var color = (x % 2) ? "#FFFFFF" : "#B22234";
      var lateralstart = (context.canvas.clientHeight / stripecount) * x;
      var lateralend = (context.canvas.clientHeight / stripecount);
      context.fillStyle = color;
      context.fillRect(0, lateralstart, context.canvas.clientWidth, lateralend);
  }
}

// Function to draw the field
function field(context, cantonwidth, cantonheight) {
  var cantonwidth = context.canvas.clientWidth * 2 / 5;
  var cantonheight = context.canvas.clientHeight * 0.54;
  context.fillStyle = "#3C3B6E";
  context.fillRect(0, 0, cantonwidth, cantonheight);
  stars(context, cantonwidth, cantonheight);
}
// Draws a grid of stars within a specified area on the canvas
function stars(context, cantonwidth, cantonheight) {
  var starrowcount = 9;
  var starradius = (context.canvas.clientHeight/13)*(4/5)/2;
  var ypos = cantonheight/10;
  for (var x = 0 ; x < starrowcount; x++) {       
      if (x % 2) {
          xpos = cantonwidth/7;
          for (var j = 0; j < 5; j++) {               
              star(context,xpos,ypos,starradius,5,.35);
              xpos = xpos + cantonwidth/6;
          }          
      } else {            
          xpos = cantonwidth/15;
          for (var i = 0; i < 6; i++) {              
               star(context,xpos,ypos,starradius,5,.35);
               xpos = xpos + cantonwidth/6;
          }
      }        
      ypos = ypos+cantonheight/10;
  }
}
// Draws a single star on the canvas.
function star(context, x, y, r, p, m){
  context.fillStyle = "#FFFFFF";
  context.save();
  context.beginPath();
  context.translate(x, y);
  context.moveTo(0,0-r);
  for (var i = 0; i < p; i++)
  {
    context.rotate(Math.PI / p);
    context.lineTo(0, 0 - (r*m));
    context.rotate(Math.PI / p);
    context.lineTo(0, 0 - r);
  }
  context.fill();
  context.restore();
}
// Draw the mission complete scene
updateRocketMissionCompleteCanvas = function() {

  if(!scene3Finished) {
  return;
  }

  var rocketMissionCompleteCanvas = document.querySelector('#rocket-mission-complete');
  var rocketMissionCompleteContext = rocketMissionCompleteCanvas.getContext('2d');

  rocketMissionCompleteContext.clearRect(0, 0, rocketMissionCompleteCanvas.width, rocketMissionCompleteCanvas.height);

  rocketMissionCompleteCanvas.style.border = 'black';
  rocketMissionCompleteCanvas.style.backgroundColor = 'black';

  drawStars(rocketMissionCompleteCanvas, rocketMissionCompleteContext, 500);

  drawHill(rocketMissionCompleteContext, 'gray', 450, 500, 750, 200);

  drawPropeller(rocketMissionCompleteContext, 450, 250, 1, 1, 0);
  drawRocket(rocketMissionCompleteContext, 450, 250, 200, 0);
  drawRocketFins(rocketMissionCompleteContext, 450, 250 + 100 / 2, 67, 200, 0);

  drawCrater(rocketMissionCompleteContext, 100, 390, 120, 25);
  drawCrater(rocketMissionCompleteContext, 650, 330, 120, 25);
  drawCrater(rocketMissionCompleteContext, 300, 350, 100, 25);
  drawCrater(rocketMissionCompleteContext, 280, 450, 75, 25);
  drawCrater(rocketMissionCompleteContext, 690, 400, 70, 25);
  drawCrater(rocketMissionCompleteContext, 600, 450, 125, 25);
  drawCrater(rocketMissionCompleteContext, 810, 430, 60, 25);

var flagOriginX = 120;
var flagOriginY = 200;
var flagWidth = 200;
var flagHeight = 100;

rocketMissionCompleteContext.beginPath();
rocketMissionCompleteContext.rect(120, 290, 10, 80);
rocketMissionCompleteContext.fillStyle = 'gray';
rocketMissionCompleteContext.fill();
rocketMissionCompleteContext.stroke();

drawFlag(rocketMissionCompleteContext, flagOriginX, flagOriginY, flagWidth, flagHeight);  
}
