import CanvasManager from '../CanvasManager.ts';

beforeEach(() => {
  document.body.innerHTML = '<canvas></canvas>';
});

describe('Rectangle', () => {
  it('Creates a rectangle', () => {
    const manager = new CanvasManager(document.body.querySelector('canvas'));

    expect(manager.items.length).toBe(0);

    const rectangle1 = manager.addRectangle({
      x: 20,
      y: 20,
      width: 100,
      height: 100,
      color: 'red',
    });
    expect(manager.items.length).toBe(1);
    expect(manager.items[0]).toStrictEqual(rectangle1);

    const rectangle2 = manager.addRectangle({
      x: 40,
      y: 40,
      width: 150,
      height: 250,
      color: 'blue',
    });
    expect(manager.items.length).toBe(2);
    expect(manager.items[1]).toStrictEqual(rectangle2);
  });

  it('Changes rectangle props', () => {
    const manager = new CanvasManager(document.body.querySelector('canvas'));
    const rectangle = manager.addRectangle({
      x: 20,
      y: 20,
      width: 100,
      height: 100,
      color: 'red',
    });

    rectangle.x = 60;
    expect(rectangle.x).toBe(60);
    expect(rectangle.props.x).toBe(60);

    rectangle.y = 80;
    expect(rectangle.y).toBe(80);
    expect(rectangle.props.y).toBe(80);

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
