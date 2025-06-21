function range(min: number, max: number): number [] {
    const result = [];

    for(let i = min; i <= max; i++){
        result.push(i);
    }

    return result;
}

console.log(range(5, 10));


function helloWorldTimes(time: number): void {
    for(let i = 0; i < time; i++){
        console.log("Hello World!");
    }
}
helloWorldTimes(5);


function helloWorldTimes2(time: number): void {
    if(time >= 100){
        console.log(`${time}回なんて無理です！`);
        return;
    }

    for(let i = 0; i < time; i++){
        console.log("Hello World!");
    }
}
console.log();
helloWorldTimes2(100);