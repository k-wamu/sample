type User<T> = {
    name: string;
    child: T;
};

type User1<T, E> = {
    name: string;
    child: T;
    pet: E;
};


const ge: User1<number, boolean> = {
    name: "kazu",
    child: 123,
    pet: true
}


/* extends */
type HasName = {
    name: string;
}

/* extendsした場合、その部分型でなければならない */
type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

// type T = Family<number, string>;

type Animal1 = {
    name: string;
}

type Human1 = {
    name: string;
    age: 12;
}

type T = Family<Animal1, Human1>;


/** オプショナルな型引数 */
type Family2<Parent = Animal1, Child = Animal1> = {//<Parent, Child = Animla1>も可　逆は不可
    mother: Parent;
    father: Parent;
    child: Child;
}

type S = Family2<string, number>; //通常通り
type Y = Family2; //<Animal1, Animal1>と同じ
type U = Family2<string> // <string, Animal1>と同じ