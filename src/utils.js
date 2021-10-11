export const rotateFromCenter = (a) => {
  translate(width / 2, height / 2);
  rotate(a);
  translate(-width / 2, -height / 2);
};
