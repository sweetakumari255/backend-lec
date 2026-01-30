let express = require('express');         //server banai hai
let app = express();

__dirname

app.get('/', (req, res) => {
    res.send("this is / route");
});

app.get("/login",(req,res)=>{
    res.send("this  is/login route")
})

app.get("/",(req,res)=>{
    res.send("something went wrong !! invalid url")
})

app.get("/register",(req,res)=>{
    res.send("this is/register route")
})

app.get('/signup',(req,res)=>{         //render 
    res.render("index");
})



app.listen(3000, () => {
    console.log("app is running on port no 3000");
});
