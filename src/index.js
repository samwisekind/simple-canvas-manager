class CanvasManager {
  constructor(element) {
    if (element instanceof HTMLElement === false) {
      throw TypeError(`CanvasManager must be created with an HTML element, type provided is: ${typeof element}`);
    } else if (element instanceof HTMLCanvasElement === false) {
      throw TypeError(`CanvasManager must be created with an HTML Canvas element, type provided is: ${element.nodeName.toLowerCase()}`);
    }

    this.canvas = element;
  }
}

module.exports = CanvasManager;
if (window) window.CanvasManager = CanvasManager;
