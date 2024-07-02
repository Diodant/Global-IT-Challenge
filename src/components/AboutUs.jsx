import React from 'react';
import PageHeader from './PageHeader'; 
import teamHeatImage from '../img/Teammates.png'; 
import NominationCategories from './NominationCategories';

const AboutUs = () => {
  return (
    <div>
      <PageHeader title="О конкурсе" />
      <div className="about-us-container">
        <section className="about-section">
          <h2>История создания конкурса Global IT Challenge</h2>
          <p>Конкурс Global IT Challenge – это уникальное международное соревнование, где лучшие IT-специалисты со всего мира соревнуются в создании передовых решений на основе искусственного интеллекта. Проводимый ежегодно с 2020 года, конкурс уже зарекомендовал себя как одно из самых престижных мероприятий в IT-индустрии, способствующее продвижению инноваций и развитию технологий будущего.</p>
          <p>К участию в конкурсе допускаются профессиональные IT специалисты с опытом работы не менее 2-х лет.</p>
        </section>
         <NominationCategories /> 
        <section className="about-section">
          <h2>Особенности конкурса</h2>
          <p>Международный Конкурс Global IT Challenge – единственный в своем роде, который фокусируется исключительно на разработке и применении искусственного интеллекта для решения актуальных проблем современности. Участие в нем предоставляет специалистам возможность не только продемонстрировать свои навыки и знания, но и внести реальный вклад в развитие технологий, которые меняют мир.</p>
          <p>Каждый год команды из трех участников, включая капитана, принимают вызов в различных номинациях, разрабатывая инновационные решения на основе ИИ. Эти номинации охватывают широкий спектр задач: от оценки образовательных программ и мониторинга состояния окружающей среды до предотвращения природных катастроф и оптимизации городских транспортных систем. Задания меняются ежегодно, отражая текущие вызовы и потребности общества.</p>
        </section>
        
        <section className="about-section">
          <h2>Международное признание и возможности</h2>
          <p>Конкурс Global IT Challenge имеет международное признание и является важной площадкой для обмена опытом и знаниями среди ведущих IT-специалистов. Участие в этом конкурсе – это не только почетно, но и открывает новые карьерные возможности, помогает установить ценные профессиональные связи и заявить о себе на мировом уровне.</p>
          <p>Организованный Global Association of IT Experts (GAITE), конкурс не только поощряет инновации, но и активно способствует развитию технологической культуры и движению будущего вперед. Участвуя в Global IT Challenge, специалисты становятся частью глобального сообщества, которое стремится сделать мир лучше с помощью передовых технологий и искусственного интеллекта.</p>
        </section>
        
        <div >
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
        
        <section className="about-section">
          {/* <h2>Заключение</h2> */}
          <p>Конкурс Global IT Challenge - это уникальная возможность для IT-специалистов проявить свои навыки и внести вклад в развитие технологий ИИ. Удачи всем участникам!</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
