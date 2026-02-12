// let fs=require('fs/promises');
// let path=__dirname+'/abc.txt';
// fs.readFile(path)

// .then((data)=>{
//     console.log(data.toString());
// })

// .catch((err)=>{
//     console.log(err);
// })

let fs=require('fs/promises');
let path=__dirname+ '/abcde.txt';
fs.readFile(path)

.then((data)=>{
    console.log("done successfully");
})

.catch((err)=>{
    console.log(err);
})