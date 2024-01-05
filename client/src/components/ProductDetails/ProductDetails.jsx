import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Home/Nav/Nav";

function ProductDetail(){
    const p = useParams();
    console.log(p.productId);
    const [product,setproduct] =useState();
    const[user,setUser]=useState();
    console.log(user);

    useEffect(()=>{
        const url ='http://localhost:4000/getProduct/'+p.productId;
        axios.get(url)
        .then((res)=>{
            if(res.data.products){
                setproduct(res.data.products);
                console.log(res);
            }
            
        })
        .catch((err)=>{
            console.log(err);
            alert('server err');
        })

    },[]);
  const  HandleContact=(addedBy)=>{
    const url ='http://localhost:4000/getUser/'+addedBy;
        axios.get(url)
        .then((res)=>{
            if(res.data.user){
                setUser(res.data.user);
            }

            
            
        })
        .catch((err)=>{
            console.log(err);
            alert('server err');
        })

        
    }

    return(<>
        <Nav></Nav>
            <h2>PRODUCT DETAILS:</h2>
             <div className="">
            
             {product && <div>
                    <div>
                        <img src={"http://localhost:4000/"+product.Pimage }alt="" />
                        {product.Pimage2&&<img src={"http://localhost:4000/"+product.Pimage2 }alt="" />}
                        <h6>Product Description:</h6>
                        {product.ProductDesc}
                    </div>
                    <div>
                      {product.ProductName}
                      {product.ProductPrice}
                    </div>
                    <div>
                        {product.addedBy&& <button onClick={()=>HandleContact(product.addedBy)}>Show Contact Details:</button>}
                        {user && user.username &&  <h2>Username:{user.username}</h2>}
                        {user && user.username &&  <h2>Phone Number:{user.phno}</h2>}
                        {user && user.username &&  <h2>Email:{user.email}</h2>}
                        {user && user.username &&  <h2>Hostel Number:{user.hno}</h2>}
                    </div>

                 </div>}
                 

        </div>
        </>
    );
}
export default ProductDetail;