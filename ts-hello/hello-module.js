"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//use export so other file can see this class
//each file is a module, and it has its own scope
//main-module will import this class
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
