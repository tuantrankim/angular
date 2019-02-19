//use export so other file can see this class
//each file is a module, and it has its own scope
//main-module will import this class
export class Point{
    constructor(private x?: number, private y?: number){
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}