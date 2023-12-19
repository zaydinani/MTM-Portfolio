import '../scss/Index.scss';

import Nav from '../Components/Nav';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Blog from '../Components/Blog';
import Footer from '../Components/Footer';
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
                </main>
                {/* // footer */}
                <Footer />
                <div className='void'></div>
            </section>
    )
}

export default Main;