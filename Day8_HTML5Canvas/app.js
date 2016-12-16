const canvas = document.querySelector("#draw");
const contx = canvas.getContext('2d');
contx.width = window.innerWidth;
contx.height = window.innerHeight;

contx.lineJoin = 'round';
contx.lineCap = 'round';
contx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(evt) {
  if (!isDrawing) return;
  // console.log(evt);
  contx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  contx.beginPath();
  contx.moveTo(lastX, lastY);
  contx.lineTo(evt.offsetX, evt.offsetY);
  contx.stroke();
  
  [lastX, lastY] = [evt.offsetX, evt.offsetY];
  hue++;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (evt) => {
  isDrawing = true;
  [lastX, lastY] = [evt.offsetX, evt.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);