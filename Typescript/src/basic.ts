function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}

//let으로 선언할 때는 어떤 타입인지 알려주는 것이 좋다

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:';
const result = add(number1, number2, printResult, resultPhrase);