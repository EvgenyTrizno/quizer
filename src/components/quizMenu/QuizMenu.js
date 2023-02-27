import solo from '../../assets/solo-icon.png';
import double from '../../assets/double-icon.png';
import fight from '../../assets/1vs1-icon.png';
import './QuizMenu.scss';

const QuizMenu = () => {

    return (
        <div className="quiz-menu">
            <div className="container">
                <div className="quiz-menu__items">
                    <div className="quiz-menu__item quiz-menu__item_pink">
                        <p className="quiz-menu__item-subtitle">
                            старт
                        </p>
                        <h3 className="quiz-menu__item-title">
                            Одиночный режим
                        </h3>
                        <img src={solo} alt="" className="quiz-menu__item-img" />
                    </div>
                    <div className="quiz-menu__item quiz-menu__item_blue">
                        <p className="quiz-menu__item-subtitle">
                            старт
                        </p>
                        <h3 className="quiz-menu__item-title">
                            Двойной режим
                        </h3>
                        <img src={double} alt="" className="quiz-menu__item-img" />
                    </div>
                    <div className="quiz-menu__item quiz-menu__item_green">
                        <p className="quiz-menu__item-subtitle">
                            старт
                        </p>
                        <h3 className="quiz-menu__item-title">
                            Режим 1 на 1
                        </h3>
                        <img src={fight} alt="" className="quiz-menu__item-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizMenu;