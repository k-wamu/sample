/* 部分型 */
type Animal = {
    age: number;
}

type Human = {
    age: number;
    name: string;
}


/* 部分型 */
type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
}

type HumanFamily = {
    familyNmae: string;
    mother: Human;
    father: Human;
    child: Human;
}

