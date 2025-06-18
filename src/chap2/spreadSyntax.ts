/**
 * スプレット構文はプロパティのコピー
 * コピー元を変更しても、コピー先には影響なし
 */

const obj2 = {
    obj2Buzz: `bazz`,
    obj2Fizz: `fizz`
};

const obj3 = {
    obj3: `foo`,
    ...obj2
};

console.log(obj3);

const obj4 = {
    // obj2Buzz: `newBazz`, //...obj3によって上書きされるためコンパイルエラー
    ...obj3,
    obj2Buzz: `newBazz`,
};

console.log(obj4);