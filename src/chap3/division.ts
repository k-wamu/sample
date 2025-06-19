const divObj = {
    divfoo: "foo",
    divbar: "bar"
}
/**　分割代入 */
// const {divfoo, divbar} = divObj;
/**　従来の書き方 */
// const foo = divObj.foo;
// const bar = divObj.bar;

/** 別名で取得 */
const {divfoo, divbar: newBar} = divObj;


/** ネスト */
const nested = {
    num: 123,
    obj: {
        foo: "hello",
        bar: "bar"
    }
}

const {num, obj: {foo: nestedFoo}} = nested;
console.log(num);
console.log(nestedFoo);


/** 配列の分割代入 */
const arr = [1, 3, 4, 5, 6, 7, 7];

const [one, two, three] = arr;
console.log(one + " " + two + " " + three);


/** 配列パターンのネスト */
// const {arr: [first]} = obj;
// const [{name}] = arr;


/** デフォルト値 */
type divObj2 = {
    bar?: number
}

const divobj3: divObj2 = {};
const divobj4: divObj2 = {
    bar: 123
}

const {bar: divObj2Bar = 0} = divobj3;
const {bar: divObj2Bar2 = 0} = divobj4;

console.log(divObj2Bar);
console.log(divObj2Bar2);


/** restパターン */
const restObj = {
    foo: 12345,
    bar: "string",
    baz: false,
};

const {foo: restFoo, ...restobj} = restObj;//...変数には残りのプロパティの新オブジェクトが代入される

console.log(restFoo);
console.log(restobj);