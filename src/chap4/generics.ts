function repeat<T>(element: T, length: number): T[]{
    const result: T[] = [];
    for(let i = 0; i < length; i++){
        result.push(element);
    }

    return result;
}
console.log(repeat<string>("a", 4));
console.log(repeat<number>(777, 7));


/** function expression */
const exRepeat = function<T>(element: T, length: number): T[]{
    const result: T[] = [];
    for(let i  = 0; i < length; i++){
        result.push(element);
    }

    return result;
}


/** arrow function expression */
const arRepeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for(let i = 0; i < length; i++){
        result.push(element);
    }

    return result;
}


/** method notation */
const utils = {
    repeat<T>(element: T, length: number): T[] {
        const result: T[] = [];
        for(let i = 0; i < length; i++){
            result.push(element);
        }

        return result;
    }
}


/** Multiple type argument by arrow function*/
const muRepeat = <T extends {name: string}>(element: T, length: number): T[] => {
    const result: T[] = [];
    for(let i = 0; i < length; i++){
        result.push(element);
    }

    return result;
}

const Mr = {
    name: "Jon",
    age: 20
}

const MrAge = {
    name: "name"
}

console.log(muRepeat(Mr, 4));
console.log(muRepeat(MrAge, 4));