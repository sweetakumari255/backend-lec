

// let math=require('./obj');


// console.log(math.sum(2,4));
// console.log(math.product(2,4));

let {sum,product}=require('./obj');
console.log(sum(2,4));
console.log(product(2,4));




let person={
name:"sweta"
}

let{name}=person;
console.log(name);