import { useState } from "react";
import Nav from "./Home/Nav/Nav";



function Addproduct(){
    const[ProductName , setProductName]=useState('');
    const[ProductDesc , setProductDesc]=useState('');
    const[ProductPrice , setProductPrice]=useState('');
    const[ProductCategory , setProductCategory]=useState('');
  
    const submitHandler=()=>{
        console.log({
            ProductName:ProductName,
            ProductDesc:ProductDesc,
            ProductPrice:ProductPrice,
            ProductCategory:ProductCategory 
        });
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
                <label htmlFor="pdesc"> Product Name:</label>
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
                 <br/>
                <button onClick={submitHandler}> SUBMIT</button>

           </div>
           

        </div>
    );
}
export default Addproduct;