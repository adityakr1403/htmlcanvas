let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let ctx = canvas.getContext("2d");
let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#ffffff";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`${mouse.x}\t${mouse.y}`, mouse.x, mouse.y);
  ctx.beginPath()
  ctx.moveTo(300, 300);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
}

function init() {}

function animate() {
  requestAnimationFrame(animate);
  update();
}

init();
animate();
