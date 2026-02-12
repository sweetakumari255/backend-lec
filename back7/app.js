let express=require('express');
let app=express();
let bodyparser=require('body-parser');


let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/register',(req,res)=>{
    res.render('index');
})


app.post('/register',(req,res)=>{
    
})

app.listen(3000,(req,res)=>{
    console.log("server is runnning on the port no 3000");
})