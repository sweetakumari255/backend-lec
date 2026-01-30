const http=require('http');
http.createServer((req,resp)=>{
    resp.statusCode=400;
    resp.write("hello world aur first js backend code");
    resp.end();
}).listen(3000,()=>{
    console.log("server is running on port 3000");
})

//100 info
//200 successfully bhej diya
//400 client side issue
//500 server side issue
//300