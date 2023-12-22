import "./Ourteam.css";
import ritik  from "./ritik.jpg";
import saket from "./saket.jpg";
import Nav from "../Home/Nav/Nav";
import Footer from "../Home/Footer/Footer";


function Ourteam(){
    return(
        <div class="main">
              <Nav></Nav>
        <div class="teampage">
            <p>"Together, we make the extraordinary happen. Each one of you brings unique talents and perspectives,
                creating a powerful synergy that propels us forward."</p>
            <h1 class="team">Meet Our Team...</h1>

        </div>
        <div class="home-container">

            <div class="profile-card">
                <div class="img">
                    <img src={ritik}></img>
                </div>
                <div class="caption">
                    <h3>Ritik Raj</h3>
                    <p>ECE</p>
                    <div class="social-links">
                        <li class="ll"><a href="https://www.linkedin.com/in/ritik-raj1875/">LinkedIn</a></li>
                        <li class="git"><a href="https://github.com/CodeSmith18">GitHub</a></li>
                        <li class="insta"><a href="https://www.instagram.com/ritikraj_1875/">Instagram</a></li>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={saket}></img>
                </div>
                <div class="caption">
                    <h3>Saket Nayan</h3>
                    <p>AIML</p>
                    <div class="social-links">
                        <li class="ll"><a href="https://www.linkedin.com/in/saket-nayan-3b0b6b250/">LinkedIn</a></li>
                        <li class="git"><a href="https://github.com/s-nayan">GitHub</a></li>
                        <li class="insta"><a href="https://www.instagram.com/saket_nyn/">Instagram</a></li>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={ritik}></img>
                </div>
                <div class="caption">
                    <h3>Nikhil Singh</h3>
                    <p>ECE</p>
                    <div class="social-links">
                        <li class="ll"><a href="#no">LinkedIn</a></li>
                        <li class="git"><a href="#no">GitHub</a></li>
                        <li class="insta"><a
                                href="https://www.instagram.com/nikhilsingh_rajput_18?igsh=OGQ5ZDc2ODk2ZA==">Instagram</a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );

}

export default Ourteam;