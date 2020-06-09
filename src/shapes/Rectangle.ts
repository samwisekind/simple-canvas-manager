import SimpleCanvasManager from '../SimpleCanvasManager';

type RectangleProps = {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  color: string;
};

interface Rectangle {
  props: RectangleProps;
  parent: null|SimpleCanvasManager;
  draw(): void;
}

class Rectangle {
  constructor(props: RectangleProps) {
    this.props = props;

    this.parent = null;
  }

  setParent(parent: SimpleCanvasManager) {
    this.parent = parent;
  }

  get x(): number {
    return this.props.x;
  }

  set x(x: number) {
    this.props.x = x;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get y(): number {
    return this.props.y;
  }

  set y(y: number) {
    this.props.y = y;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get z(): number {
    return this.props.z;
  }

  set z(z: number) {
    this.props.z = z;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get width(): number {
    return this.props.width;
  }

  set width(width: number) {
    this.props.width = width;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get height(): number {
    return this.props.height;
  }

  set height(height: number) {
    this.props.height = height;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get color(): string {
    return this.props.color;
  }

  set color(color: string) {
    this.props.color = color;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  draw() {
    if (this.parent instanceof SimpleCanvasManager) {
      this.parent.context.fillStyle = this.props.color;
      this.parent.context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
    }
  }
}

export default Rectangle;
