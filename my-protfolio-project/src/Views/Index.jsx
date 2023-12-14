import '../scss/Index.scss';

import Nav from '../Components/Nav';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import { useEffect, useState } from 'react';
const Main = ()=>{

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
            {/* // articles */}
            {/* // contact */}
        </main>
    </section>)
}

export default Main;