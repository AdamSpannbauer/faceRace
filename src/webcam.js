export const initWebCam = (outWidth = 512, hide = true) => {
  const cam = createCapture(VIDEO);

  const aspectRatio = cam.height / cam.width;
  cam.size(outWidth, outWidth * aspectRatio);

  cam.elt.setAttribute('playsinline', '');
  if (hide) cam.hide();

  return cam;
};
