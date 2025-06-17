import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("文字列を入力してください：", (line) => {
//     console.log(`${line}が入力されました`);
//     rl.close();
// });

// rl.question("数値を入力してください：", (line) => {
//     console.log(Number(line) + 1000);
//     // rl.close();
// });

// const bigInt = BigInt("foooo"); //コンパイルエラー
// console.log(bigInt);

rl.question("名前を入力してください：", (line) => {
    const secret = process.env.SECRET ?? "dafault";
    console.log(`secretは${secret}です`);

    const displayName: String = line || `名無し`;
    
    // console.log("Hello, " + line + "さん");
    // console.log(`Hello, ${line}さん`);
    console.log(`${displayName}`);
    rl.close();
})