import { orient, xc, yc } from './geometry';

const $world = $('.world');
const $camera = $('.camera');

const pos = [0,0,0];
const rot = [0,0,0];

export const advanceBy = ([x,y,z]) => orient($world, [
  [
    (pos[0] += xc(x, z, rot[1])),
    (pos[1] += y),
    (pos[2] += yc(x, z, rot[1])),
  ],
  [0,0,0],
]);

export const rotateBy = ([dx, dy, dz]) => orient($camera, [
  [0,0,0],
  [
    (rot[0] += dy),
    (rot[1] += dx),
    (rot[2] += dz),
  ],
]);

export default {
  pos,
  rot,
  advanceBy,
  rotateBy,
}