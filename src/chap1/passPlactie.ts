import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question("パスワードを入力してください：", (password) => {

//     if(password === "pass"){
//         console.log("ようこそ！");

//     }else{
//         console.log("パスワードが違います");
//     }

//     rl.close();
// })

rl.question(`数値を入力してください：`, (num) => {

    const n: number = Number(num);

    if(!Number.isNaN(n)){
        console.log(`${n}はNaNではありません`);
    }else{
        console.log(`${n}です`);
    }

    if(n >= 0 && n < 100){
        console.log(`範囲内です`);

    }else{
        console.log(`範囲外です`);
    }

    rl.close();
})