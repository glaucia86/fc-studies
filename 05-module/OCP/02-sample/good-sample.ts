/**
 * file: ocp/02-sample/good-sample.ts
 * description: file responsible for a sample of good sample applied to OCP - Open Closed Principle
 * data: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

interface ShapeAreaInterface {
  getArea(): number;
}

class Triangle implements ShapeAreaInterface {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  public getArea() {
    return this.base * this.height * 0.5
  }
}

class Rectangle implements ShapeAreaInterface {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height
  }
}

class Circle implements ShapeAreaInterface {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI
  }
}

function calculateAreaOfShapes(shapes: ShapeAreaInterface[]) {
  return shapes.reduce((areaTotal, shape) => {
    return areaTotal + shape.getArea();
  }, 0)
}