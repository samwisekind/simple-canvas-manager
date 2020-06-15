// @ts-nocheck

import SimpleCanvasManager from './SimpleCanvasManager';
import Rectangle from './shapes/Rectangle';
import Arc from './shapes/Arc';

beforeEach(() => {
  document.body.innerHTML = '<canvas></canvas>';
});

describe('SimpleCanvasManager', () => {
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

  it('Adds multiple shapes', () => {
    const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

    const shape1 = new Rectangle({
      x: 20,
      y: 20,
      z: 0,
      width: 100,
      height: 100,
      color: 'red',
    });

    manager.addLayer(shape1);

    const shape2 = manager.addLayer(
      new Arc({
        x: 20,
        y: 40,
        z: 1,
        radius: 50,
        startAngle: 0,
        endAngle: Math.PI,
        color: 'red',
      }),
    );

    expect(manager.layers).toStrictEqual([shape1, shape2]);
  });

  describe('z axis handling', () => {
    it('Adds shapes without z axis values', () => {
      const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

      const shape1 = new Rectangle({
        x: 20,
        y: 20,
        width: 100,
        height: 100,
        color: 'red',
      });

      manager.addLayer(shape1);

      expect(manager.layers).toStrictEqual([shape1]);
      expect(shape1.z).toBe(0);

      const shape2 = new Rectangle({
        x: 40,
        y: 40,
        width: 200,
        height: 200,
        color: 'blue',
      });

      manager.addLayer(shape2);

      expect(manager.layers).toStrictEqual([shape1, shape2]);
      expect(shape2.z).toBe(1);
    });

    it('Adds multiple shapes that are sorted correctly', () => {
      const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

      const shape1 = new Rectangle({
        x: 20,
        y: 20,
        z: 0,
        width: 100,
        height: 100,
        color: 'red',
      });

      manager.addLayer(shape1);

      expect(shape1.z).toBe(0);

      const shape2 = new Rectangle({
        x: 20,
        y: 20,
        z: 0,
        width: 200,
        height: 200,
        color: 'blue',
      });

      manager.addLayer(shape2);

      // shape2 has same z-axis value as shape1, so take place of it and move it 'up'
      expect(manager.layers).toStrictEqual([shape2, shape1]);
      expect(shape1.z).toBe(1);
      expect(shape2.z).toBe(0);

      const shape3 = new Rectangle({
        x: 20,
        y: 20,
        z: 1,
        width: 100,
        height: 100,
        color: 'red',
      });

      manager.addLayer(shape3);

      // shape3 has same z-axis value as shape1, so take place of it and move it 'up'
      expect(manager.layers).toStrictEqual([shape2, shape3, shape1]);
      expect(shape1.z).toBe(2);
      expect(shape2.z).toBe(0);
      expect(shape3.z).toBe(1);

      const shape4 = new Rectangle({
        x: 20,
        y: 20,
        z: 1,
        width: 100,
        height: 100,
        color: 'red',
      });

      manager.addLayer(shape4);

      // shape4 has same z-axis value as shape3, so take place of it and move shape3 and shape1 'up'
      expect(manager.layers).toStrictEqual([shape2, shape4, shape3, shape1]);
      expect(shape1.z).toBe(3);
      expect(shape2.z).toBe(0);
      expect(shape3.z).toBe(2);
      expect(shape4.z).toBe(1);

      const shape5 = new Rectangle({
        x: 20,
        y: 20,
        z: 100,
        width: 100,
        height: 100,
        color: 'red',
      });

      manager.addLayer(shape5);

      // Add layer to the end
      expect(manager.layers).toStrictEqual([shape2, shape4, shape3, shape1, shape5]);
      expect(shape1.z).toBe(3);
      expect(shape2.z).toBe(0);
      expect(shape3.z).toBe(2);
      expect(shape4.z).toBe(1);
      expect(shape5.z).toBe(4);

      const shape6 = new Rectangle({
        x: 20,
        y: 20,
        z: 0,
        width: 100,
        height: 100,
        color: 'red',
      });

      manager.addLayer(shape6);

      expect(manager.layers).toStrictEqual([shape6, shape2, shape4, shape3, shape1, shape5]);
      expect(shape1.z).toBe(4);
      expect(shape2.z).toBe(1);
      expect(shape3.z).toBe(3);
      expect(shape4.z).toBe(2);
      expect(shape5.z).toBe(5);
      expect(shape6.z).toBe(0);
    });
  });

  describe('Error handling', () => {
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
  });
});
