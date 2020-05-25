import CanvasManager from '../CanvasManager';

class Shape {
  constructor(props, parent) {
    this.props = props;
    this.parent = parent;
  }

  get x() {
    return this.props.x;
  }

  set x(x) {
    this.props.x = x;
    this.parent.redraw();
  }

  get y() {
    return this.props.y;
  }

  set y(y) {
    this.props.y = y;
    this.parent.redraw();
  }

  get width() {
    return this.props.width;
  }

  set width(width) {
    this.props.width = width;
    this.parent.redraw();
  }

  get height() {
    return this.props.height;
  }

  set height(height) {
    this.props.height = height;
    this.parent.redraw();
  }
};

interface Shape {
  props: {
    x: number,
    y: number,
    width: number,
    height: number,
  }
  parent: CanvasManager;
}

export default Shape;
