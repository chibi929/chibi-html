var rotateY = 0;
var front = null;
var back = null;
var flipper = null;

function onLoad() {
  front = document.getElementById('front');
  back = document.getElementById('back');
  flipper = document.getElementById('flipper');
  flipper.addEventListener('transitionend', function() {
    if (rotateY % 360 !== 0) {
      console.log("フロントのアニメーション終了");
      front.children[2].innerHTML = `フロント(rotateY): ${rotateY}`;
    } else {
      console.log("バックのアニメーション終了");
      back.children[2].innerHTML = `バック(rotateY): ${rotateY}`;
    }
  });
}

function onFlipperClicked() {
  rotateY += 180;
  flipper.style.transform = `rotateY(${rotateY}deg)`;
  flipper.style.webkitTransform = `rotateY(${rotateY}deg)`;
  flipper.style.mozTransform = `rotateY(${rotateY}deg)`;
}
