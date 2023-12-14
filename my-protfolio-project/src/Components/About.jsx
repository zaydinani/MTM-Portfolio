import '../scss/About.scss';
import myImg from '../assets/images/my-pic.webp'
import React, { useState, useEffect } from 'react';


const About = () => {
    useEffect(() => {
        const ctxDiv = document.querySelector('.ctx');
        const img = document.querySelector('.imgbox > img');
    
        if (ctxDiv && img) {
            setTimeout(() => {
                ctxDiv.classList.add('animated-l-t-r');
                img.classList.add('loadPicture');
              }, 500); 
        }
      }, []);
    return (
        <div className='about_me'>
            <div className='ctx'>
                <h5>Hi there!</h5>
                <span>I'm</span>
                <h2>Mohamed Marsou</h2>
                <p>
                A <span>Full-stack developer</span> , specializing in transforming code into captivating creations! My journey in the tech world kicked off during my college days, but I've since transitioned into internships, jobs, and freelance work.
                </p>
                <br/>
                <p>Let's <span>team up</span> and illuminate the digital realm, one pixel at a time. <br/>Eager to craft some digital magic <span> together !!</span></p>
                <button>Hire me</button>
            </div>
            <div className='imgbox'>
                <img src={myImg} alt="my-picture" loading="lazy" />
                <div className="el-sudo-crs">
                    <div></div>
                </div>
            </div>
            <div className="bg-shape"></div>
        </div>
    )
}
export default About