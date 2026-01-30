let http=require('http');
http.createServer((req,resp)=>{
    resp.write("writting my goal");
    resp.end('hello jii');
}).listen(4800,()=>{
    console.log("server is running at port 4800");
});






// let http=require('http');

// let server=http.createServer((req, res)=>{
//    res.write("learning http module");
//    res.end()
// });

// server.listen(3000,()=>{
//     console.log("server running at port 3000");
// });

//http://localhost:3000/