let http=require("http");
http.createServer((req,resp)=>{
    
   if(!header){
    resp.statusCode=400;
    resp.write("enter valid secretkey");
    resp.end;
   }
console.log(req.headers);
console.log(resp.headers);
resp.write("http server");
    resp.end();
}).listen(3000,()=>{
    console.log("server is running on port 3000");
});

