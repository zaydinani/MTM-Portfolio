import React from "react";
import '../scss/Articles.scss';
import { BiSolidHomeSmile } from "react-icons/bi";
import author from '../assets/images/author.jpg'
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Articles = () => {
    const articleData = [
        {
            author: "Mohamed Marsou",
            date: "25 April 2023",
            category: "Front-End",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla officiis voluptate quia eaque.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam excepturi minus nulla. Tempora quas numquam necessitatibus, quibusdam saepe recusandae dolore est architecto, similique esse rerum! Reiciendis et expedita voluptate corrupti iusto. Necessitatibus quas ipsum ipsam ipsa incidunt, sint eaque blanditiis nam saepe?",
            hashtags: ["#lorem", "#lorem", "#lorem"],
            readTime: "12 min"
        },
        {
            author: "Mohamed Marsou",
            date: "25 April 2023",
            category: "Front-End",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla officiis voluptate quia eaque.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam excepturi minus nulla. Tempora quas numquam necessitatibus, quibusdam saepe recusandae dolore est architecto, similique esse rerum! Reiciendis et expedita voluptate corrupti iusto. Necessitatibus quas ipsum ipsam ipsa incidunt, sint eaque blanditiis nam saepe?",
            hashtags: ["#lorem", "#lorem", "#lorem"],
            readTime: "12 min"
        },
        {
            author: "Mohamed Marsou",
            date: "25 April 2023",
            category: "Front-End",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla officiis voluptate quia eaque.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam excepturi minus nulla. Tempora quas numquam necessitatibus, quibusdam saepe recusandae dolore est architecto, similique esse rerum! Reiciendis et expedita voluptate corrupti iusto. Necessitatibus quas ipsum ipsam ipsa incidunt, sint eaque blanditiis nam saepe?",
            hashtags: ["#lorem", "#lorem", "#lorem"],
            readTime: "12 min"
        },
    ];

    return (
        <div id="Articles-section">
            <header>
                <h1>Lorem, ipsum dolors.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est cum hic, ipsam vel sint quo neque veniam eum error, suscipit quasi sed. Ab nostrum nemo consectetur voluptate quaerat ipsam.</p>
                <ul>
                    <li>
                        <a href="#">
                            <BiSolidHomeSmile />
                            Home
                            &gt;
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                            &gt;
                        </a>
                    </li>
                    <li>
                        <span>
                            Articles
                        </span>
                    </li>
                </ul>
            </header>

            {articleData.map((article, index) => (
                <div className="article-wrapper" key={index}>
                    <div className="author">
                        <div className="img-box">
                            <img src={author} alt="Author" />
                            <div>
                                <span>{article.author}</span>
                                <p>{article.date}</p>
                            </div>
                        </div>
                        <div className="tag-box">
                            <h4>{article.category}</h4>
                        </div>
                    </div>
                    <div className="art-info">
                        <h2>
                            <a href="#">
                                {article.title}
                            </a>
                        </h2>
                        <p>{article.content}</p>
                        <div id="hashtags">
                            <div>
                                {article.hashtags.map((tag, tagIndex) => (
                                    <h5 key={tagIndex}>{tag}</h5>
                                ))}
                            </div>
                            <b id="etime">
                                <FaRegClock />
                                {article.readTime}
                            </b>
                        </div>
                    </div>
                    <div className="paginate-btn">
                        <Link to="/projects">
                            SHOW MORE
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Articles;
