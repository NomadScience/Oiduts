import { advanceBy, rotateBy } from './world';

const eventable = {
  bindEvents() {
    for (let event in this.events) {
      if (event[0] !== '_') {
        document.addEventListener(event, this.events[event]);
      }
    }
  },
};

const pressable = (down, up, code) => {
  const _pressed = {};
  const event = {
    [down]: e => _pressed[e[code]] = _pressed.any = true,
    [up]: e => _pressed[e[code]] = _pressed.any = false,
    _pressed,
  }
  return event;
}

const mouse = {
  ...eventable,
  events: {
    ...pressable('mousedown', 'mouseup', 'which'),
    mousemove: ({ movementX, movementY }) => {
      if (!mouse.events._pressed.any) return;
      rotateBy([movementX, -movementY, 0]);
    },
  },
};

const keyboard = {
  ...eventable,
  events: { ...pressable('keydown', 'keyup', 'code') },
  actions: {
    KeyW: () => advanceBy([0,0,-30]),
    KeyS: () => advanceBy([0,0,30]),
    KeyA: () => advanceBy([30,0,0]),
    KeyD: () => advanceBy([-30,0,0]),
    ShiftLeft: () => advanceBy([0,-30,0]),
    ShiftRight: () => advanceBy([0,-30,0]),
    Space: () => advanceBy([0,30,0]),
  },
  run() {
    for (let pressed in this.events._pressed) {
      this.events._pressed[pressed] && this.actions[pressed] && this.actions[pressed]();
    }
    window.requestAnimationFrame(() => this.run());
  },
};

export { keyboard, mouse };