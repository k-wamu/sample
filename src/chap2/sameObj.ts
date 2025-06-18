// /* 同一オブジェクト */
// const foo = {
//     num: 100
// }
// const bar = foo;

// /* 同値オブジェクト */
// const fizz = {
//     num: 100
// }
// const bazz = {
//     ...fizz
// }

const foo = {
    num: 123
}

const bar = {
    foo,
    age: 20
}

const baz = {
    ...bar
}

console.log(baz);
baz.foo.num = 0;
console.log(baz);
console.log(bar);

/**
 * オブジェクト比較
 * 同一：True
 * 同値：False
 * 
 * 同値性の比較は標準方法はない
 * 
 * オブジェクトとオブジェクト以外の比較はFalse
 */
const fiz = foo;
const fizz = {
    num: 0
}
console.log(foo === fiz);
console.log(fiz === fizz);