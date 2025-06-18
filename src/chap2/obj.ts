// const user = {
//     name : `太郎`,
//     age : 20
// }

// console.log(`${user.name}は${user.age}歳です`);

const input: string = `kazu`;
const name2: string = input ? input : `名無し`;
const user = {
    name : name2,
    age : 30,
}
console.log(`${user.name}は${user.age}歳です`);

const obj = {
    "foo": -300,
    "↑ ↓": " aaa ",
};
console.log(obj.foo);
console.log(obj["↑ ↓"]);

const propName: string = "foo";
const obj1 = {
    [propName]: 123,
}
console.log(obj1.foo);