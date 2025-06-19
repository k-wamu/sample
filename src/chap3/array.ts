import { copyFileSync } from "fs";

const array = [0, 123, -456 * 100];
console.log(array);

/** 複数種類の型も可能 */
const array2 = [0, "name", true];
console.log(array2);

/** スプレット構文による配列のコピー */
const array3 = [0, "array3", ...array];
console.log(array3);

console.log(array3[2]);

array3[0] = "2";
console.log(array3);

/** 配列要素の型指定 */
const array4: number[] = [0, 3, 2]; //T[] or Array<T>←要素が複雑な場合好まれる


/** pushメソッド：要素の追加 */
array4.push(1000);
console.log(array4);


/** includsメソッド：要素の有無 */
console.log(array4.includes(100));
console.log(array4.includes(3));

console.log(array4.length);