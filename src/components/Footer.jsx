import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/bg-pattern.png';
import LogoImg from '../img/logo.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeEmailChange = (e) => {
    setSubscribeEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      alert(`Email submitted: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email.');
    }
  };

  const handleSubscribeEmailSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(subscribeEmail)) {
      alert(`Subscribed with: ${subscribeEmail}`);
      setSubscribeEmail('');
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="newsletter-content">
          <div>
            <p className="newsletter-title">NEWSLETTER</p>
            <h2>Подпишитесь на рассылку, чтобы получать последние новости</h2>
          </div>
          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Напишите ваш Email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleEmailSubmit}>Отправить</button>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>
          <p>Международный Конкурс Global IT Challenge – единственный в своем роде, который фокусируется исключительно на разработке ИИ</p>
          <div className="footer-social">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-dribbble"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li><Link to="/">Главная</Link></li>      
            <li><Link to="/winners">Победители</Link></li>
            <li><Link to="/jury">Жюри</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Информация</h3>
          <ul>
          <li><Link to="/articles">Новости</Link></li>
          <li><Link to="/criteria">Критерии оценки</Link></li>
          <li><Link to="/regulations">Положение</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Подпишитесь на нас</h3>
          <div className='footer-subscribe-text'>Подпишитесь на нашу еженедельную рассылку и получайте обновления по электронной почте</div>
          <div className="subscribe-input">
          <input
              type="email"
              placeholder="yourmail@gmail.com"
              value={subscribeEmail}
              onChange={handleSubscribeEmailChange}
            />
            <button onClick={handleSubscribeEmailSubmit}><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2020 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;