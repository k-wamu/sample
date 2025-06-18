let a: number = 1;
let sum: number = 0;

// while(a <= 100){
//     sum += a;
//     a++;
// }

// console.log(sum);

// while(a <= 100){

//     if(a % 2 !== 0){
//         a++;
//         continue;
//     }

//     console.log(a);
//     a++;
// }

for(let i = 0; i <= 100; i++){
    
    if(i % 2 === 0){
        console.log(i);
    }

    sum += i;
}

console.log(sum);