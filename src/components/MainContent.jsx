import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/bg.png';
import centerImage from '../img/banner-overlay.svg';
import bottomImage from '../img/banner-btm.png';
import teamHeatImage from '../img/Teammates.png'; 
import JuryPhoto1 from '../img/jury/jury1.jpg';
import JuryPhoto2 from '../img/jury/jury2.jpg';
import JuryPhoto3 from '../img/jury/jury3.jpg';
import Articles1 from '../img/articles/Articles1.png';
import Articles2 from '../img/articles/Articles2.jpg';
import Articles3 from '../img/articles/Articles3.png';
import Sponsor1 from '../img/sponsors/Sponsor1.png';
import Sponsor2 from '../img/sponsors/Sponsor2.svg';
import Sponsor3 from '../img/sponsors/Sponsor3.svg';
import Sponsor4 from '../img/sponsors/Sponsor4.svg';
import Sponsor5 from '../img/sponsors/Sponsor5.png';
import PhotoGallery from './PhotoGallery';

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

  const articlesData = [
    {
      id: 1,
      category: 'Programming languages',
      title: 'Ключевые "soft skills" для разработчиков в 2024 году',
      author: 'Александр Морозов',
      description: 'Современные IT-компании все больше подчеркивают развитие «soft» навыков у сотрудников. Эти навыки не менее важны, чем технические умения, и могут повысить эффективность работы команд.',
      date: '20 мая 2024',
      image: Articles1,
      content: [
        { type: 'paragraph', text: 'Современные IT-компании все больше подчеркивают развитие «soft» навыков у сотрудников. Эти навыки не менее важны, чем технические умения, и могут повысить эффективность работы команд.' },
        { type: 'header', text: 'Почему разработчикам важны мягкие навыки?' },
        { type: 'paragraph', text: 'Проекты стали коллективными, требуя от участников эффективного взаимодействия и сотрудничества.' },
        { type: 'paragraph', text: 'Развитие мягких навыков помогает разработчикам вписаться в высококлассные команды, где важны организация и умение строить отношения с коллегами.' },
        { type: 'paragraph', text: 'Эти навыки также способствуют личной эффективности, помогая лучше управлять временем и эмоциями.' },
        { type: 'paragraph', text: 'Исследование McKinsey показало, что способность к трудоустройству и удовлетворенность работой зависят от личностных качеств. Таким образом, разработчикам следует развивать свои мягкие навыки, чтобы оставаться конкурентоспособными.' },
        { type: 'header', text: 'Пять ключевых мягких навыков для разработчиков' },
        { type: 'paragraph', text: 'Эмпатия – это умение испытывать и понимать эмоции других людей. В IT-сфере это качество помогает создавать продукты, лучше отвечающие потребностям пользователей. Разработчики, обладающие эмпатией, могут лучше понять, чего хотят пользователи и создать более качественные решения.' },
        { type: 'paragraph', text: 'Работа в IT часто связана со стрессом: дедлайны, изменения требований, сложные задачи. Развитие психологической стойкости помогает справляться с этими вызовами. Это особенно важно для руководителей команд, которые должны принимать решения по неопределенности и поддерживать своих коллег.' },
        { type: 'paragraph', text: 'Наставничество становится все более популярным в IT-компаниях. Наставники передают свои знания и опыт молодым специалистам, ускоряя их развитие. Для менторов это возможность укрепить свои навыки и увеличить свой статус в компании. Наставничество развивает умение общаться, объяснять сложные концепции и давать конструктивную обратную связь.' },
        { type: 'paragraph', text: 'Эффективное общение – залог успешной работы в команде. Разработчики часто участвуют в митапах, хакатонах и онлайн-встречах, где важно умение договариваться и решать проблемы сообща. В распределенных командах хорошие коммуникационные навыки помогают поддерживать взаимопонимание и уверенность в коллегах.' },
        { type: 'paragraph', text: 'Обратная связь – важный элемент для улучшения процессов и командной работы. В IT-компаниях он помогает обнаруживать проблемы и улучшать атмосферу в коллективе. Умение давать и принимать конструктивную обратную связь способствует эффективному взаимодействию и профессиональному росту.' },
        { type: 'header', text: 'Вывод' },
        { type: 'paragraph', text: 'Развитие мягких навыков становится необходимым для современных разработчиков. Эмпатия, психологическая стойкость, наставничество, коммуникационные навыки и способность давать обратную связь помогают добиваться успеха в IT-сфере. Инвестиции в развитие этих навыков окупаются многократно, делая команды более продуктивными и эффективными.' },

      ]
    },
    {
      id: 2,
      category: 'Blockchain',
      title: 'Блокчейн-технологии: основы разработки и практическое применение',
      author: 'Андрей Волков',
      description: 'Блокчейн технологии за последние годы вышли далеко за рамки первоначального применения в криптовалютах, таких как Bitcoin и Ethereum. Давайте погрузимся в эту сферу и узнаем больше информации.',
      date: '10 марта 2024',
      image: Articles2,
      content: [
        { type: 'paragraph', text: 'Блокчейн технологии за последние годы вышли далеко за рамки первоначального применения в криптовалютах, таких как Bitcoin и Ethereum. Давайте погрузимся в эту сферу и узнаем больше информации. Сегодня блокчейн находит свое применение в разных отраслях, включая управление цепями поставок, здравоохранение, финансы и даже государственное управление. Эта статья расскажет о базовых принципах блокчейна, его разработке и практическом использовании, а также предоставит примеры кода для лучшего понимания технологии.' },
        { type: 'header', text: 'Основы блокчейна' },
        { type: 'paragraph', text: 'Блокчейн представляет собой распределенную базу данных, поддерживающую постоянно растущий список записей, называемых блоками. Каждый блок содержит криптографический хэш предыдущего блока, временную метку и данные транзакции. Данные в каждом блоке не могут быть изменены без изменения всех последующих блоков, что делает блокчейн чрезвычайно безопасным.' },
        { type: 'header', text: 'Разработка блокчейн приложений' },
        { type: 'paragraph', text: 'Разработка блокчейн-приложений обычно начинается с выбора соответствующей платформы. Ethereum является одной из самых популярных платформ для создания децентрализованных приложений (DApps) благодаря поддержке смарт-контрактов, позволяющих разработчикам писать код, который автоматически выполняется при выполнении условий контракта.' },
        { type: 'header', text: 'Практическое применение блокчейна' },
        { type: 'paragraph', text: 'Одним из наиболее интересных направлений использования блокчейна является управление цепями поставок. Компании могут использовать блокчейн для создания прозрачной и неизменной записи о происхождении товаров, что значительно упрощает проверку подлинности и соблюдение стандартов качества. Примером может служить система, отслеживающая путь питания от фермера к потребителю, улучшающая безопасность и информированность покупателя.' },
        { type: 'header', text: 'Вывод' },
        { type: 'paragraph', text: 'Блокчейн технологии открывают новые возможности для создания надежных и прозрачных систем в различных отраслях. Разработка блокчейн-приложений требует понимания как криптографических основ технологии, так и специфических для платформы аспектов программирования. Продолжение исследования и экспериментирования с блокчейном способствует расширению горизонтов его внедрения, внося значимый вклад в цифровую экономику грядущего.' },


      ]
    },
    {
      id: 3,
      category: 'Programming languages',
      title: 'Обзор рынка: Топ-8 языков программирования в 2024 году',
      author: 'Никита Мировнов',
      description: 'Исследование, проведенное компанией DevJobsScanner на основе анализа 14 миллионов вакансий, выявило ведущие тенденции в мире IT-специальностей, акцентируя внимание на восьми наиболее востребованных языках.',
      date: '03 февраля 2024',
      image: Articles3,
      content: [
        { type: 'paragraph', text: 'Исследование, проведенное компанией DevJobsScanner на основе анализа 14 миллионов вакансий, выявило ведущие тенденции в мире IT-специальностей, акцентируя внимание на восьми наиболее востребованных языках.' },
        { type: 'header', text: 'Процесс исследования' },
        { type: 'paragraph', text: 'Информация для анализа была собрана DevJobsScanner путем фильтрации вакансий по названиям. Заголовки, ясно указывая на конкретный язык программирования, например "Разработчик на Java", помогли определить специализированные вакансии. Объявления без указания специфических технологий в заглавии не были включены в анализ. Этот подход позволил точно сосредоточиться на спросе на языки программирования. Исследование представляет не просто снимок текущего состояния рынка, но и прогнозирование тенденций на 2024 год.' },
        { type: 'header', text: 'JavaScript/TypeScript' },
        { type: 'paragraph', text: 'JavaScript доминирует на рынке с более чем 915 000 вакансий, занимая около 29% от всех предложений. Этот язык стал почти синонимом фронтенд-разработки благодаря своей доступности и простоте. Кроме того, многие доступные фреймворки и библиотеки, такие как React, Angular, Vue.js и Node.js, делают его незаменимым инструментом в арсенале современного разработчика. TypeScript, усовершенствующий JavaScript за счет добавления строгой типизации, также находит свое место в этом списке, становясь все более популярным в больших фреймворках.' },
        { type: 'header', text: 'Python' },
        { type: 'paragraph', text: 'Следующим в списке идет Python, занявший второе место с 603,000 вакансиями. Это примерно 20% всего рынка. Python зарекомендовал себя как мощный, но интуитивно понятный инструмент для программистов всех уровней. Он используется в самых разных сферах, от веб-разработки до научных исследований и анализа данных, благодаря своей универсальности и богатой экосистеме фреймворков и библиотек.' },
        { type: 'header', text: 'Java' },
        { type: 'paragraph', text: 'Java занимает третье место с 546,000 вакансиями, что составляет примерно 17% от всех предложений. Ее кроссплатформенность и богатая стандартная библ иотека обеспечивают Java место в списке топ-языков на долгие годы. Java также имеет отличные возможности для многопоточной работы и остается востребованной во многих крупных и сложных проектах.' },
        { type: 'header', text: 'C#' },
        { type: 'paragraph', text: 'C# занимает четвертую позицию из 375,000 упоминаний в вакансиях, что составляет примерно 12% от общего количества. Этот язык отличается своей универсальностью и подходит для создания разнообразных приложений – от веб-сайтов до мобильных приложений и игр. В основе ее популярности лежит фреймворк .NET, предоставляющий мощные инструменты для разработчиков.' },
        { type: 'header', text: 'PHP' },
        { type: 'paragraph', text: 'PHP, язык, лежащий в основе многих веб-сайтов, находится на пятом месте с 288 000 вакансиями. Он имеет устойчивый спрос в индустрии благодаря своей простоте и эффективности. Широкое применение PHP в популярных веб-проектах делает его ценным навыком для веб-разработчиков.' },
        { type: 'header', text: 'C/C++' },
        { type: 'paragraph', text: 'C и C++ остаются среди лидеров с 280 000 вакансиями. Эти языки выделяются своей способностью к созданию высокопроизводительных и масштабируемых приложений, работающих на разных платформах. Их гибкость и мощность делают их незаменимыми в областях, где требуется тщательная оптимизация и контроль над ресурсами.' },
        { type: 'header', text: 'Ruby' },
        { type: 'paragraph', text: 'Ruby, с его 134 000 вакансиями, демонстрирует свою устойчивость на рынке, занимая прочное место в секторе веб-разработки. Ruby on Rails и Sinatra — два популярных фреймворка, которые продолжают привлекать разработчиков благодаря своей простоте и мощным возможностям для создания веб-приложений.' },
        { type: 'header', text: 'Go' },
        { type: 'paragraph', text: 'Наконец, Go, появившийся в 2009 году и завоевавший уверенное место в индустрии с 58 000 вакансиями. Go особенно ценится за свою скорость и поддержку конкурентности, что делает его идеальным выбором для разработки современных многопользовательских и высоконагруженных приложений.' },

      ]
    },
  ];

  const sponsorsData = [
    { id: 1, name: 'GitHub', image: Sponsor1 },
    { id: 2, name: 'Envato', image: Sponsor2 },
    { id: 3, name: 'Sketch', image: Sponsor3 },
    { id: 4, name: 'Figma', image: Sponsor4 },
    { id: 5, name: 'DoorDash', image: Sponsor5 },
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
              ПОДАТЬ ЗАЯВКУ
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

        <div className="articles-main-container">
                {articlesData.map((article, index) => (
                    <div key={index} className="article-card">
                        <img src={article.image} alt={article.title} className="article-image" />
                        <div className="article-date-tag">{article.date}</div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span className="article-category">
                                    <i className="fas fa-bookmark"></i> {article.category}
                                </span>
                            </div>
                            <h2 className="article-title">
                                <Link to={`/articles/${article.id}`}>{article.title}</Link>
                            </h2>
                            <p className="article-description">{article.description}</p>
                            <Link to={`/articles/${article.id}`} className="article-read-more">
                                ПОДРОБНЕЕ <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
      </div>

      <div className='sponsor-block'>
                <div className='jury-main-title'>Спонсоры конкурса</div>
            <div className="sponsors-container">
        {sponsorsData.map((sponsor) => (
          <div key={sponsor.id} className="sponsor">
            <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
          </div>
        ))}
      </div>
      </div>

      <div className='photo-cont'>
      <h1 className='jury-main-title'>Фотогалерея</h1>
      <PhotoGallery />
    </div>
        
    </div>
  );
};

export default MainContent;
