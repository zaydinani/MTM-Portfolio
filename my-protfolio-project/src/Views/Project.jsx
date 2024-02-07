import "../scss/Project.scss";
import { GrGallery } from "react-icons/gr";
const Project = () => {
    return (
        <div id="sp__box">

            <div className="single-project-section blur">
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
                            <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="#" id="github" title="Visit On Github">
                            <i class="fa-brands fa-github-alt" ></i>
                        </a>
                        <button id="gallery" title="Show Pics">
                            <GrGallery />
                        </button>
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


