//@ts-nocheck
//BAD
class Rectangle {
  constructor(private width: number, private length: number) {}

  public setWidth(width: number) {
    this.width = width;
  }

  public setLength(length: number) {
    this.length = length;
  }

  public getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number) {
    // A square must maintain equal sides
    super.setWidth(width);
    super.setLength(width);
  }

  public setLength(length: number) {
    super.setWidth(length);
    super.setLength(length);
  }
}

const rect: Square = new Square(10);
rect.setWidth(20);
rect.getArea(); //200

//BETTER
interface Shape {
  getArea: () => number;
}

class Rectangle {
  widht: number;
  lenght: number;
}

class Square implements Shape {
  side: number;
  constructor(side) {
    this.side = side;
  }
  getArea() {
    return side * 2;
  }
}

const rect2 = new Square(10);
rect2.getArea();


