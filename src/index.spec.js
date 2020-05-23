const CanvasManager = require('./index');

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('CanvasElement', () => {
  it('Creates a CanvasManager with a canvas element correctly', () => {
    document.body.innerHTML = '<canvas></canvas>';
    const element = document.body.querySelector('canvas');

    const manager = new CanvasManager(element);

    expect(manager.canvas).toBe(element);
  });

  it('Throws error when CanvasManager is created with a non-canvas element', () => {
    document.body.innerHTML = '<div></div>';
    const element = document.body.querySelector('div');

    const createManager = (targetElement) => new CanvasManager(targetElement);

    expect(() => createManager(element)).toThrow(TypeError);
    expect(() => createManager(element)).toThrow('Class must be invoked with a Canvas element');
  });
});
