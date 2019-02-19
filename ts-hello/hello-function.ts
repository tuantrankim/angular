let log = function(message){
    console.log(message);
}

let doLog = (message) => console.log(message);
let logSomething = ()=>console.log('do some thing');

log('log');

doLog('doLog');

logSomething();

let drawPointAt = (x,y) =>{
    // ...
}



// inline notifation
let drawPoint2 = (point: {x:number, y: number}) => {
    //...
}

// using interface
interface Point {
    x: number,
    y: number
}
let drawPoint = (point) =>{
    //...
}

drawPoint({
    x:1,
    y:2
})