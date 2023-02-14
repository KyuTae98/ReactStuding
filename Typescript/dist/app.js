"use strict";
let userInput; //어떤 타입을 넣어도 상관없다. 
let userName;
//useName = userInput error unknown타입은 string에 넣을 수 없다. any는 넣을 수 있다. 
if (typeof userInput === 'string') {
    userName = userInput;
}
/*
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}
//never은 아무것도 반환하지 않는다. 대신 스크립트 끼리 충돌 할 수 있다.

let re = generateError('An error occurred!', 500);
console.log(re)
//타입스크립트 컴파일 하기.
//1. watch모드 이 방법은 원하는 파일에 --w 또는 --watch를 붙여서 tsc한다.
//장점: 편하고 간편하다.  단점: 하나의 파일만 해당해 큰 프로젝트에서는 효율적이지 않다.
*/
const button = document.querySelector("button");
function clickHandler(message) {
    console.log('Clicked!' + message);
}
let buttonMsg = button.innerText;
const Max = {
    name: "Max",
    age: 30,
};
const new_max = Max;
const hobbies = 'hobbies';
Max[hobbies] = "ski";
console.log(new_max);
button.addEventListener("click", clickHandler.bind(null, buttonMsg));
