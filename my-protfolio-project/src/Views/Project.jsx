import "../scss/Project.scss";
import { GrGallery } from "react-icons/gr";
import React, { useEffect, useState } from 'react';


const Project = () => {


    return (
        <div id="sp__box">
            <div className="single-project-section ">
                <h1 className="project-title ">
                    Lorem ipsum dolor sit amet.
                </h1>
                <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/portfolio/portfolio-1.png" className="project-cover " alt="image" />

                <div className="description ">
                    <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/portfolio/portfolio-1.png" alt="image" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus sunt dignissimos? Accusantium dolores perferendis laborum aut illum autem cumque tempora optio veritatis distinctio! Odit totam hic temporibus fugit, itaque a autem laudantium, magni ex nesciunt, impedit nobis ratione ad placeat adipisci. Mollitia culpa eveniet quam exercitationem minima ipsa ex magnam error, quo dolores iusto nobis sequi quod laboriosam rem est excepturi eligendi pariatur delectus atque odit reiciendis praesentium quasi hic! Omnis, explicabo ea atque quidem at odio nesciunt nobis cum excepturi? Veniam numquam aliquid totam odio!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus sunt dignissimos? Accusantium dolores perferendis laborum aut illum autem cumque tempora optio veritatis distinctio! Odit totam hic temporibus fugit, itaque a autem laudantium, magni ex nesciunt, impedit nobis ratione ad placeat adipisci. Mollitia culpa eveniet quam exercitationem minima ipsa ex magnam error, quo dolores iusto nobis sequi quod laboriosam rem est excepturi eligendi pariatur delectus atque odit reiciendis praesentium quasi hic! Omnis, explicabo ea atque quidem at odio nesciunt nobis cum excepturi? Veniam numquam aliquid totam odio!
                    </p>
                    <div className="links">
                        <a href="#" id="website" title="Visit Website">
                            <i className="fa-solid fa-link"></i>
                        </a>
                        <a href="#" id="github" title="Visit On Github">
                            <i className="fa-brands fa-github-alt" ></i>
                        </a>
                        <button id="gallery" title="Show Pics">
                            <GrGallery />
                        </button>
                    </div>
                </div>

                <div className="long-desc">
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi voluptatibus architecto? Ea dignissimos expedita recusandae adipisci sint quos, ipsum quas in enim quidem, numquam at blanditiis. Sit impedit ex necessitatibus et ullam accusamus eum aliquid nobis perferendis aut corrupti vero velit totam aperiam cum, architecto dolores, voluptatum laboriosam porro! Quis enim quaerat quidem modi culpa quasi ad, ratione cumque corporis saepe architecto praesentium beatae iure veniam tempore sed blanditiis ipsam voluptas aut reiciendis amet, quae ex.</p>

                    <ul>
                        <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea a consequuntur voluptatum assumenda sit.
                        </li>
                        <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea a consequuntur voluptatum assumenda sit.
                        </li>
                        <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea a consequuntur voluptatum assumenda sit.
                        </li>
                    </ul>
                    <h4>SOME PICTURES</h4>
                    <div className="P-wrapper">
                        <img src="https://mockuphunt.co/cdn/shop/products/The-Screen-Free-Perspective-PSD-Mockup-prev02_900x.jpg?v=1524658346" alt="website display" />
                        <img src="https://mockuphunt.co/cdn/shop/products/The-Screen-Free-Perspective-PSD-Mockup-prev02_900x.jpg?v=1524658346" alt="website display" />
                        <img src="https://mockuphunt.co/cdn/shop/products/The-Screen-Free-Perspective-PSD-Mockup-prev02_900x.jpg?v=1524658346" alt="website display" />
                        <img src="https://mockuphunt.co/cdn/shop/products/The-Screen-Free-Perspective-PSD-Mockup-prev02_900x.jpg?v=1524658346" alt="website display" />
                        <img src="https://mockuphunt.co/cdn/shop/products/The-Screen-Free-Perspective-PSD-Mockup-prev02_900x.jpg?v=1524658346" alt="website display" />
                        <img src="https://mockuphunt.co/cdn/shop/products/The-Screen-Free-Perspective-PSD-Mockup-prev02_900x.jpg?v=1524658346" alt="website display" />
                    </div>

                </div>

            </div> 
             <div className="gallery-container">
                <span className="close-gall">
                    X
                </span>
            </div>
        </div>
    )
}

export default Project


