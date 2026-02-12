let http=require("http");
http.createServer((req,resp)=>{

    let header=req.headers.authorization;
    let secret="sweta";
    
   if(!header){
    resp.statusCode=400;
    resp.write("enter valid secretkey");
    resp.end();
    return;
   }

   if(header==secret){
    resp.statusCode=201;
    resp.write("welcome user");
    resp.end();
    return;
   }

   else{
    resp.statusCode=401;
    resp.write("invalid key");
    resp.end();
    return;
   }
// console.log(req.headers);
// console.log(resp.headers);
// resp.write("http server");
//     resp.end();
}).listen(3000,()=>{
    console.log("server is running on port 3000");
});
