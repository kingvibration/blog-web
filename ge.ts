/** This is a cool guy. */
interface Person {
    /** This is name. */
    name: string,
}

const p: Person = {
    name: 'cool'
}


interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;


console.log(square.sideLength)


let square1 = <Square>{
    color: "blue",
    sideLength: 10
};
square1.color = "blue";
square1.sideLength = 10;


console.log(square1.sideLength)

interface API {
    '/user': { name: string },
    '/menu': { foods: string[] }
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
    return fetch(url).then(res => res.json());
}

// 等价于

const get1 = function<URL extends keyof API>(url: URL): Promise<API[URL]>{
    return fetch(url).then(res => res.json());
}

/*
get('/menu').then(user => user.foods);
get1('/menu').then(user => user.foods);
*/


/*function $<T extends HTMLElement>(id: string): T {
    return (document.getElementById(id)) as T;
}

// 不确定 input 的类型
// const input = $('input');

// Tell me what element it is.
const input = $<HTMLInputElement>('input');
console.log('input.value: ', input.value);*/


interface Point {
    x: number,
    y: number
}

function add(x:Point, y:Point):Point {
    return {
        x: x.x + y.x,
        y: x.y + y.y,
    }
}

let res = add({x: 1, y: 2}, {x: 3, y: 4});


console.log(res)
