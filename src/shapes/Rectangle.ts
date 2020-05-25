import Shape from './Shape';

class Rectangle extends Shape {
  constructor(props, parent) {
    super(props, parent);

    this.draw();
  }

  get color() {
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

interface Rectangle extends Shape {
  props: {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    color: string;
  }
  draw(): void;
}

export default Rectangle;
