import SimpleCanvasManager from '../SimpleCanvasManager';

type ArcProps = {
  x: number;
  y: number;
  z: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  anticlockwise?: boolean;
  color: string;
};

interface Arc {
  props: ArcProps;
  parent: null|SimpleCanvasManager;
  draw(): void;
}

class Arc {
  constructor(props: ArcProps) {
    this.props = {
      ...props,
      anticlockwise: props.anticlockwise || false,
    };

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

  get radius(): number {
    return this.props.radius;
  }

  set radius(radius: number) {
    this.props.radius = radius;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get startAngle(): number {
    return this.props.startAngle;
  }

  set startAngle(startAngle: number) {
    this.props.startAngle = startAngle;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get endAngle(): number {
    return this.props.endAngle;
  }

  set endAngle(endAngle: number) {
    this.props.endAngle = endAngle;
    if (this.parent instanceof SimpleCanvasManager) this.parent.redraw();
  }

  get anticlockwise(): boolean {
    return this.props.anticlockwise!;
  }

  set anticlockwise(anticlockwise: boolean) {
    this.props.anticlockwise = anticlockwise;
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
}

export default Arc;
