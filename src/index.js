import './main.css';

import { mouse, keyboard } from './lib/input';
import { orient, orientAll } from './lib/geometry';

keyboard.bindEvents();
mouse.bindEvents();
keyboard.run();

orient($('.cube'), [
  [-250, -250, 0],
  [0,0,0],
]);

orientAll($$('.cube .face'), [
  [[-250,0,0], [0,90,0]],
  [[250,0,0], [0,90,0]],
  [[0,250,0], [90,0,0]],
  [[0,-250,0], [90,0,0]],
]);