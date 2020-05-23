class CanvasManager {
  constructor(element) {
    if (element instanceof HTMLCanvasElement === false) {
      throw TypeError('Class must be invoked with a Canvas element');
    }

    this.canvas = element;
  }
}

module.exports = CanvasManager;
if (window) window.CanvasManager = CanvasManager;
