class Point1 {
    //sort form of member and constructor together
    constructor(private x?: number, private y?: number) {
    }

    //By default all members are public
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point1) {
        //...
    }

    get X() {
        return this.x;
    }

    set X(value){
        if(value < 0) throw new Error('Value cannot be less than 0');
        this.x = value;
    }
}

//let p: Point1 = new Point1();
let p = new Point1();
p.draw();

let p1 = new Point1(1, 2);
p1.draw();


let a = p1.X;
p1.X = 15;
p1.draw();

p1.X = -1;