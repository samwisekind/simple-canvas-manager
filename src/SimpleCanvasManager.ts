import Rectangle from './shapes/Rectangle';
import Arc from './shapes/Arc';

interface SimpleCanvasManager {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  manager: SimpleCanvasManager;
  shapes: {
    Rectangle: typeof Rectangle,
    Arc: typeof Arc,
  };
  layers: Array<Rectangle|Arc>;
}

class SimpleCanvasManager {
  constructor(element: HTMLCanvasElement) {
    if (element instanceof HTMLElement === false) {
      throw TypeError(`SimpleCanvasManager must be created with an HTML element, type provided is: ${typeof element}`);
    } else if (element instanceof HTMLCanvasElement === false) {
      throw TypeError(`SimpleCanvasManager must be created with an HTML Canvas element, type provided is: ${element.nodeName.toLowerCase()}`);
    }

    this.element = element;
    this.context = <CanvasRenderingContext2D> this.element.getContext('2d');
    this.manager = this;

    this.shapes = {
      Rectangle,
      Arc,
    };

    this.layers = [];

    return this;
  }

  redraw():SimpleCanvasManager {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
    this.layers.forEach((item) => item.draw());

    return this;
  }

  addLayer(shape: Rectangle|Arc): Rectangle|Arc {
    shape.setParent(this);
    shape.draw();

    this.layers.push(shape);

    return shape;
  }
}

export default SimpleCanvasManager;

declare global {
  interface Window {
    SimpleCanvasManager: {
      Manager: typeof SimpleCanvasManager,
      Shapes: {
        Rectangle: typeof Rectangle,
        Arc: typeof Arc,
      }
    }
  }
}

/* istanbul ignore else */
if (!window?.SimpleCanvasManager) {
  window.SimpleCanvasManager = {
    Manager: SimpleCanvasManager,
    Shapes: { Rectangle, Arc },
  };
}
