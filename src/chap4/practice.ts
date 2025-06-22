// for(let i = 1; i <= 100; i++){
//     const message = getFizzBuzzString(i);
//     console.log(message);
// }

for(const i of sequence(1, 100)){
    const message = getFizzBuzzString(i);
    console.log(message);    
}


function getFizzBuzzString(num: number): string {
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz";

    }else if(num % 3 === 0){
        return "Fizz";

    }else if(num % 5 === 0){
        return "Buzz";

    }else{
        return String(num);
    }
}

function sequence(start: number, end: number): number[] {
    const result: number[] = [];
    for(let i = start; i <= end; i++){
        result.push(i);
    }

    return result;
}



/** callback */
function callMap(array: number[], callback: (num: number) => number ): number[]{
    const result: number[] = [];
    for(const arr of array){
        const arRe: number = callback(arr);
        result.push(arRe);
    }

    return result;
}

const callData = [1, 1, 2, 3, 4, 8, 13];
const callResult: number[] = callMap(callData, (x) => x * 10);
console.log(callResult);


/** generics */
function geMap<T, E>(array: T[], callback: (n: T) => E): E[] {
    const result: E[] = [];
    for(const i of array){
        result.push(callback(i));
    }

    return result;
}

const geData = [1, -3, -2, 8, 0, -1];

const geResult: boolean[] = geMap(geData, (x) => x >= 0);
console.log(geResult);