/* 数组  类型必须统一*/
function array() {
    let list: number[] = [4]
    console.log(list)
}

/* 元组 */
function Tuple() {
    let x: [number, string, boolean] = [5, '5', false];
    console.log(x)
}

/* 枚举 */
function enums() {
    enum Color { Red, Green, Yellow };
    let c = Color.Green; //获取索引
    let c1 = Color[0]; // 获取值
    let arr = [];
    let arr2: any[] = ['r', 3, false];
    // console.log(c,c1,);
    for (let i in Color) {
        arr.push(Color[i]);
        // console.log(i)
    }
    // console.log(arr)
}


let someValue: any = "this is a string";
// console.log(typeof someValue);

let strLength: number = (someValue as string).length;

// console.log(strLength,'len', typeof someValue)
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a, b } = o;
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

// console.log(a,passthrough)
/* console.log({
    a:"ddd",
    ...{
        v:"sds",
        f:3
    }
}) */

interface interfacesLable {
    label?: string,
    width: number
}


function interfaces(config: interfacesLable){
    // let newSquare = {color: "white", area: 100};
    // console.log(config,'fdf')
    return config;
  }
let res = interfaces({  width: 455 });
// let ro: ReadonlyArray<number> = 
interface Point {
    readonly x?: string,
    readonly y: number
}
let p1: Point = {
    y:56
}
console.log(p1)
let ro:ReadonlyArray<number>=[4,42,2124,46,77,7];
let newOr = ro as number[];
// console.log(new)
newOr[1] = 56566666666666666666666666
console.log(newOr)
console.log(ro)
console.log(res)
export {
    interfaces,
    array,
    Tuple,
    enums
}
