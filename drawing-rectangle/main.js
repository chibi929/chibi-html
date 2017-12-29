// DOM用
var canvas;
var image;
var debug;

// キャンバス用
var ctx;

// 矩形用
var drawingRect = false;
var point1 = {x: 0, y: 0};
var point2 = {x: 0, y: 0};

/**
 * DOMが読み込まれた時に呼ばれる
 */
function onLoad() {
  canvas = document.getElementById('mainCanvas');
  ctx = canvas.getContext('2d');
  image = document.getElementById('sourceImage');
  debug = document.getElementById('debug');
}

/**
 * ファイル選択ダイアログからファイルが選択された時に呼ばれる
 */
function onFileChanged(event) {
  var files = event.target.files ? event.target.files : event.dataTransfer.files;
  var reader = new FileReader();
  
  reader.onload = function() {
    image.onload = function() {
      // イメージが読み込まれたらキャンバスの大きさを設定して描画する
      canvas.width  = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
    image.onerror = function() {
      alert('このファイルは読み込めません。');
    };

    image.src = reader.result;
  };

  reader.readAsDataURL(files[0]);
  document.getElementById('inputFile').value = "";
}

/**
 * キャンバスの MouseDown イベントハンドラー
 */
function onMouseDown(event) {
  drawingRect = true;

  // 座標取得
  var p = calcPointFromCanvas(event);
  point1.x = p.x;
  point1.y = p.y;

  // Context の設定
  ctx.strokeStyle = 'rgb(255, 0, 255)';
  ctx.lineWidth = 2;
  ctx.setLineDash([2, 3]);
}

/**
 * キャンバスの MouseMove イベントハンドラー
 */
function onMouseMove(event) {
  if (!drawingRect) {
    return;
  }

  // 座標取得
  var p = calcPointFromCanvas(event);
  point2.x = p.x;
  point2.y = p.y;

  // 元画像の再描画
  ctx.drawImage(image, 0, 0);
  // 矩形描画
  drawRect(ctx, point1, point2);
}

/**
 * キャンバスの MouseUp イベントハンドラー
 */
function onMouseUp(event) {
  drawingRect = false;
}

/**
 * Submit ボタンのクリックイベントハンドラー
 */
function onSubmit() {
  window.alert("ボタンをクリックした時の処理を実装してください");
}

/**
 * キャンバスからポイントを計算する
 */
function calcPointFromCanvas(event) {
  var rect = event.target.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

/**
 * 矩形の描画をする
 */
function drawRect(ctx, p1, p2) {
  ctx.beginPath();

  // 上から右へ
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p1.y);

  // 右から下へ
  ctx.moveTo(p2.x, p1.y);
  ctx.lineTo(p2.x, p2.y);

  // 下から左へ
  ctx.moveTo(p2.x, p2.y);
  ctx.lineTo(p1.x, p2.y);

  // 左から上へ
  ctx.moveTo(p1.x, p2.y);
  ctx.lineTo(p1.x, p1.y);

  ctx.stroke();
  printDebug(p1, p2);
}

/**
 * デバッグ用
 */
function printDebug(p1, p2) {
  var x1 = p1.x < p2.x ? p1.x : p2.x;
  var y1 = p1.y < p2.y ? p1.y : p2.y;
  var x2 = p1.x > p2.x ? p1.x : p2.x;
  var y2 = p1.y > p2.y ? p1.y : p2.y;
  debug.innerHTML = `x1: ${x1}, y1: ${y1}, x2: ${x2}, y2: ${y2}`;
}
