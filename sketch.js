const canvasW = 512;
const canvasH = 512;

window.setup = () => {
  createCanvas(canvasW, canvasH);
};

window.draw = () => {
  rect(width / 2, height / 2, 100, 100);
};
