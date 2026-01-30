let express=require('express');
let app=express();

//server se content chahiye toh
app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send("this is a product route");
})

//todo/:id
//route crete karna aise

app.get('/todo/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("this is route");
})

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
})