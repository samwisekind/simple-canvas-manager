// @ts-nocheck

import SimpleCanvasManager from './SimpleCanvasManager';
import Rectangle from './shapes/Rectangle';
import Arc from './shapes/Arc';

beforeEach(() => {
  document.body.innerHTML = '<canvas></canvas>';
});

describe('CanvasElement', () => {
  it('Creates a SimpleCanvasManager with a canvas element correctly', () => {
    const element = document.body.querySelector('canvas');

    const manager = new SimpleCanvasManager(element);

    expect(manager.element).toStrictEqual(element);
    expect(manager.context).toStrictEqual(element.getContext('2d'));

    expect(window.SimpleCanvasManager).toStrictEqual({
      Manager: SimpleCanvasManager,
      Shapes: { Rectangle, Arc },
    });
  });

  it('Throws a TypeError when SimpleCanvasManager is created with a non-HTML type', () => {
    const createManager = () => new SimpleCanvasManager(123);

    expect(() => createManager()).toThrow(TypeError);
    expect(() => createManager()).toThrow('SimpleCanvasManager must be created with an HTML element, type provided is: number');
  });

  it('Throws a TypeError when SimpleCanvasManager is created with a non-canvas HTML element', () => {
    document.body.innerHTML = '<div></div>';

    const element = document.body.querySelector('div');

    const createManager = (targetElement) => new SimpleCanvasManager(targetElement);

    expect(() => createManager(element)).toThrow(TypeError);
    expect(() => createManager(element)).toThrow('SimpleCanvasManager must be created with an HTML Canvas element, type provided is: div');
  });

  it('Adds multiple shapes', () => {
    const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

    const shape1 = new manager.shapes.Rectangle({
      x: 20,
      y: 20,
      width: 100,
      height: 100,
      color: 'red',
    });

    manager.addLayer(shape1);

    const shape2 = manager.addLayer(
      new manager.shapes.Arc({
        x: 20,
        y: 40,
        radius: 50,
        startAngle: 0,
        endAngle: Math.PI,
        color: 'red',
      }),
    );

    expect(manager.layers).toStrictEqual([shape1, shape2]);
  });
});
