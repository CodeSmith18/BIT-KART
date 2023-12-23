const express =require('express');
const app =express();
const port =4000;
const mongoose =require("mongoose");
const cors = require('cors');
const bodyParser =require('body-parser');
const jwt =require('jsonwebtoken');
const multer =require('multer');
const path =require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage });
  // this code is used to display the stored pictures in front
  app.use('/uploads',express.static(path.join(__dirname,'uploads')));
  let uri ='mongodb+srv://ritikraj1875:hWkC4CChc23YmFV@cluster0.ay9qf85.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(uri);
const Users = mongoose.model('Users',{
    username : String ,
    password: String,
    email:  String,
    phno : Number,
    hno:Number
});
const Products =mongoose.model('Products',{
    ProductName:String,
    ProductDesc:String,
    ProductPrice:String,
    ProductCategory:String,
    Pimage:String
})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.send('hello world');
});
app.post('/Addproduct' ,upload.single('Pimage'),(req,res)=>{
    console.log(req.body);
    console.log(req.file.path);
   const  ProductName = req.body.ProductName;
   const  ProductDesc = req.body.ProductDesc;
   const  ProductPrice = req.body.ProductPrice;
   const  ProductCategory = req.body.ProductCategory;
   const  Pimage = req.file.path;
   

    const product = new Products({
    ProductName:ProductName,
    ProductDesc:ProductDesc,
    ProductPrice:ProductPrice,
    ProductCategory:ProductCategory,
    Pimage:Pimage

    });
    product.save()
    .then(()=>{
        res.send({message : 'save success'});
    })
    .catch(()=> {
        res.send({message :'server err'});

    })
    return;
})

app.get('/getProducts', (req, res)=>{
    Products.find()
    .then((result)=>{
        // console.log(result,"Product data")
        res.send({message:"success", products:result});

    })
    .catch((err)=>{
        res.send({message:'server-err'})
    })
})

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