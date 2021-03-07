var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var boxs = [];
var colors = [
  "rgba(255, 0, 0, 0.5)",
  "rgba(0, 255, 0, 0.5)",
  "rgba(0, 0, 255, 0.5)"
];
var color = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.onmousemove = function (event) {
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 255, 0, 0.5)";
  context.fillRect(event.clientX, event.clientY, 100, 100);
  for (let i = 0; i < boxs.length; i++) {
    context.fillStyle = boxs[i].color;
    context.fillRect(boxs[i].x, boxs[i].y, boxs[i].width, boxs[i].height);
  }
};
document.body.onmousedown = function (event) {
  boxs.push({
    x: event.clientX,
    y: event.clientY,
    width: 100,
    height: 100,
    color: colors[color]
  });
};
document.onkeydown = function (event) {
  if (event.keyCode == 82) {
    color = 0;
  } else if (event.keyCode == 71) {
    color = 1;
  } else if (event.keyCode == 66) {
    color = 2;
  }
};
