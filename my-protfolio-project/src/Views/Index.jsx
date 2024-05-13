import '../scss/Index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Nav from '../Components/Nav';
import Home from './Home';
import Footer from '../Components/Footer';
import Articles from './Articles';
import Projects from './Projects';
import Project from './Project';
import Article from './Article';
import ScrollToTop from '../js/scrollToTop';

const Main = () => {
    return (
         <Router>
             <ScrollToTop />
            <section>
                <Nav />
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Articles />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:slug" element={<Project />} />
                    <Route path="/blog/:slug" element={<Article />} />
                </Routes>
                <Footer />
                <div className='void'></div>
            </section>
        </Router>
    );
};

export default Main;
