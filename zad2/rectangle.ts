class Point {
    constructor(public x: number, public y: number) {}
  
    move(newX: number, newY: number) {
      this.x = newX;
      this.y = newY;
    }
  }
  
  export class Rectangle {
    constructor(
      public point1: Point,
      public point2: Point,
      public point3: Point,
      public point4: Point
    ) {}
  
    move(newX: number, newY: number) {
      this.point1.move(newX, newY);
      this.point2.move(newX, newY);
      this.point3.move(newX, newY);
      this.point4.move(newX, newY);
    }
  
    getArea() {
      const width = Math.abs(this.point2.x - this.point1.x);
      const height = Math.abs(this.point2.y - this.point1.y);
      return width * height;
    }
  }