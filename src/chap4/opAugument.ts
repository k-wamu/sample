// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//     if(upper){
//         return str.toUpperCase();
//     }else{
//         return str.toLowerCase();
//     }
// }
//デフォルト値
const toLowerOrUpper = (str: string, upper: boolean = false): string => {
    if(upper){
        return str.toUpperCase();
    }else{
        return str.toLowerCase();
    }
}
console.log(toLowerOrUpper("Hello")); //boolean型を指定しない場合、undefinedで初期化される。　undifined → false
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));