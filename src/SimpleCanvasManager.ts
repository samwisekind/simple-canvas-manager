import Rectangle, { RectangleProps } from './shapes/Rectangle';
import Arc, { ArcProps } from './shapes/Arc';

interface SimpleCanvasManager {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  items: Array<Rectangle|Arc>;
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

    this.items = [];

    return this;
  }

  redraw():SimpleCanvasManager {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
    this.items.forEach((item) => item.draw());

    return this;
  }

  addRectangle(props: RectangleProps):Rectangle {
    const shape = new Rectangle(props, this);
    this.items.push(shape);
    this.redraw();

    return shape;
  }


  addArc(props: ArcProps):Arc {
    const shape = new Arc(props, this);
    this.items.push(shape);
    this.redraw();

    return shape;
  }
}

export default SimpleCanvasManager;
