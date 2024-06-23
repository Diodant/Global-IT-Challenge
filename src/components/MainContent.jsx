import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/bg.png';
import centerImage from '../img/banner-overlay.svg';
import bottomImage from '../img/banner-btm.png';
import teamHeatImage from '../img/Teammates.png'; 
import JuryPhoto1 from '../img/jury/jury1.jpg';
import JuryPhoto2 from '../img/jury/jury2.jpg';
import JuryPhoto3 from '../img/jury/jury3.jpg';


const juryMembers = 
  [
    {
      name: 'Андрей Сидоров',
      country: 'Россия',
      description: 'Ведущий специалист по искусственному интеллекту с более чем 10-летним опытом. Руководитель исследовательской группы в компании XYZ, автор множества публикаций и патентов в области ИИ.',
      photo: JuryPhoto1
    },
    {
      name: 'Мария Кузнецова',
      country: 'Украина',
      description: 'Эксперт по машинному обучению и анализу данных, работающая в компании ABC. Имеет богатый опыт в разработке и внедрении ИИ-решений в различных отраслях, включая медицину и финтех.',
      photo: JuryPhoto2
    },
    {
      name: 'Иван Петров',
      country: 'Беларусь',
      description: 'Доктор наук в области искусственного интеллекта, профессор университета DEF. Руководил многочисленными международными проектами по разработке ИИ-систем.',
      photo: JuryPhoto3
    },

  ];

const MainContent = () => {
  return (
    <div>
      <div className="main-content-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content-overlay">
          <div className="text-block">
            <p className="small-heading">Создаем будущее с AI</p>
            <h1 className="main-heading">Global IT Challenge</h1>
            <p className="description">Конкурс Global IT Challenge – это уникальное международное соревнование, где лучшие IT-специалисты со всего мира соревнуются в создании передовых решений на основе искусственного интеллекта.</p>
            <div className="buttons">
              <Link to="/about" className="button-link get-started-button">
                О конкурсе
              </Link>
              <Link to="/join" className="button-link watch-now-button">
                Вступить
              </Link>
            </div>
          </div>
        </div>
        <img src={centerImage} alt="Center" className="center-image" />
        <img src={bottomImage} alt="Bottom" className="bottom-image" />
      </div>
      
      <div className="team-heat-section">
        <h2 className="team-heat-title">Цели Global IT Challenge:</h2>
        <div className="team-heat-content">
          <div className="team-heat-text">
            <ul>
              <li>
                <h3>Продвигать инновации</h3>
                <p>Содействие развитию технологий ИИ и их внедрение в различные отрасли</p>
              </li>
              <li>
                <h3>Поддержка</h3>
                <p>Поддержка талантливых IT-специалистов и команд</p>
              </li>
              <li>
                <h3>Международное сообщество</h3>
                <p>Формирование международного сообщества профессионалов в области ИИ</p>
              </li>
            </ul>
          </div>
          <div className="team-heat-image">
            <img src={teamHeatImage} alt="Team Heat" />
          </div>
        </div>
      </div>
      <div className='jury-main-color'>
      <div className="jury-main-container">
        <div className='jury-main-cont'>
          <div className='jury-main-left'>
            <div className='section-title'>Наша команда</div>
          <div className='jury-main-title'>Жюри прошлых лет</div>
          <div className='jury-main-text'>Жюри конкурса Global IT Challenge состоит из выдающихся специалистов, признанных лидеров в области искусственного интеллекта.</div>
          </div>

        <div>
        <div className="jury-buttons">
              <Link to="/jury" className="jury-button">
                Больше о жюри
              </Link>
            </div>
        </div>
        </div>

        <div className="jury-members">
          {juryMembers.map((member, index) => (
            <div key={index} className="jury-member">
              <img src={member.photo} alt={member.name} className="jury-photo" />
              <h3 className='jury-name'>{member.name}</h3>
              <p className="jury-country">{member.country}</p>
              <p className="jury-description">{member.description}</p>
            </div>
          ))}
        </div>

      </div>
      </div>
      <div className="jury-main-container">
        <div className='jury-main-cont'>
          <div className='jury-main-left'>
            <div className='section-title'>Наши новости</div>
          <div className='jury-main-title'>Новости & Статьи</div>
          <div className='jury-main-text'>Global IT Challenge предоставляют свежие и актуальные новости из мира IT и технологий, а также глубокие аналитические статьи и обзоры. Оставайтесь в курсе последних тенденций и инноваций, влияющих на развитие индустрии.</div>
          </div>

        <div>
        <div className="jury-buttons">
              <Link to="/articles" className="jury-button">
                Больше новостей
              </Link>
            </div>
        </div>
        </div>

        {/* <div className="jury-members">
          {juryMembers.map((member, index) => (
            <div key={index} className="jury-member">
              <img src={member.photo} alt={member.name} className="jury-photo" />
              <h3 className='jury-name'>{member.name}</h3>
              <p className="jury-country">{member.country}</p>
              <p className="jury-description">{member.description}</p>
            </div>
          ))}
        </div> */}

      </div>
    </div>
  );
};

export default MainContent;
