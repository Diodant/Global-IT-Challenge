import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Criteria from './components/Criteria';
import Regulations from './components/Regulations';
import Jury from './components/Jury';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/criteria" element={<Criteria />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        
        <Route path="/winners" element={<Winners />} />
        <Route path="/documents" element={<Documents />} />
       
        <Route path="/evaluation-criteria" element={<EvaluationCriteria />} />

        <Route path="/join" element={<JoinForm />} />
        <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
