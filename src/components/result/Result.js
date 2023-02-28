import { Link } from 'react-router-dom';
import { IoArrowRedo } from 'react-icons/io5';

import cup from '../../assets/golden-cup-icon.png';
import question from '../../assets/questions.png';
import corrects from '../../assets/correct.png';
import error from '../../assets/error.png';

import './Result.scss';

const Result = ({data, correct, noCorrect}) => {
    return (
        <div className="result">
            <div className="container">
                <div className="result__modal">
                    <img src={cup} alt="" className="result__modal-img" />
                    <div className="result__modal-text">
                        <h2 className="result__modal-title">
                            {noCorrect >= correct ? 'Вы проиграли !' : 'Вы победили !'}
                        </h2>
                        <p className="result__modal-subtitle">
                            Вы получаете <span>+ 80</span> монет
                        </p>
                    </div>
                    <div className="result__modal-inner">
                        <div className="result__modal-box">
                            <div className="result__modal-summary">
                                <span className="result__modal-current">
                                    <img src={question} alt="" />
                                    {data.length}
                                </span>
                                <p>Количество вопросов</p>
                            </div>
                            <div className="result__modal-summary">
                                <span className="result__modal-current">
                                    <img src={corrects} alt="" />
                                    {correct}
                                </span>
                                <p>Правильных ответов</p>
                            </div>
                            <div className="result__modal-summary">
                                <span className="result__modal-current">
                                    <img src={error} alt="" />
                                    {noCorrect}
                                </span>
                                <p>Неправильных ответов</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="result__modal-back">
                        <IoArrowRedo size={30}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Result;