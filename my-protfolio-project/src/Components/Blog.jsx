import React from "react";
import "../scss/Blog.scss";
import { Link } from 'react-router-dom';

const Blog = () => {
    // Dummy data for articles
    const articles = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur.',
            imageUrl: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nobis quos sed consequuntur ex quae quaerat. Nulla culpa laudantium perspiciatis. Magni molestiae quisquam doloribus sint!...',
            tags: ['#Frontend', '#Reactjs'],
            date: '15 min read',
            classType: 'full'
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNLEqNUXbu_GNn6jJvgN9Or_0KMVZt47em5rnVCS4NeRK2q3eDBUKXk-HSXnN5nfUw2s&usqp=CAU',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nobis quos sed consequuntur ex quae quaerat. Nulla culpa laudantium perspiciatis. Magni molestiae quisquam equuntur ex quae quaerat. Nulla culpa laudantium perspiciatis. Magni modoloribus sint!...',
            tags: ['#Frontend', '#Reactjs'],
            date: '10 min read',
            classType: 'coll'
        },

    ];

    return (
        <section id="blog">
            <div className="articles-container">
                <h2>Recent Posts</h2>

                {articles.map((article) => (
                    <article key={article.id} className={article.classType}>
                        <a href="#">
                            <img src={article.imageUrl} alt="BLOG IMG" className="article-img" />
                        </a>
                        <div className="article-wrapper">
                            <div className="content">
                                <a href="#">
                                    <h1>{article.title}</h1>
                                </a>
                                <p>{article.content}</p>
                            </div>
                            <div className="article-gen-info">
                                {article.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                                <div className="date">
                                    {article.date}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
                <div className="paginate-btn">
                    <Link to="/blog">
                        SHOW MORE
                    </Link>
                </div>
        </section>
    );
};

export default Blog;
