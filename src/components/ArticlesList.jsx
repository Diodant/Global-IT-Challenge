import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 
import PageHeader from './PageHeader';

const ArticlesList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <PageHeader title="Новости" />
            <div className="articles-container">
                {articlesData.map((article, index) => (
                    <div key={index} className="article-card">
                        <img src={article.image} alt={article.title} className="article-image" />
                        <div className="article-date-tag">{article.date}</div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span className="article-category">
                                    <i className="fas fa-bookmark"></i> {article.category}
                                </span>
                                {/* <span className="article-author">{article.author}</span> */}
                            </div>
                            <h2 className="article-title">
                                <Link to={`/articles/${article.id}`}>{article.title}</Link>
                            </h2>
                            <p className="article-description">{article.description}</p>
                            <Link to={`/articles/${article.id}`} className="article-read-more">
                                READ MORE <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesList;
