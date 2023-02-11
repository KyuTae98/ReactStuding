function plus(n1: number, n2: number): number//함수의 반환 타입
{
    return n1 + n2;
}


//function에는 void타입이 있다. 
function printLog(num: any): void {
    console.log('Result ' + num)
}

printLog(plus(5, 12))
//typescript에는 undefinend도 유효한 타입이다. 

//함수 자체에도 타입이 있다. 

let combineValues: (a: number, b: number) => number;//arrow 함수를 이용해서 사용 가능
combineValues = plus;
//combineValues = printLog; //이것도 가능하지만 함수를 쓸때 헷갈릴 수 있음

function addAndHandle(n1: number, n2: number, cb: (num: number) => void)//콜백 함수를 사용하면서 반환에 void를 사용하면 모든 결과를 무시한다. return이 되기는 함
{
    const result = n1 + n2;
    console.log(cb(result))
}
addAndHandle(10, 20, (result) => {
    console.log(result)
    return result + 1
})