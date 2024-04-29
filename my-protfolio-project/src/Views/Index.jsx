import '../scss/Index.scss';

import Nav from '../Components/Nav';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Article from './Article';
import Articles from './Articles';
import _Projects from './Projects';
import Project from './Project';
import { useEffect, useState } from 'react';
const Main = () => {

    return (

            <section>
                <Nav />
                 <main> 
                    {/* // about */}
                        <About /> 
                    {/* // Projects */}
                         <Projects /> 
                    {/* // Skills */}
                         <Skills /> 
                    {/* // Blog */}
                         <Blog /> 
                    {/* // contact */}
                         <Contact /> 
                 </main> 


                {/* // footer */}
                <Footer />
                <div className='void'></div>
            </section>
    )
}

export default Main;