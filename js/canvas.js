
var canvas = document.getElementById('hoja');
var lapiz = canvas.getContext('2d');
var imageObj = new Image();
imageObj.src = 'images/vivalavida.jpg';
 // Draw image
 imageObj.onload = function(){
 lapiz.drawImage(imageObj,0,250);
 }
lapiz.font = '14pt Calibri';
lapiz.fillStyle = 'blue';
lapiz.fillText('Hi. en Canvas 2d!', 20, 30);

lapiz.strokeStyle = '#00ff00';
lapiz.beginPath();
lapiz.moveTo(50, 50);
lapiz.lineTo(100, 100);

lapiz.lineWidth = 3;
lapiz.moveTo(150,100);
lapiz.arc(150, 100, 40, 0, 2 * Math.PI);

// Create gradient
var grd = lapiz.createLinearGradient(160, 10, 260, 30);
grd.addColorStop(0, "gold");
grd.addColorStop(1, "blue");

// Fill with gradient
lapiz.fillStyle = grd;
lapiz.fillRect(160, 10, 100, 30);

lapiz.stroke();
