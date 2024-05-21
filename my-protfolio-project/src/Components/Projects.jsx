import '../scss/Projects.scss';
import { Link } from 'react-router-dom';
import DATA from '../data/projects'

const Projects = () => {
  return (
    <div id="projects-container">
      <div className="subs-wrapper">
        <p>Be the first to know! Subscribe for the latest news, projects and more ...</p>
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

        {/* Mapping through fake project data */}
        {DATA.map((project, index) => (
          <div key={index} className="project-main-box">
            <Link to={`/project/${project.slug}`} className="project-link">
              <img src={project.coverImg} alt={project.slug} className="project-image" />
            </Link>
            <p className="project-type">{project.tag}</p>
            <h2 className="project-title">
              <Link to={`/project/${project.slug}`} className="project-link">
                {project.title}
              </Link>
            </h2>
            <h4 className="project-description">
              {project.intro.length > 120 ? `${project.intro.substring(0, 120)}...` : project.intro}
            </h4>
            <div className="date_extra-links">
              <p className="project-date">{project.date}</p>
              <div className="project-links">
                <a href={project.externalLink} className="project-link">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href={project.githubLink} className="project-link">
                  <i className="fa-brands fa-github-alt"></i>
                </a>
              </div>
            </div>
            <div className="full-screen-view">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
        ))}
        <div className="paginate-btn">
          <Link to="/projects" className="project-link">
            SHOW MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
