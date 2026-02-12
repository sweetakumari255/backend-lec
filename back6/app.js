let express=require('express');
let bodyparser=require('body-parser');  //middleware

let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.use(bodyparser.urlencoded({extended:true}));


let todo=[
    "cooding",
    'reading book',
    'market'
]



app.get('/todos/:id',(req,res)=>{
    res.render('index1',{todo});
})


let arr=[2,3,4,5,6,7,8]

app.get('/todoss/:id',(req,res)=>{
    res.render('index2',{arr});
})



app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user register successfullt");

})






let obj={
    id:123
}

app.get('/',(req,res)=>{
    res.render('index',{obj});
})


app.get('/product/:id',(req,res)=>{
    console.log(req.params); //.id 
    res.send('this is route');
})

app.listen(3000,(req,res)=>{
    console.log("server is running on the port 3000");
})