const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.fillStyle = "#fff";

let n = 0;
let c = 10;
let angle = 137.5;
let direction = 1;

const image = new Image();
image.src = "./Kurage_logo_BlackBg.svg";

function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  let maxRadius = Math.min(canvas.width, canvas.height);

  
  if (n <= 0) {
    direction = 1;
  }
  if(n>maxRadius){
    direction = -1
  }

  for (let i = 0; i < n; i++) {
    let a = i * angle;
    let r = c * Math.sqrt(i);

    let x = r * Math.cos(a) + canvas.width / 2;
    let y = r * Math.sin(a) + canvas.height / 2;

    context.beginPath();
    context.arc(x, y, 4, 0, Math.PI * 2);
    context.fill();
  }

  if (image.complete) {
    let imageWidth = 100;
    let imageHeight= 100;
    let x = (canvas.width - imageWidth) / 2;
    let y = (canvas.height - imageHeight) / 2;
    context.drawImage(image, x, y, imageWidth, imageHeight);
  }

  n += direction;
}

animate();
