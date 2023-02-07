//union타입을 사용할 경우 검사를 해야할 수 있다. 
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    /*if (resultType === 'as-number') {
        return +result;//+는 number타입으로 만들어 준다.
    }*/
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine("Park", "angelina", 'as-string');
console.log(combinedNames);
