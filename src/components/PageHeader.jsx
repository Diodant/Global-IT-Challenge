import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header-container">
      <h1 className="page-header-title">{title}</h1>
      <p className="page-header-breadcrumbs">
        <Link to="/">ГЛАВНАЯ</Link> &gt; {title.toUpperCase()}
      </p>
    </div>
  );
};

export default PageHeader;
