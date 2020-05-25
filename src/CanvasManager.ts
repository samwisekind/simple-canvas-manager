import Rectangle from './shapes/Rectangle';

class CanvasManager {
  constructor(element) {
    if (element instanceof HTMLElement === false) {
      throw TypeError(`CanvasManager must be created with an HTML element, type provided is: ${typeof element}`);
    } else if (element instanceof HTMLCanvasElement === false) {
      throw TypeError(`CanvasManager must be created with an HTML Canvas element, type provided is: ${element.nodeName.toLowerCase()}`);
    }

    this.element = element;
    this.context = this.element.getContext('2d');

    this.items = [];

    return this;
  }

  redraw() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
    this.items.forEach((item) => item.draw());

    return this;
  }

  addRectangle(props) {
    const shape = new Rectangle(this, props);
    this.items.push(shape);
    this.redraw();

    return shape;
  }
}

interface CanvasManager {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  items: Array<Rectangle>;
}

export default CanvasManager;
