/* globals faceapi */

export const initFaceApi = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri('./src/models');
  await faceapi.nets.faceExpressionNet.loadFromUri('./src/models');

  return true;
};

export const detectVideoEltEmotion = async () => {
  const img = document.querySelector('video');

  const allFaces = await (
    faceapi
      .detectAllFaces(img)
      .withFaceExpressions()
  );

  // first face only
  const emotionScores = allFaces[0].expressions;

  const emotionArr = Object.entries(emotionScores);
  emotionArr.sort((a, b) => b[1] - a[1]);

  return emotionArr;
};
