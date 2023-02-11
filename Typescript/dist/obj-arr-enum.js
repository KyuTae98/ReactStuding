"use strict";
/*const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]//튜플
} = {
    name: 'KyuTae',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

person.role = [1, "admin"];
let newArray: any[];
newArray = [1, 2, 3, "asdasd"]
person["phone"] = 123;
console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby)
}*/
//튜플 (자바스크립트에는 없고 타입스크립트에만 있다)
//튜플은 정해진 길이의 배열이다. 또, 그안의 요소는 정해진 타입을 따라야 한다.
//enum타입 중괄호 안에 넣는 타임 열거 목록을 제공 숫자나 문자열 할당가능
/*
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'KyuTae',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
if (person.role === Role.AUTHOR) {
    console.log("id author");
}
