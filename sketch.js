import { detectVideoEltEmotion, initFaceApi } from './src/faceapiUtils.js';
import { initWebCam } from './src/webcam.js';

const canvasW = 512;
const canvasH = 512;

let webcam;
const videoWidth = 512;
let faceApiLoaded = false;

window.setup = async () => {
  createCanvas(canvasW, canvasH);
  textAlign(CENTER, CENTER);
  textSize(30);

  webcam = initWebCam(videoWidth);
  faceApiLoaded = await initFaceApi();
};

window.draw = async () => {
  background(255);

  if (!faceApiLoaded) {
    text('loading face-api', width / 2, height / 2);
    return;
  }

  image(webcam, 0, 0, webcam.width, webcam.height);

  const sortedEmotionScores = await detectVideoEltEmotion(webcam);
  const topEmotion = sortedEmotionScores[0];

  const [topEmotionName, topEmotionScore] = topEmotion;

  console.log(
    `topEmotionName: ${topEmotionName}; topEmotionScore ${topEmotionScore.toFixed(3)}`,
  );

  // noLoop();
};
