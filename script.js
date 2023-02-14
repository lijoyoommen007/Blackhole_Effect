const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.setLineDash([15, 25]);

let radius = 10;
let maxRadius = Math.min(canvas.width, canvas.height) / 2;

function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw lines for the outer pattern
  for (let i = 0; i < 20; i++) {
    let angle = (i / 20) * Math.PI * 2;
    let x1 = Math.cos(angle) * (canvas.width / 2 - radius);
    let y1 = Math.sin(angle) * (canvas.height / 2 - radius);
    let x2 = Math.cos(angle) * (radius);
    let y2 = Math.sin(angle) * (radius);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.stroke();
  }

  // draw lines for the inner pattern
  for (let i = 0; i < 20; i++) {
    let angle = (i / 20) * Math.PI * 2;
    let x1 = Math.cos(angle) * (radius );
    let y1 = Math.sin(angle) * (radius  );
    let x2 = Math.cos(angle) * (radius);
    let y2 = Math.sin(angle) * (radius);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.stroke();
  }

  // draw filled circle
  // context.beginPath();
  // context.arc(canvas.width / 2, canvas.height / 2, radius / 2, 0, Math.PI * 2);
  // context.fillStyle = 'white';
  // context.fill();

  // draw  pattern inside the circle

  for (let i = 0; i < 20; i++) {
    let angle = (i / 20) * Math.PI * 2;
    let x1 = Math.cos(angle) * (radius /6 );
    let y1 = Math.sin(angle) * (radius / 6);
    let x2 = Math.cos(angle) * (radius);
    let y2 = Math.sin(angle) * (radius);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.stroke();
  }

  // increase radius
  radius += 0.5;

  // reset radius if it's greater than maxRadius
  if (radius > maxRadius) {
    radius = 0;
  }
}

animate();
