import { useEffect } from "react";
import Footer from "./Home/Footer/Footer";
import Nav from "./Home/Nav/Nav";
import Products from "./Home/Products";
import { Link , Navigate ,useNavigate} from "react-router-dom";
import Preloader from "./preloader/preloader";

function Home(){
    const  navigate =useNavigate();

    // useEffect(()=>{
    //     if(!localStorage.getItem('token')){
    //         navigate('/login');
    //     }
    // },[])

    return(
        <div>
            <Preloader></Preloader>
            <Nav></Nav>
            <Products></Products>
            <Footer></Footer>
        </div>
    );

}
export default Home;