type MyFunc = {
    isused?: boolean,
    (arg: number): void
};

const double: MyFunc = (arg: number): void => {
    console.log(arg * 2);
};

double.isused = true;//doubleはisusedプロパティを持つ
console.log(double.isused);
double(4);


/** オーバーロード？ */
type SwapFunc = {
    (args: string): number;
    (args: number): boolean;
}


/** 返り値の型による部分型関係  */
type callHasName = {
    name: string,
}

type HasNameAndAge = {
    name: string,
    age: number
}

const fromAge = (age: number): HasNameAndAge => ({
    name: "John Smith",
    age
})

const f: (age: number) => callHasName = fromAge;
const callobj: callHasName = f(30);
console.log(callobj);


/** 引数の型による部分型関係 */
const showName = (obj: callHasName) => console.log(obj.name);
const g: (obj: HasNameAndAge) => void = showName;

g({
    name: "uhyo",
    age: 20
});


/** Subtype relation by number of arguments */
type UnaryFunc = (args: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const subDouble: UnaryFunc = args => args * 2;
const add: BinaryFunc = (left, right) => left + right;

//BinaryFunc <: UnaryFunc
const bin: BinaryFunc = subDouble;
console.log(bin(2, 3));