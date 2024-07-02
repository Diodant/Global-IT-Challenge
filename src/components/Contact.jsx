import React from 'react';

const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Контакты</h2>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <div>
              <h3>Адрес:</h3>
              <p>198826, Россия, Москва, поселение Филимонковское, деревня Бурцево, 5-й Новобурцевский переулок, дом 15</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-building contact-icon"></i>
            <div>
              <h3>ИНН/КПП:</h3>
              <p>7720859286/775101001</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone contact-icon"></i>
            <div>
              <h3>Телефон:</h3>
              <p>+7(499) 290-5005</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <div>
              <h3>Email:</h3>
              <p>globalitchallenge2020@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;