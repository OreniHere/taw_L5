"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
class Rectangle {
    constructor(point1, point2, point3, point4) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
    }
    move(newX, newY) {
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
exports.Rectangle = Rectangle;
