import man from '../../assets/random-icon.png';
import ecology from '../../assets/ecology-icon.png';
import world from '../../assets/world-icon.png';
import energy from '../../assets/energy-icon.png';
import './QuizCategories.scss';

const QuizCategories = () => {
    return (
        <div className="categories">
            <div className="container">
                <h2 className="categories__title">
                    Выбор опроса
                </h2>
                <div className="categories__items">
                    <div className="categories__item">
                        <p className="quiz-menu__item-subtitle">
                            старт
                        </p>
                        <h3 className="quiz-menu__item-title">
                            Случайный опрос
                        </h3>
                        <img src={man} alt="" className="categories__item-img" />
                    </div>
                    <div className="categories__item">
                        <h3 className="categories__item-title">
                            Экология
                        </h3>
                        <img src={ecology} alt="" className="categories__item-img" />
                    </div>
                    <div className="categories__item">
                        <h3 className="categories__item-title">
                            Патриотизм
                        </h3>
                        <img src={world} alt="" className="categories__item-img" />
                    </div>
                    <div className="categories__item">
                        <h3 className="categories__item-title">
                            Энергосбережение
                        </h3>
                        <img src={energy} alt="" className="categories__item-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizCategories;