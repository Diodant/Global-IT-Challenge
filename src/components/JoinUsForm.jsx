import React, { useState } from 'react';

const JoinUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && message) {
      setIsSubmitted(true);
      console.log({ name, email, phone, message });
    }
  };

  return (
    <div className="join-us-form-container">
      <h2>Присоединяйтесь к нам</h2>
      {isSubmitted ? (
        <p className="success-message">Спасибо, что присоединились к нам! Мы скоро свяжемся с вами.</p>
      ) : (
        <form onSubmit={handleSubmit} className="join-us-form">
          <div className="form-group">
            <label htmlFor="name">ФИО</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className='join-us-button' type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default JoinUsForm;
