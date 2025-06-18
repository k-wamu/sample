import { appendFile } from "fs";

type PriceData = {
    [key: string] : number;
}

const data: PriceData = {
    apple: 100,
    orange: 200,
    banana: 300
}

data.coffee = 120;
// data.bento = "foo";//型が一致しないためコンパイルエラー
console.log(data);