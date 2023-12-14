import '../scss/Nav.scss';
import Logo from '../assets/images/Logo.png';
import { useEffect, useState } from 'react';
const Nav = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const toggleDarkMode = () => {
        setIsDarkTheme(!isDarkTheme);
    };
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
                    Features
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
                <div className={`darkModeContainer  ${isDarkTheme ? '' : 'lightMode'}`}>
                    <div onClick={toggleDarkMode}>
                        <span className="material-symbols-outlined">
                            {isDarkTheme ? 'dark_mode' : 'routine'}
                        </span>
                    </div>
                </div>
                <button>
                    Resume
                </button>
            </ul>
            <div id="mobileLinks" 
            className={`${isOpen ? 'activeMobleLinks' : ''}`}>
                <div className="mobile-top-box">
                    <div className={`darkModeContainer  ${isDarkTheme ? '' : 'lightMode'}`}>
                        <div onClick={toggleDarkMode}>
                            <span className="material-symbols-outlined">
                                {isDarkTheme ? 'dark_mode' : 'routine'}
                            </span>
                        </div>
                    </div>
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