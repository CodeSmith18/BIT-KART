const express =require('express');
const app =express();
const port =4000;
const mongoose =require("mongoose");
const cors = require('cors');
const bodyParser =require('body-parser');
const jwt =require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/BITKART');
const Users = mongoose.model('Users',{
    username : String ,
    password: String,
    email:  String,
    phno : Number,
    hno:Number
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/singup',(req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const phno =req.body.phno;
    const hno=req.body.hno;

    const user =new Users({
        username :username,
        password :password,
        email :email,
        phno: phno, 
        hno: hno
    });
    user.save()
    .then(()=>{
        res.send({message : 'save success'});
    })
    .catch(()=> {
        res.send({message :'server err'});

    })

});
app.post('/login',(req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;
    
    Users.findOne({username:username})
    .then((result)=>{
        console.log(result,"user data")
        if(!result){
            res.send({message : ' User not found '});
        }else{
             if(result.password == password){
                const token  =jwt.sign({
                    data: result
                },'MYKEY',{expiresIn:'1h'});
                res.send({message:'User Exisit',token:token});
             }else{
                res.send({message:"Incorrect Password"});
             }
        }
       
    })
    .catch(()=> {
        res.send({message :'server err'});
    })

});

app.listen(port,()=>{
    console.log(`app listining on the port ${port}`);
});