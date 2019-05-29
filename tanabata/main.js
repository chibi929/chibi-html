const coordinates = [
  { x: 0, y: 0 },
  { x: 0, y: 200 },
  { x: 0, y: 400 },
  { x: 0, y: 600 },
  { x: 0, y: 800 },
  { x: 200, y: 0 },
  { x: 400, y: 0 },
  { x: 600, y: 0 },
  { x: 800, y: 0 },
  { x: 1000, y: 0 }
];
coordinates.shuffle();

function appear() {
  const box = createBox();
  const rect = box.getBoundingClientRect();

  c = coordinates[index++ % coordinates.length];
  tx = c.x - rect.left;
  ty = c.y - rect.top;
  anime({
    targets: box,
    scale: 2.0,
    duration: 1000,
    complete: function() {
      anime({
        targets: box,
        scale: 1.0,
        translateX: tx,
        translateY: ty,
        rotate: '1turn',
        duration: 750
      });
    }
  });
}

function createBox() {
  const divElm = document.createElement('div');
  divElm.classList.add('box');
  document.body.appendChild(divElm);
  return divElm;
}

let index = 0;
window.addEventListener('click', () => {
  appear();
});
