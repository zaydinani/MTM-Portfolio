import "../scss/Project.scss";
import { GrGallery } from "react-icons/gr";
import React, { useEffect, useState , useRef } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from "../data/projects";
import { Link } from "react-router-dom";
const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const displayRef = useRef(null);
    useEffect(() => {
        const foundProject = projectsData.find(proj => proj.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        }
        console.log(foundProject);
    }, [slug]);

    const scrollToGallery = () => {
        displayRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    

    if (!project) {
        return <div>Project not found</div>;
    }

    
    return (
        <div id="sp__box">

            <div className="single-project-section ">
                <h1 className="project-title ">
                    {project.title}
                </h1>
                <img src={project.coverImg} className="project-cover " alt="image" />

                <div className="description ">
                    <img src={project.secondaryImg} alt="image" />
                    <p>
                        {project.intro}
                    </p>
                    <div className="links">
                        <Link to={project.hostLink} id="website" title="Visit Website">
                            <i className="fa-solid fa-link"></i>
                        </Link>
                        <Link to={project.githubLink} id="github" title="Visit On Github">
                            <i className="fa-brands fa-github-alt" ></i>
                        </Link>
                        <button id="gallery" title="Show Pics" onClick={scrollToGallery}>
                            <GrGallery />
                        </button>
                    </div>
                </div>

                <div className="long-desc" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                <h1 id="gall">Gallery</h1>
                <div className="P-wrapper" id="display" ref={displayRef}> 
                    {project.images && project.images.map((image, index) => (
                        <img key={index} src={image} alt={`Project image ${index + 1}`} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Project


