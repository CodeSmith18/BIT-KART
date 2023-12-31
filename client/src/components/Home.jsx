import { useEffect, useState } from "react";
import Footer from "./Home/Footer/Footer";
import Nav from "./Home/Nav/Nav";
import { Link , Navigate ,useNavigate} from "react-router-dom";
import Preloader from "./preloader/preloader.jsx";
import "./Home.css";
import Categories from "./Categories/Categories.jsx";
import axios from "axios";

function Home(){
    const  navigate =useNavigate();
    const [products ,setproducts] =useState([]);
    const [search ,setSearch] =useState('');
    const [cproducts ,setcproducts] =useState([]);

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

    },[]);
    const handlesearch =(value)=>{
        console.log('hhh',value);
        setSearch(value);
    }
    const handleClick = async () => {
        console.log('products', products);
    
        const searchLowerCase = search.toLowerCase();
        if(search!=""){
            let filteredProducts = products.filter((item) => {
                return (
                    item.ProductName.toLowerCase().includes(searchLowerCase) ||
                    item.ProductDesc.toLowerCase().includes(searchLowerCase) ||
                    item.ProductCategory.toLowerCase().includes(searchLowerCase)
                );
            });
        
            console.log(filteredProducts);
            setcproducts(filteredProducts);
            console.log(products);
            setSearch('');
        }
        
    };
    const handleCategory = (value) =>{
        console.log(value , "v");
        let filteredProducts =products.filter((item)=>{
            if(item.ProductCategory.toLowerCase()==value.toLowerCase()){
                return item;
            }
        })
        setcproducts(filteredProducts);
    }
    

    return(
        <div>
           <Preloader></Preloader>
            <Nav search={search} handlesearch={handlesearch} handleClick={handleClick}></Nav> 
            <Categories handleCategory={handleCategory}></Categories>
            <div className="products">
                <div className="sub products">   
                {!cproducts && cproducts.length==0 && <h2>No result found</h2>  }
               
                {cproducts && cproducts.length>0  && cproducts.map((item, index)=>{
                    return(
                        
                        <div  key={item._id}className="card">
                            <h4>Search Result:</h4>
                            <img width="300px" height="300px" src={'http://localhost:4000/'+item.Pimage} />
                            <h4>{item.ProductCategory}</h4>
                            <h2>{item.ProductName}</h2>
                            <p>{item.ProductDesc}</p>
                            <h3>{item.ProductPrice}</h3>
                        </div>
                      )

                })}
                </div>
                <div className="sub products">
               {products && products.length>0 &&<h4>All Products</h4>&&
               products.map((item , index)=>{
                  
                  return(
                     
                    <div  key={item._id}className="card">
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
            
           
            </div>
            

            <Footer></Footer>
        </div>
    );

}
export default Home;