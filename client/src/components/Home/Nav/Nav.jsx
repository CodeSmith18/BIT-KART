import { Link , Navigate ,useNavigate} from "react-router-dom";
import Home from "../../Home";
import "./Nav.css";
import logo from './logo.png';
import Headroom from 'react-headroom';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function Nav(props){
   const msg1 ="You are Logged Out";
  
  const  navigate =useNavigate();
  const handelLogout =()=>{
    localStorage.removeItem('token');
    
    navigate('/Login');
  }
  const sellHandler = ()=>{
    if(localStorage.getItem('token')){
      navigate("/Addproduct");
    }
    else{
      toast("login first to sell");
      navigate('/Login');
    }
  }
    return(
      
    <Headroom>
      <nav class="NavBar">

   <div class="bar">
    <span><Link to="/"><img src={logo} alt="" /></Link></span>
    <div className="search">

      <input type="text" name="" id="" value={props && props.search} onChange={(e)=> props.handlesearch && props.handlesearch(e.target.value)}/>

      <button className="search-btn" onClick={()=>props.handleClick && props.handleClick()}><i class="fa fa-search"></i></button>
    </div>

    <ul class="link">
        <li><Link to="/">Home</Link></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><Link to="/Ourteam">Our Team</Link></li>
        <li><button class="sell" on onClick={sellHandler}>Sell Your Product</button></li>
        <li> <button onClick={handelLogout}>LogOut</button>
        <ToastContainer></ToastContainer></li>
    </ul>
    <div class="nav-button">
    <button class="login"><Link to="/Login">Login/Singup</Link></button>
    <button id="User" class="init-hide"><a href="#user">U</a></button>
    <select name="button" id="opt" class="mobile">
        <option value="Home"><Link to="/">Home</Link></option>
        <option value="AboutUs"><a href="#aboutus">About Us</a></option>
        <option value="OurTeam"><Link to="/Ourteam">Our Team</Link></option>
        <option value="Login"><Link to="/Login">Login/Singup</Link></option>
          
    </select>
</div>
</div>
<div class="categories">
    <ul>
        <li><select name="All categories" id="drop-down">
                <option value="All">All Categories</option>
                <option value="Cycle">BiCycle</option>
                <option value="Calculator">Calculator</option>
                <option value="Coat">Lab Coat</option>
                <option value="kit">EG Kit</option>
                <option value="Clothes">Clothes</option>
                <option value="Table">Study-Table</option>
                <option value="Electronics">Electronics</option>
                <option value="Shoes">Shoes</option>
                <option value="Sports">Sports Accessories</option>
            </select>
        </li>
        <li class="remove"><a href="#Cycle">BiCycle</a></li>
        <li class="remove"><a href="#Calculator">Calculator</a></li>
        <li class="remove"><a href="#Coat">Coat</a></li>
        <li class="remove"><a href="#Table">Study Table</a></li>
        <li class="remove"><a href="#Electronic">Electronics</a></li>
    </ul>

</div>


</nav>

    </Headroom>
      
        
    );
}
export default Nav;

{/* <div className="header"> */}
          
          

          
          //   <button onClick={sellHandler}>Sell Your Product</button>
          // {!localStorage.getItem('token')?
          //   <Link to="/Login">Login</Link>:
          //  <button onClick={handelLogout}>LogOut</button> }


         
        // </div> */