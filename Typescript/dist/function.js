"use strict";
function plus(n1, n2) {
    return n1 + n2;
}
//function에는 void타입이 있다. 
function printLog(num) {
    console.log('Result ' + num);
}
printLog(plus(5, 12));
//typescript에는 undefinend도 유효한 타입이다. 
//함수 자체에도 타입이 있다. 
let combineValues; //arrow 함수를 이용해서 사용 가능
combineValues = plus;
//combineValues = printLog; //이것도 가능하지만 함수를 쓸때 헷갈릴 수 있음
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    console.log(cb(result));
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result + 1;
});
