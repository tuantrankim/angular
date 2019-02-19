var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var logSomething = function () { return console.log('do some thing'); };
log('log');
doLog('doLog');
logSomething();
var drawPointAt = function (x, y) {
    // ...
};
// inline notifation
var drawPoint2 = function (point) {
    //...
};
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
