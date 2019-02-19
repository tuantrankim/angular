var Point1 = /** @class */ (function () {
    //sort form of member and constructor together
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    //By default all members are public
    Point1.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point1.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(Point1.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0');
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point1;
}());
//let p: Point1 = new Point1();
var p = new Point1();
p.draw();
var p1 = new Point1(1, 2);
p1.draw();
var a = p1.X;
p1.X = 15;
p1.draw();
p1.X = -1;
