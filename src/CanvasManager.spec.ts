// @ts-nocheck

import CanvasManager from './CanvasManager';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('CanvasElement', () => {
  it('Creates a CanvasManager with a canvas element correctly', () => {
    document.body.innerHTML = '<canvas></canvas>';
    const element = document.body.querySelector('canvas');

    const manager = new CanvasManager(element);

    expect(manager.element).toStrictEqual(element);
    expect(manager.context).toStrictEqual(element.getContext('2d'));
  });

  it('Throws a TypeError when CanvasManager is created with a non-HTML type', () => {
    const createManager = () => new CanvasManager(123);

    expect(() => createManager()).toThrow(TypeError);
    expect(() => createManager()).toThrow('CanvasManager must be created with an HTML element, type provided is: number');
  });

  it('Throws a TypeError when CanvasManager is created with a non-canvas HTML element', () => {
    document.body.innerHTML = '<div></div>';
    const element = document.body.querySelector('div');

    const createManager = (targetElement) => new CanvasManager(targetElement);

    expect(() => createManager(element)).toThrow(TypeError);
    expect(() => createManager(element)).toThrow('CanvasManager must be created with an HTML Canvas element, type provided is: div');
  });

  it('Adds multiple shapes', () => {
    document.body.innerHTML = '<canvas></canvas>';
    const element = document.body.querySelector('canvas');

    const manager = new CanvasManager(element);

    const shape1 = manager.addRectangle({
      x: 20,
      y: 20,
      width: 100,
      height: 100,
      color: 'red',
    });

    const shape2 = manager.addArc({
      x: 20,
      y: 40,
      radius: 50,
      startAngle: 0,
      endAngle: Math.PI,
      color: 'red',
    });

    expect(manager.items).toStrictEqual([shape1, shape2]);
  });
});
