import React from "react";
import "../scss/Blog.scss";
import { useState, useEffect } from "react";
import API_ENDPOINT from "../js/config";
import axios from "axios";
import { Link } from 'react-router-dom';

const Blog = () => {

    const [articlesData, setArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Make API request using Axios to fetch all posts
                const response = await axios.get(`${API_ENDPOINT}/posts`);
                console.log(response.data);
                // Extract the necessary data from each post
                const processedArticles = await Promise.all(response.data.map(async (article) => {
                    // Extract media link for cover image
                    const mediaLink = article["_links"]["wp:featuredmedia"][0]["href"];
                    const mediaLinkId = mediaLink.substring(mediaLink.lastIndexOf("/") + 1);
    
                    // Make API request to fetch the cover image URL
                    const mediaResponse = await axios.get(`${API_ENDPOINT}/media/${mediaLinkId}`);
    
                    // Fetch tag names associated with tag IDs
                    const tagNames = await Promise.all(article.tags.map(async (tagId) => {
                        const tagResponse = await axios.get(`${API_ENDPOINT}/tags/${tagId}`);
                        return tagResponse.data.name;
                    }));
                    const formattedDate = new Date(article.date).toISOString().split('T')[0];
                    // Construct the new object with all required data
                    return {
                        id: article.id,
                        date: formattedDate,
                        slug: article.slug,
                        title: article.title.rendered,
                        excerpt: article.excerpt.rendered.length > 150 ? article.excerpt.rendered.substring(0, 150) + "..." :article.excerpt.rendered ,
                        tags: tagNames,
                        imageUrl: mediaResponse.data.guid.rendered
                    };
                }));
                // Set the processed articles data to state
                setArticlesData(processedArticles);
                setLoading(false)

            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
    
        fetchArticles();
    }, []);

    useEffect(() => {
        console.log(articlesData);
    },[articlesData])
    return (
        <section id="blog">
            {loading ? (
                <div className="loader-comp-container">
                    <span className="comp-loader"></span>
                </div>
            ):(
            <div className="articles-container">
                <h2>Recent Posts</h2>
                {articlesData.map((article, index) => (
                    <article key={article.id} className={article.classType}>
                        <Link to={`/blog/${article.slug}`}>
                            {/* Render the cover image */}
                            <img src={article.imageUrl} alt="BLOG IMG" className="article-img" />
                        </Link>
                        <div className="article-wrapper">
                            <div className="content">
                                <Link to={`/blog/${article.slug}`}>
                                    <h1>{article.title.length > 35 ? article.title.substring(0, 35) + "..." : article.title}</h1>
                                </Link>
                                {/* Render the excerpt if needed */}
                                <p dangerouslySetInnerHTML={{ __html: article.excerpt }}></p>
                            </div>
                            <div className="article-gen-info">
                                {/* Render tags */}
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
            )}
            <div className="paginate-btn">
                <Link to="/blog">
                    SHOW MORE
                </Link>
            </div>
            
        </section>
    );
};

export default Blog;
