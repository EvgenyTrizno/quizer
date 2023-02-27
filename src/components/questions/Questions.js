import Result from '../result/Result';
import './Questions.scss';

const Questions = () => {
    return (
        <div className="questions">
            <div className="container">
                <div className="progress-bar">
                    <div className="progress-bar__wrapper">
                        <div className="progress-bar__inner">
                            <div className="progress-bar__line" style={{width: '10%'}}></div>
                        </div>
                        <div className="progress-bar__counter">
                            2 из 10
                        </div>
                    </div>
                </div>
                <div className="questions__list">
                    <p className="questions__list-subtitle"> 
                        Экология / Одиночная игра
                    </p>
                    <h3 className="questions__list-question">
                        Какое растение называют «живым светофором»?
                    </h3>
                    <div className="questions__list-answers">
                        <div className="questions__list-answer">
                            Медуница
                        </div>
                        <div className="questions__list-answer">
                            Медуница
                        </div>
                        <div className="questions__list-answer">
                            Медуница
                        </div>
                        <div className="questions__list-answer">
                            Медуница
                        </div>
                    </div>
                    <button className="questions__list-btn btn btn_green">
                        Далеее
                    </button>
                </div>
            {/* <Result/> */}
            </div>
        </div>
    );
}

export default Questions;