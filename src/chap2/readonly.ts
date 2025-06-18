type MyObj1 = {
    readonly foo: number;
}

const ReadObj: MyObj1 = {
    foo: 123
}

// ReadObj.foo = 0; //読み取り専用のためコンパイルエラー


/* typeofキーワードで変数の型を得る */
const MyObj2 = {
    foo: "foo",
    bar: 123
}

type MyObj2Type = typeof MyObj2;
const typeObj: MyObj2Type = {
    foo: "typeFoo",
    bar: 0
}


