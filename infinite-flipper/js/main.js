var rotateY = 0;

function onFlipperClicked() {
  rotateY += 180;
  var flipper = document.getElementById('flipper');
  flipper.style.transform = `rotateY(${rotateY}deg)`;
  flipper.style.webkitTransform = `rotateY(${rotateY}deg)`;
  flipper.style.mozTransform = `rotateY(${rotateY}deg)`;
}
