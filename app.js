/*

  main visual content lives here

*/

var canvas, context;

function init() {
  canvas = document.getElementById('mycanvas');
  context = canvas.getContext('2d');
  animate();
}

function animate() {
if(dataArduino!=null){
  context.font = '48px serif';
  context.fillText(dataArduino, 10, 50);
}


requestAnimationFrame(animate);
}

window.addEventListener('load', init);
