import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const msg = {
    good: `正の数が入力されました`,
    bad: `負の数が入力されました`
}

rl.question(`数値を入力してください：`, (num) => {
    const number = Number(num);
    console.log(msg[number >= 0 ? "good" : "bad"]);
    rl.close();
})