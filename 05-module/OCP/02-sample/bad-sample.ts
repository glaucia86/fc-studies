/**
 * file: ocp/02-sample/good-sample.ts
 * description: file responsible for a sample of bad sample applied to OCP - Open Closed Principle
 * data: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Triangle {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }
}

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

function calculateAreaOfShapes(shapes: Array<Triangle | Rectangle | Circle>) {
  return shapes.reduce((areaTotal, shape) => {
    if (shape instanceof Triangle) {
      return areaTotal + shape.base * shape.height * 0.5
    }

    if (shape instanceof Rectangle) {
      return areaTotal + shape.width * shape.height
    }

    if (shape instanceof Circle) {
      return areaTotal + shape.radius * shape.radius * Math.PI
    }

    return areaTotal;
  }, 0)
}