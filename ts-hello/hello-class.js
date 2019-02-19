var Point = /** @class */ (function () {
    // there's no multiple constructor in typescript
    // constructor(x: number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }
    //use optional parameters instead of multip constructors
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
//let p: Point = new Point();
var p = new Point();
p.draw();
var p1 = new Point(1, 2);
p1.draw();
