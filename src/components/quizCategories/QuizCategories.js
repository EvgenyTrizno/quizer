import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import QuizerServices from '../../services/quizerServices';

import './QuizCategories.scss';

const QuizCategories = ({setCategoryForSurvey}) => {
    const [data, setData] = useState([]);
    const { getCategories } = QuizerServices();

    useEffect(() => {
        getCategories()
            .then(res => setData(res));
    }, []);
    
    return (
        <div className="categories">
            <div className="container">
                <h2 className="categories__title">
                    Выбор опроса
                </h2>
                <div className="categories__items">
                    {
                        data.map(item => (
                            <Link
                                to="/questions-list" 
                                className="categories__item" 
                                key={item.name}
                                onClick={() => setCategoryForSurvey(item.name)}>
                                <h3 className="quiz-menu__item-title">
                                    {item.title}
                                </h3>
                                <img src={item.img} alt={item.name} className="categories__item-img" />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default QuizCategories;