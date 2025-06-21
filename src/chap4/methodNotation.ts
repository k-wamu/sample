const meObj = {
    //メソッド記法
    double(num: number): number {
        return num * 2;
    },
    //通常の記法＋アロー関数
    double2: (num: number): number => num * 2,

};
console.log(meObj.double(4));
console.log(meObj.double2(4));

/** 可変長引数 */
const variableSum = (...args: number[]): number => {
    let n = 0;
    for(const num of args){
        n += num;
    }

    return n;
}
console.log(variableSum(1, 2, 3, 4));

/** スプレット構文 */
const numbers = [1, 3, 5];
console.log("スプレット構文 : " + variableSum(...numbers)); //(1, 3, 5)と同等

const sum2 = (a: number, b: number, c: number): number => a + b + c;
// console.log(sum2(...numbers)); //要素数不明の配列は、可変長引数に渡す必要がある

const nums: [number, number, number] = [1, 3, 5];
console.log(sum2(...nums));//固定長配列の場合可能