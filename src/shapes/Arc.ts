import CanvasManager from '../CanvasManager';

type ArcProps = {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  anticlockwise?: boolean;
  color: string;
};

interface Arc {
  props: ArcProps;
  parent: CanvasManager;
  draw(): void;
}

class Arc {
  constructor(props: ArcProps, parent: CanvasManager) {
    this.props = {
      ...props,
      anticlockwise: props.anticlockwise || false,
    };
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

  get radius():number {
    return this.props.radius;
  }

  set radius(radius) {
    this.props.radius = radius;
    this.parent.redraw();
  }

  get startAngle():number {
    return this.props.startAngle;
  }

  set startAngle(startAngle) {
    this.props.startAngle = startAngle;
    this.parent.redraw();
  }

  get endAngle():number {
    return this.props.endAngle;
  }

  set endAngle(endAngle) {
    this.props.endAngle = endAngle;
    this.parent.redraw();
  }

  get anticlockwise():boolean {
    return this.props.anticlockwise!;
  }

  set anticlockwise(anticlockwise) {
    this.props.anticlockwise = anticlockwise;
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

    this.parent.context.beginPath();
    this.parent.context.arc(
      this.props.x,
      this.props.y,
      this.props.radius,
      this.props.startAngle,
      this.props.endAngle,
      this.props.anticlockwise,
    );
    this.parent.context.fill();
  }
}

export { Arc as default, ArcProps };
