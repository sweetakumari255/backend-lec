//require

let math=require('./math');//same folder tow ./ aaiga

console.log(math.pi);
console.log(math.sum(3,4));
console.log(math.product(5,7));

//using destructure

let {pi,sum,product}=require('./math');
console.log(pi);
console.log(sum(3,4));
console.log(product(3,4));