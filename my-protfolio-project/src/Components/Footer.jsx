import React from "react";
import "../scss/Footer.scss";
import Logo from '../assets/images/Logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = ()=>{
    return (
        <footer>
            <div className="col-1">
            <div id="logoContainer">
                <img src={Logo} alt="logo-MTM" />
                <p>TM</p>
            </div>
                <p>
                    Passionate full-stack developer, transforming code into captivating creations, eager to illuminate the digital realm with precision and creativity.
                </p>

                <span>&copy; Copyright  MTM 2024</span>
            </div>
            <div className="col-2">
                <h3>Links</h3>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#">
                        ToolBox
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
            </div>
            <div className="col-3">
                <h3>Newsletter</h3>
                <p>Stay ahead in the world of web development. Join us for inspiring stories, expert insights, and the latest trends</p>
                <form>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <button>SEND</button>
                </form>
                <div className="s-m-icons">
                    <FaSquareFacebook />
                    <FaInstagramSquare />
                    <IoLogoLinkedin />
                </div>
            </div>
        </footer>
    )
}
export default Footer