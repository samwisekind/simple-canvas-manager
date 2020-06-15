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

  redraw(): SimpleCanvasManager {
    this.reorder();

    this.context.clearRect(0, 0, this.element.width, this.element.height);
    this.layers.forEach((item) => item.draw());

    return this;
  }

  reorder(): SimpleCanvasManager {
    // Change prop directly to prevent redrawing recursive loop
    this.layers.forEach((layer, index) => { layer.props.z = index; });

    return this;
  }

  addLayer(shape: Rectangle|Arc): Rectangle|Arc {
    shape.parent = this;

    // If new layer does not have a z axis value (except 0 which is falsy), add it to the 'top'
    if (!shape.z && shape.z !== 0) {
      if (this.layers.length > 0) {
        shape.props.z = this.layers[this.layers.length - 1].z + 1;
      } else {
        shape.props.z = 0;
      }
    }

    // Insert at position
    this.layers.splice(shape.z, 0, shape);

    // To-do: Only redraw if new layer is not at 'top', otherwise draw only that new layer
    this.redraw();

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
