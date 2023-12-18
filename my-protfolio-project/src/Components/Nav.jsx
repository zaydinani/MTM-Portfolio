import '../scss/Nav.scss';
import Logo from '../assets/images/Logo.png';
import { useEffect, useState } from 'react';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleHam = () => {
        setIsOpen(!isOpen);
        
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    return (
        <nav>
            <div id="logoContainer">
                <img src={Logo} alt="logo-MTM" />
                <p>TM</p>
            </div>

            <ul id="Links">
                <li>
                    <p>
                        About
                    </p>
                </li>
                <li>
                    <p>
                        Projects
                    </p>
                </li>
                <li>
                    <p>
                    Toolbox
                    </p>
                </li>
                <li>
                    <p>
                        Blog
                    </p>
                </li>
                <li className='contact'>
                    <p>
                        Contact
                    </p>
                </li>
              
                <button>
                    Resume
                </button>
            </ul>
            <div id="mobileLinks" 
            className={`${isOpen ? 'activeMobleLinks' : ''}`}>
                <div className="mobile-top-box">
                    
                    <button>
                        Resume
                    </button>
                </div>

                <li>
                    <p>
                        About
                    </p>
                </li>
                <li>
                    <p>
                        Projects
                    </p>
                </li>
                <li>
                    <p>
                        Exprience
                    </p>
                </li>
                <li>
                    <p>
                        Blog
                    </p>
                </li>
                <li className='contact'>
                    <p>
                        Contact
                    </p>
                </li>
                <div className="linksFooter">
                    <p>
                        Copyright 2023 &copy;
                        <span>MTM</span>
                    </p>
                    <p>Personal Portfolio website</p>
                </div>
            </div>
            <div onClick={toggleHam} id="HamMenuBox" className={`
                ${isOpen ? 'clickedHam' : ''}
            `}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Nav;