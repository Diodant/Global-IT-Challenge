import React, { useState } from 'react';
import nominationImage from '../img/Nomination-Img.svg'; 

const nominationData = [
    {
      year: '2020 год',
      categories: [
        'ИИ для оценки образовательных программ',
        'ИИ для анализа медицинских изображений',
        'ИИ для управления городским трафиком'
      ]
    },
    {
      year: '2021 год',
      categories: [
        'Прогнозирование и предотвращение природных пожаров с помощью ИИ',
        'ИИ для финансового анализа и предсказаний',
        'ИИ для мониторинга окружающей среды'
      ]
    },
    {
      year: '2022 год',
      categories: [
        'ИИ на страже качества российских товаров',
        'ИИ для медицинской диагностики',
        'ИИ для предсказания и предотвращения кибератак'
      ]
    },
    {
      year: '2023 год',
      categories: [
        'ИИ для оптимизации транспортных потоков',
        'ИИ для прогнозирования экономических трендов',
        'ИИ для анализа и управления энергетическими системами'
      ]
    },
    {
      year: '2024 год',
      categories: [
        'ИИ для управления водными ресурсами',
        'ИИ для анализа и предсказания потребительского поведения',
        'ИИ для мониторинга и улучшения состояния здоровья населения'
      ]
    }
  ];
  
  const NominationCategories = () => {
    const [selectedYear, setSelectedYear] = useState(nominationData[0]);

    const handleYearChange = (yearIndex) => {
      setSelectedYear(nominationData[yearIndex]);
    };

    return (
        <div className='nomination-block'>
            <h1 className="nomination-title">Категории номинаций</h1>
      <div className="nomination-section">
      
        <div className="nomination-text">
        
          <div className="year-buttons">
            {nominationData.map((yearData, index) => (
              <button 
                key={index} 
                onClick={() => handleYearChange(index)}
                className={`year-button ${selectedYear.year === yearData.year ? 'active' : ''}`}
              >
                {yearData.year}
              </button>
            ))}
          </div>
          <div className="nomination-year">
            <h2 className="nomination-year-heading">{selectedYear.year}</h2>
            <div className="nomination-categories">
              {selectedYear.categories.map((category, idx) => (
                <div key={idx} className="nomination-category">{category}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="nomination-image">
          <img src={nominationImage} alt="Nomination" />
        </div>
      </div>
      </div>
    );
  };
  
  export default NominationCategories;
