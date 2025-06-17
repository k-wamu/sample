// for(let i = 0; i <= 100; i++){

//     if(i % 3 !== 0 && i % 5 !== 0){
//         console.log(i);

//     }else if(i % 3 === 0 && i % 5 !== 0){
//         console.log(`Fizz`);

//     }else if(i % 3 !== 0 && i % 5 === 0){
//         console.log(`Buzz`);

//     }else if(i % 3 === 0 && i % 5 === 0){
//         console.log(`FizzBuzz`);

//     }
    
// }

let rs: string = "";

for(let i = 0; i <= 100; i++){

    if(i % 3 !== 0 && i % 5 !== 0){
        rs += i;

    }else if(i % 3 === 0 && i % 5 !== 0){
        rs += "Fizz";

    }else if(i % 3 !== 0 && i % 5 === 0){
        rs += "Buzz";

    }else if(i % 3 === 0 && i % 5 === 0){
        rs += "FizzBuzz";
        
    }

    rs += " ";
    
}

console.log(rs);