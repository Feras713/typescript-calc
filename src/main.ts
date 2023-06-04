// Variables
let a: number;
a = 200;

let b: number | string | Date;
b = 200;
b = 'feras';
b = new Date();

let c: any;
c = true;
c = "hello";
c = 145;

let f;
f = "hello";
f = 250;

function func(num: number, name: string) {
    console.log(name + " is " + num + " years old");
}

func(30, 'feras');
function func2() {
    console.log("another function");
}

function func3() {
    console.log("another third function");
}