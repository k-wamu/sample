type FooBar ={
    foo: string;
    bar: number;
}

type FooBarBazz = {
    foo: string;
    bar: number;
    baz: boolean;
}

const Obj: FooBarBazz = {
    foo: "h1",
    bar: 123,
    baz: false
}

const Obj2: FooBar = Obj; //FooBarBazzがFooBarの部分型

