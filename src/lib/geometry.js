const { cos, sin, PI } = Math;
const rad = deg => deg * PI /180;

export const xc = (x, y, rz) => cos(rad(rz))*x + sin(rad(rz))*y;
export const yc = (x, y, rz) => sin(rad(rz))*x - cos(rad(rz))*y;

export const orient = ($el, [[x, y, z], [rx, ry, rz]]) =>
  Object.assign($el.style, {
    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz})`,
  });
export const orientAll = ($els, posRots) => posRots.forEach((posRot, i) => orient($els[i], posRot));


export default {
  orient,
  orientAll,
  xc,
  yc,
};