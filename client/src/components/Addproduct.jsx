import { useEffect, useState } from "react";
import Nav from "./Home/Nav/Nav";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";




function Addproduct(){
    const  navigate =useNavigate();
    const[ProductName , setProductName]=useState('');
    const[ProductDesc , setProductDesc]=useState('');
    const[ProductPrice , setProductPrice]=useState('');
    const[ProductCategory , setProductCategory]=useState('');
    const[Pimage ,setPimage]=useState('');

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            Navigate("/login");
        }
    },[]);
  
    const submitHandler=()=>{
 
        const formdata =new FormData();
        formdata.append('ProductName',ProductName);
        formdata.append('ProductDesc',ProductDesc);
        formdata.append('ProductPrice',ProductPrice);
        formdata.append('ProductCategory',ProductCategory);
        formdata.append('Pimage',Pimage);
        const url = "http://localhost:4000/Addproduct";
        axios.post(url,formdata)
          .then((res)=>{
            console.log(res);
            alert(res.data.message);
            navigate('/');
          })
          .catch((err)=>{
              console.log(err);
          })
       
    }
    return (
        <div>
           <Nav></Nav>
           <div>
                <h2>Add Your Product here:</h2>
                <label  htmlFor="pname"> Product Name:</label>
                <input type="text"  id="pname" value={ProductName} 
                onChange={(e)=>{setProductName(e.target.value)}}/>
                <br />
                <label htmlFor="pdesc"> Product desc:</label>
                <input type="text"  id="pdesc" value={ProductDesc} 
                onChange={(e)=>{setProductDesc(e.target.value)}}/>
                <br />
                <label htmlFor="pprice">Product Price:</label>
                <input type="text"  id="pprice" value={ProductPrice}
                onChange={(e)=>{setProductPrice(e.target.value)}} />
                <br />
                <label htmlFor="pcategory"> Product Category:</label>
                 <select name="" id="pcategory" value={ProductCategory}
                 onChange={(e)=>{setProductCategory(e.target.value)}}>
                    <option>BiCycle</option>
                    <option>Calculator</option>
                    <option>Clothing</option>
                    <option>Electronics</option>
                    <option>Sports</option>
                </select>
                <br />
                 <label htmlFor="Pimage">Product Image</label>
                 <input type="file" className="Pimage" 
                 onChange={(e)=> setPimage(e.target.files[0])} />
                 <br/>
                <button onClick={submitHandler}> SUBMIT</button>

           </div>
           

        </div>
    );
}
export default Addproduct;