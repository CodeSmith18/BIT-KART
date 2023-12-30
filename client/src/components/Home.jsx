import { useEffect, useState } from "react";
import Footer from "./Home/Footer/Footer";
import Nav from "./Home/Nav/Nav";
import { Link , Navigate ,useNavigate} from "react-router-dom";
import Preloader from "./preloader/preloader.jsx";
import "./Home.css";

import axios from "axios";

function Home(){
    const  navigate =useNavigate();
    const [products ,setproducts] =useState([]);
    const [search ,setSearch] =useState('');

    // useEffect(()=>{
    //     if(!localStorage.getItem('token')){

    //         navigate('/login');
    //     }
    // },[])

    useEffect(()=>{
        const url ='http://localhost:4000/getProducts';
        axios.get(url)
        .then((res)=>{
       
            if(res.data.products){
                setproducts(res.data.products);
            }
        })
        .catch((err)=>{
            console.log(err);
            alert('server err');
        })

    });
    const handlesearch =(value)=>{
        console.log('hhh',value);
        setSearch(value);
    }
    const handleClick =()=>{
        console.log('products',products);
        let filteredProducts = products.filter((item)=>{
            if(item.ProductName.toLowerCase().includes(search.toLowerCase())||
               item.ProductDesc.toLowerCase().includes(search.toLowerCase())||
               item.ProductCategory.toLowerCase().includes(search.toLowerCase())){
               return item;
            }
        });
        console.log(filteredProducts);
        setproducts(filteredProducts);
        console.log( products);
        
    }

    return(
        <div>
           <Preloader></Preloader>
            <Nav search={search} handlesearch={handlesearch} handleClick={handleClick}></Nav> 
            <div className="products">
            {products && products.length>0 &&
               products.map((item , index)=>{
                
                  
                  return(
                     
                    <div className="card">
                        <img width="300px" height="300px" src={'http://localhost:4000/'+item.Pimage} />
                        <h4>{item.ProductCategory}</h4>
                        <h2>{item.ProductName}</h2>
                        <p>{item.ProductDesc}</p>
                        <h3>{item.ProductPrice}</h3>
                    </div>
                  )

               })
            }
           
           
            </div>
            

            <Footer></Footer>
        </div>
    );

}
export default Home;