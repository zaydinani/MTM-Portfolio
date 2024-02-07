import '../scss/Projects.scss';

const Projects = () => {
    const divs = Array(3).fill(null);
    return (
        <div id="projects-conatiner">
            <div className="subs-wrapper">
                <p>Be the first to know! Subscribe for the latest news , projects and more ...</p>
                <div className="formWrapper">
                    <input type="email" placeholder='Email Address' />
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="project-boxes">
                <header>
                    <p>Some Things I’ve Built</p>
                </header>

                {divs.map((_, index) => (

                    <div key={index} className="project-main-box">
                        <a href="#">
                            <img src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/healthy/img.png" alt="" />
                        </a>
                        <p>#Full Stack</p>
                        <h2>
                            <a href="#">
                                E-commerce website Vuejs/Larvel
                            </a>
                        </h2>
                        <h4>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta odit molestias quis provident fugit!....
                        </h4>
                        <div className="date_extra-links">

                            <p>
                                27 June 2023
                            </p>
                            <div>
                            <a href="#">
                                <i class="fa-solid fa-link"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-github-alt"></i>
                            </a>
                            </div>
                        </div>
                        <div className="full-screen-view">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
                ))}
                <div className="paginate-btn">
                    <button>SHOW MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Projects