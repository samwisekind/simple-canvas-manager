class Shape {
  constructor(context, manager, props) {
    this.context = context;
    this.manager = manager;

    this.props = props;
  }

  get x() {
    return this.props.x;
  }

  set x(x) {
    this.props.x = x;
    this.manager.redraw();
  }

  get y() {
    return this.props.y;
  }

  set y(y) {
    this.props.y = y;
    this.manager.redraw();
  }

  get width() {
    return this.props.width;
  }

  set width(width) {
    this.props.width = width;
    this.manager.redraw();
  }

  get height() {
    return this.props.height;
  }

  set height(height) {
    this.props.height = height;
    this.manager.redraw();
  }
}

interface Shape {
  context: CanvasRenderingContext2D | null;
  manager: CanvasManager;
  props: {
    x: number,
    y: number,
    width: number,
    height: number,
  }
}

class Rectangle extends Shape {
  constructor(context, manager, props) {
    super(context, manager, props);

    this.props = props;

    this.draw();
  }

  get color() {
    return this.props.color;
  }

  set color(color) {
    this.props.color = color;
    this.manager.redraw();
  }

  draw() {
    this.context.fillStyle = this.props.color;
    this.context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
  }
}

interface Rectangle {
  props: {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    color: string;
  }
}

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

  addRectangle(options) {
    const shape = new Rectangle(this.context, this, options);
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

interface Window {
  CanvasManager: any;
}

interface Module {
  CanvasManager: any;
}

if (module?.exports) module.exports = CanvasManager;
if (window?.CanvasManager) window.CanvasManager = CanvasManager;
