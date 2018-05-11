var currentIndex = 0;
var rotateY = 0;
var front = null;
var back = null;
var flipper = null;
var flipProcessing = false;

function onLoad() {
  front = document.getElementById('front');
  back = document.getElementById('back');
  flipper = document.getElementById('flipper');
  flipper.addEventListener('transitionend', function() {
    if (rotateY % 360 !== 0) {
      _setData(front, _getNextData());
    } else {
      _setData(back, _getNextData());
    }
    flipProcessing = false;
  });

  _setData(front, _getNextData());
  _setData(back, _getNextData());
}

function onFlipperClicked() {
  if (flipProcessing) {
    return;
  }
  flipProcessing = true;

  // 2回転
  rotateY += 180 + 360;
  flipper.style.transform = `rotateY(${rotateY}deg)`;
  flipper.style.webkitTransform = `rotateY(${rotateY}deg)`;
  flipper.style.mozTransform = `rotateY(${rotateY}deg)`;
}

function _setData(elem, obj) {
  elem.children[0].src = obj.image;
  elem.children[1].innerHTML = obj.title;
  elem.children[2].innerHTML = obj.description;
}

function _getNextData() {
  var index = currentIndex % data.length;
  currentIndex++;
  return data[index];
}
