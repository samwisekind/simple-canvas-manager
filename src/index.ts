class CanvasManager {
  constructor(element: HTMLCanvasElement) {
    if (element instanceof HTMLElement === false) {
      throw TypeError(`CanvasManager must be created with an HTML element, type provided is: ${typeof element}`);
    } else if (element instanceof HTMLCanvasElement === false) {
      throw TypeError(`CanvasManager must be created with an HTML Canvas element, type provided is: ${element.nodeName.toLowerCase()}`);
    }

    this.element = element;
    this.canvas = this.element.getContext('2d');
  }
}

interface CanvasManager {
  element: HTMLCanvasElement;
  canvas: CanvasRenderingContext2D | null;
}

interface Window {
  CanvasManager: any;
}

interface Module {
  CanvasManager: any;
}

if (module?.exports) module.exports = CanvasManager;
if (window?.CanvasManager) window.CanvasManager = CanvasManager;
