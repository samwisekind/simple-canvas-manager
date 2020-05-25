import CanvasManager from '../CanvasManager';

type RectangleProps = {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  color: string;
}

interface Rectangle {
  props: RectangleProps;
  parent: CanvasManager;
  draw(): void;
}

class Rectangle {
  constructor(props: RectangleProps, parent: CanvasManager) {
    this.props = props;
    this.parent = parent;

    this.draw();
  }

  get x():number {
    return this.props.x;
  }

  set x(x) {
    this.props.x = x;
    this.parent.redraw();
  }

  get y():number {
    return this.props.y;
  }

  set y(y) {
    this.props.y = y;
    this.parent.redraw();
  }

  get width():number {
    return this.props.width;
  }

  set width(width) {
    this.props.width = width;
    this.parent.redraw();
  }

  get height():number {
    return this.props.height;
  }

  set height(height) {
    this.props.height = height;
    this.parent.redraw();
  }

  get color():string {
    return this.props.color;
  }

  set color(color) {
    this.props.color = color;
    this.parent.redraw();
  }

  draw() {
    this.parent.context.fillStyle = this.props.color;
    this.parent.context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
  }
}

export { Rectangle as default, RectangleProps };
