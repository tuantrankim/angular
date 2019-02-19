class Point{
    x: number;
    y: number;
    // there's no multiple constructor in typescript
    // constructor(x: number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }

    //use optional parameters instead of multip constructors
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    //By default all members are public
    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point){
        //...
    }
}

//let p: Point = new Point();
let p = new Point();
p.draw();

let p1 = new Point(1,2);
p1.draw();