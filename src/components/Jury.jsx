import React, { useState } from 'react';
import PageHeader from './PageHeader';
import JuryPhoto1 from '../img/jury/jury1.jpg';
import JuryPhoto2 from '../img/jury/jury2.jpg';
import JuryPhoto3 from '../img/jury/jury3.jpg';
import JuryPhoto4 from '../img/jury/jury4.jpeg';
import JuryPhoto5 from '../img/jury/jury5.jpg';
import JuryPhoto6 from '../img/jury/jury6.jpg';
import JuryPhoto7 from '../img/jury/jury7.jpg';
import JuryPhoto8 from '../img/jury/jury8.jpg';
import JuryPhoto9 from '../img/jury/jury9.jpeg';
import JuryPhoto10 from '../img/jury/jury10.jpg';

const juryData = {
  '2020': [
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
    }
  ],
  '2021': [
    {
      name: 'Иван Петров',
      country: 'Беларусь',
      description: 'Доктор наук в области искусственного интеллекта, профессор университета DEF. Руководил многочисленными международными проектами по разработке ИИ-систем.',
      photo: JuryPhoto3
    },
    {
      name: 'Ольга Смирнова',
      country: 'Казахстан',
      description: 'Главный научный сотрудник в компании GHI, специализируется на разработке алгоритмов глубокого обучения. Обладатель множества наград за вклад в развитие технологий ИИ.',
      photo: JuryPhoto4
    }
  ],
  '2022': [
    {
      name: 'Сергей Иванов',
      country: 'Узбекистан',
      description: 'Эксперт по анализу больших данных и машинному обучению, работающий в компании JKL. Имеет более 8 лет опыта в разработке ИИ-приложений для промышленности и энергетики.',
      photo: JuryPhoto5
    },
    {
      name: 'Анна Белова',
      country: 'Армения',
      description: 'Руководитель отдела исследований и разработок в компании MNO. Специализируется на применении ИИ в здравоохранении и биотехнологиях, автор ряда научных публикаций и изобретений.',
      photo: JuryPhoto6
    }
  ],
  '2023': [
    {
      name: 'Дмитрий Павлов',
      country: 'Грузия',
      description: 'Ведущий исследователь в компании PQR, эксперт в области нейронных сетей и их применении в реальном времени. Руководитель нескольких крупных проектов по внедрению ИИ в телекоммуникациях.',
      photo: JuryPhoto7
    },
    {
      name: 'Елена Мельникова',
      country: 'Россия',
      description: 'Специалист по кибербезопасности и ИИ, работающая в компании STU. Имеет более 7 лет опыта в разработке систем защиты на основе искусственного интеллекта.',
      photo: JuryPhoto8
    }
  ],
  '2024': [
    {
      name: 'Алексей Тихонов',
      country: 'Украина',
      description: 'Профессор и заведующий кафедрой искусственного интеллекта в университете VWX. Обладатель множества наград за научные достижения и внедрение ИИ в образование.',
      photo: JuryPhoto9
    },
    {
      name: 'Виктория Сидорова',
      country: 'Беларусь',
      description: 'Руководитель исследовательской группы в компании YZA, специализирующаяся на применении ИИ в агротехнологиях. Имеет богатый опыт в разработке инновационных решений для сельского хозяйства.',
      photo: JuryPhoto10
    }
  ]
};

const Jury = () => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const juryMembers = juryData[selectedYear];

  return (
    <div>
      <PageHeader title="Жюри" />
      <div className="jury-container">
        <div className='jury-title'>Жюри конкурса Global IT Challenge</div>
        <div className='jury-text'>Жюри конкурса Global IT Challenge состоит из выдающихся специалистов, признанных лидеров в области искусственного интеллекта. Их профессионализм и многолетний опыт работы с передовыми технологиями делают их идеальными кандидатами для оценки и признания лучших решений. Быть членом жюри этого престижного конкурса – это не только большая честь, но и подтверждение высокого уровня компетентности и достижений в сфере ИИ.</div>
        <div className="year-buttons1">
          {Object.keys(juryData).map((year) => (
            <button
              key={year}
              className={`year-button1 ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
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
  );
};

export default Jury;
