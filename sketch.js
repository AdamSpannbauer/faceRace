import { rotateFromCenter } from './src/utils.js';

const canvasW = 512;
const canvasH = 512;

window.setup = () => {
  createCanvas(canvasW, canvasH);
  rectMode(CENTER);
};

window.draw = () => {

  
  background(0);
  // rotateFromCenter(QUARTER_PI);
  rect(mouseX-100, mouseY-100, 100, 100);
};
