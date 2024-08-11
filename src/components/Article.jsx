import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';
import PageHeader from './PageHeader';

const Article = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index}>{block.text}</p>;
        case 'header':
          return <h5 key={index}>{block.text}</h5>;
        case 'image':
          return <img key={index} src={block.src} alt={block.alt} className="article-page-image" />;
        case 'list':
          return <ul className='art-list'>
            <li key={index}>{block.text}</li>
            </ul>
        default:
          return null;
      }
    });
  };

  return (
    <div>
      <PageHeader title="Новости & Статьи" />
      <div className="article-page">
        <h1 className="article-page-title">{article.title}</h1>
        <p className="article-page-date">{article.date}</p>
        <img src={article.image} alt={article.title} className="article-page-image" />
        <div className="article-page-content">
          {renderContent(article.content)}
        </div>
        <p className="article-page-author">{article.author}</p>
      </div>
    </div>
  );
};

export default Article;
