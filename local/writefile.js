// let fs=require('fs');
// let path=__dirname+'/data.txt';
// console.log(__dirname)
// fs.writeFile(path,"hello learning file system",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("done successflly");
//     }
// });



let fs=require("fs");
let path=__dirname+'/data.txt';
fs.writeFile(path,"learor higher education orning is oimportant f",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("done successfully");
    }
})