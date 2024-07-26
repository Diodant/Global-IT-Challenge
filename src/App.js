import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Criteria from './components/Criteria';
import Regulations from './components/Regulations';
import Jury from './components/Jury';
import Winners from './components/Winners';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Footer from './components/Footer';
import JoinUsForm from './components/JoinUsForm';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/criteria" element={<Criteria />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/join" element={<JoinUsForm />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      {location.pathname !== '/join' && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
