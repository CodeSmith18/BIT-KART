import "./Footer.css";

function Footer(){
    return(
        <div>
            
    <footer>
    <div class="footerContainer">
        <div class="socialIcon">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/nikhilsingh_rajput_18/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-brands fa-google-plus"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="footerNav">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">News</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Our Team</a></li>
            </ul>
        </div>
    </div>
    <div class="footerBottom">
        <p>Copyright &copy;2023; Designed by <span class="designer">TONY STARK</span></p>
    </div>
    </footer>

        </div>

    );
}

export default Footer;