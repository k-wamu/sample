type MyObj = {
    foo: boolean,
    bar: boolean,
    baz?: number //あってもなくても良い
}

const OpObj: MyObj = {
    foo: true,
    bar: false
}

const OpObj2: MyObj = {
    foo: true,
    bar: false,
    baz: 123
}

console.log(OpObj.baz); //存在しないためandefined

if(OpObj2.baz !== undefined){
    console.log(OpObj2.baz * 1000); //undefined検査後に使用する
}