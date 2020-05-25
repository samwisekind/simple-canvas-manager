// @ts-nocheck

import SimpleCanvasManager from '../SimpleCanvasManager';

beforeEach(() => {
  document.body.innerHTML = '<canvas></canvas>';
});

describe('Arc', () => {
  it('Creates an arc', () => {
    const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));

    expect(manager.items.length).toBe(0);

    const arc1 = manager.addArc({
      x: 20,
      y: 20,
      radius: 100,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: true,
      color: 'red',
    });
    expect(manager.items.length).toBe(1);
    expect(manager.items[0]).toStrictEqual(arc1);
    expect(manager.items[0].props).toStrictEqual({
      x: 20,
      y: 20,
      radius: 100,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: true,
      color: 'red',
    });

    const arc2 = manager.addArc({
      x: 40,
      y: 40,
      radius: 200,
      startAngle: Math.PI,
      endAngle: Math.PI * 2,
      color: 'blue',
    });
    expect(manager.items.length).toBe(2);
    expect(manager.items[1]).toStrictEqual(arc2);
    expect(manager.items[1].props).toStrictEqual({
      x: 40,
      y: 40,
      radius: 200,
      startAngle: Math.PI,
      endAngle: Math.PI * 2,
      anticlockwise: false, // Testing for default value
      color: 'blue',
    });
  });

  it('Changes arc props', () => {
    const manager = new SimpleCanvasManager(document.body.querySelector('canvas'));
    const arc = manager.addArc({
      x: 20,
      y: 40,
      radius: 50,
      startAngle: 0,
      endAngle: Math.PI,
      anticlockwise: false,
      color: 'red',
    });

    arc.x = 60;
    expect(arc.x).toBe(60);
    expect(arc.props.x).toBe(60);

    arc.y = 80;
    expect(arc.y).toBe(80);
    expect(arc.props.y).toBe(80);

    arc.radius = 100;
    expect(arc.radius).toBe(100);
    expect(arc.props.radius).toBe(100);

    arc.startAngle = Math.PI;
    expect(arc.startAngle).toBe(Math.PI);
    expect(arc.props.startAngle).toBe(Math.PI);

    arc.endAngle = Math.PI * 2;
    expect(arc.endAngle).toBe(Math.PI * 2);
    expect(arc.props.endAngle).toBe(Math.PI * 2);

    arc.anticlockwise = true;
    expect(arc.anticlockwise).toBe(true);
    expect(arc.props.anticlockwise).toBe(true);

    arc.color = 'blue';
    expect(arc.color).toBe('blue');
    expect(arc.props.color).toBe('blue');
  });
});
