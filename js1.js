/**
 * Created by root on 5/2/17.
 */
let list=[];

for (let i in [1,2,3]){
    list.push(i)
}

let a = Infinity;
let b = Infinity;
let str = "123.87";
let bb = true;

console.log(isFinite(a));
console.log(typeof b);
//console.log(-1/0);
console.log(str);
console.log(typeof bb);
console.log(false === {});
console.log(parseFloat(str));
console.log(`${a + 'dddd'}`);

for (let x=0;x<10;x++) {
    console.log(x);
}

for (let x of [4,2,3]) {
    console.log(x)
}

function add(x,y) {
    return x+y;
}

console.log(add(1,200));

function sum () {
    let ret=0
    for (let x of Object.keys(arguments)) {
        ret += arguments[x]
    }
    return ret
}

console.log( sum(1,2,3 ));

function sum2(...i) {
    let ret = 0;
    for (let x of i) {
        ret += x
    }
    return ret
}

console.log(sum2(1,2,3,4))



const add2 = (x , y) => x+y;
console.log(add2(2,4))


const jbjb = new Array(1,2,3);
const hdhd = [1,2,10];

console.log(jbjb.length, hdhd[-1], Array.isArray(jbjb));

const jbjb2 = hdhd.map(e => e*e).map(e => e + 2);
console.log(jbjb2);

const hh=hdhd.reduce((a, b) => a + b);
console.log(hh)