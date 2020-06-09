// @ts-nocheck

import SimpleCanvasManager from '../SimpleCanvasManager';

beforeEach(() => {
  document.body.innerHTML = '<canvas></canvas>';
});

describe.only('Rectangle', () => {
  it('Creates a rectangle', () => {
    const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

    expect(manager.layers.length).toBe(0);

    const rectangle1 = manager.addLayer(
      new manager.shapes.Rectangle({
        x: 20,
        y: 30,
        z: 40,
        width: 100,
        height: 100,
        color: 'red',
      }),
    );

    expect(manager.layers.length).toBe(1);
    expect(manager.layers[0]).toStrictEqual(rectangle1);
    expect(manager.layers[0].props).toStrictEqual({
      x: 20,
      y: 30,
      z: 40,
      width: 100,
      height: 100,
      color: 'red',
    });

    const rectangle2 = manager.addLayer(
      new manager.shapes.Rectangle({
        x: 50,
        y: 60,
        z: 70,
        width: 150,
        height: 250,
        color: 'blue',
      }),
    );

    expect(manager.layers.length).toBe(2);
    expect(manager.layers[1]).toStrictEqual(rectangle2);
    expect(manager.layers[1].props).toStrictEqual({
      x: 50,
      y: 60,
      z: 70,
      width: 150,
      height: 250,
      color: 'blue',
    });
  });

  it('Changes rectangle props', () => {
    const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

    const rectangle = manager.addLayer(
      new manager.shapes.Rectangle({
        x: 20,
        y: 20,
        z: 10,
        width: 100,
        height: 100,
        color: 'red',
      }),
    );

    rectangle.x = 60;
    expect(rectangle.x).toBe(60);
    expect(rectangle.props.x).toBe(60);

    rectangle.y = 80;
    expect(rectangle.y).toBe(80);
    expect(rectangle.props.y).toBe(80);

    rectangle.z = 20;
    expect(rectangle.z).toBe(20);
    expect(rectangle.props.z).toBe(20);

    rectangle.width = 120;
    expect(rectangle.width).toBe(120);
    expect(rectangle.props.width).toBe(120);

    rectangle.height = 140;
    expect(rectangle.height).toBe(140);
    expect(rectangle.props.height).toBe(140);

    rectangle.color = 'blue';
    expect(rectangle.color).toBe('blue');
    expect(rectangle.props.color).toBe('blue');
  });
});
