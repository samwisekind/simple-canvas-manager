import SimpleCanvasManager from '../SimpleCanvasManager';

type RectangleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};

interface Rectangle {
  props: RectangleProps;
  parent: SimpleCanvasManager;
  draw(): void;
}

class Rectangle {
  constructor(props: RectangleProps, parent: SimpleCanvasManager) {
    this.props = props;
    this.parent = parent;

    this.draw();
  }

  get x():number {
    return this.props.x;
  }

  set x(x: number) {
    this.props.x = x;
    this.parent.redraw();
  }

  get y():number {
    return this.props.y;
  }

  set y(y: number) {
    this.props.y = y;
    this.parent.redraw();
  }

  get width():number {
    return this.props.width;
  }

  set width(width: number) {
    this.props.width = width;
    this.parent.redraw();
  }

  get height():number {
    return this.props.height;
  }

  set height(height: number) {
    this.props.height = height;
    this.parent.redraw();
  }

  get color():string {
    return this.props.color;
  }

  set color(color: string) {
    this.props.color = color;
    this.parent.redraw();
  }

  draw() {
    this.parent.context.fillStyle = this.props.color;
    this.parent.context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
  }
}

export { Rectangle as default, RectangleProps };
