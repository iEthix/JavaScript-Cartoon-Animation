function drawHill(context, centerX, centerY, radiusX, radiusY) {
    context.beginPath();
    context.ellipse(centerX, centerY, radiusX, radiusY, 0, Math.PI, 0);
    context.fillStyle = 'green';
    context.closePath();
    context.fill();
}

function drawBirds(context, centerX, centerY, radius) {
    
    context.beginPath();
    context.arc(centerX - radius, centerY, radius, Math.PI, 0);
    context.stroke();

    context.beginPath();
    context.arc(centerX + radius, centerY, radius, Math.PI, 0);
    context.stroke();
}

function drawSunWithRays(context, centerX, centerY, sunRadius, rayLength, rayCount, rayThickness) {
    // Draw the sun
    context.beginPath();
    context.arc(centerX, centerY, sunRadius, 0, Math.PI);
    context.fillStyle = 'orange';
    context.fill();

    context.lineWidth = rayThickness;

    // Draw the rays
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

function drawRocket(context, x, y, width, height) {
    // Save the current context state
    context.save();

    // Move the context to the rocket's position
    context.translate(x, y);

    // Main Body - Elongated Oval or Rectangle with Rounded Ends
    // Draw the rounded rectangle here
    // ...
    context.save();
    context.scale(0.60, 1.2);
    context.beginPath();
    context.arc(0,0,width/2,0,Math.PI*2, false);
    context.fillStyle = 'gray';
    context.fill();
    context.restore();
    context.strokeStyle = 'black';
    context.stroke();


    // Circular Window
    context.beginPath();
    context.arc(0, 0, width * 0.165, 0, Math.PI * 2); // Adjust the multiplier for the window size
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.fill();
    context.stroke();

    context.restore();
}
function drawRocketFins(context, x, y, width, height) {
    // Right Fin
    context.beginPath();
    context.moveTo(x + width * 0.85, y); // Start at the right side of the rocket body
    context.quadraticCurveTo(
      x + width * 2, y + height * 0.2, // Control point to the right of the rocket
      x + width * 0.75, y + height * 0.45  // End point below the start point, on the side of the rocket
    );
    context.quadraticCurveTo(
      x + width * 1.2, y + height * 0.2, // Control point back towards the rocket
      x + width * 0.6, y + height * 0.25  // End back at the start point
    );
    context.lineWidth = 1.3;
    context.fillStyle = "lightgray"; // Greenish color for the fin
    context.fill();
    context.strokeStyle = "black"; // Darker green for the stroke
    context.stroke();

    // Left Fin
    context.beginPath();
    context.moveTo(x - width * 0.85, y); // Start at the left side of the rocket body
    context.quadraticCurveTo(
      x - width * 2, y + height * 0.2, // Control point to the left of the rocket
      x - width * 0.75, y + height * 0.45  // End point below the start point, on the side of the rocket
    );
    context.quadraticCurveTo(
      x - width * 1.2, y + height * 0.2, // Control point back towards the rocket
      x - width * 0.6, y + height * 0.25  // End back at the start point
    );
    context.lineWidth = 1.3;
    context.fillStyle = "lightgray"; // Greenish color for the fin
    context.strokeStyle = "black"; // Darker green for the stroke
    context.closePath();
    context.fill();
    context.stroke();

    // Middle Fin (Oval)
    context.beginPath();
    // The center of the oval will be aligned with the center of the rocket (x, y)
    // Horizontal radius is smaller than vertical radius to create the oval standing upright
    const horizontalRadius = width * 0.1; // Width of the middle fin, adjust as needed
    const verticalRadius = height * 0.24; // Height of the middle fin, adjust as needed
    context.ellipse(
      x, y + height * 0.23, // Position the oval below the center of the rocket
      horizontalRadius, verticalRadius,
      0, 0, 2 * Math.PI // Start angle 0, end angle 2 * PI for a full ellipse
    );
    context.fillStyle = "lightgray"; // Same color as the fins
    context.fill();
    context.strokeStyle = "black"; // Stroke color
    context.stroke();
}

updateRocketLaunchCanvas = function() {
var rocketLaunchCanvas = document.querySelector('#rocket-launch');
var rocketLaunch = rocketLaunchCanvas.getContext('2d');

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

rocketLaunch.arc(900, -10, 180, 0, Math.PI);

drawSunWithRays(rocketLaunch, 900, -10, 200, 50, 20, 3);

drawRocket(rocketLaunch, 450, 220, 200, 100);
rocketLaunch.beginPath();
rocketLaunch.moveTo(420, 325);
rocketLaunch.lineTo(400, 390);
rocketLaunch.lineTo(500, 390);
rocketLaunch.lineTo(480, 325);
rocketLaunch.lineTo(420, 325);
rocketLaunch.fillStyle = 'silver';
rocketLaunch.fill();
rocketLaunch.strokeStyle = 'black';
rocketLaunch.stroke();

drawRocketFins(rocketLaunch, 450, 265, 67, 200);
}
updateRocketLaunchCanvas();

