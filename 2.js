/**
 * Created by root on 5/8/17.
 */
const handler = {
    get (target, prop) {
        console.log(`get ${prop}`);
         return target[prop]
    },
    set (target, prop, value) {
        console.log(`set ${prop} value ${value}`);
        target[prop]=value;
    }
}



const proxy = new Proxy({}, handler);

proxy.a = 1;
console.log(proxy.a);