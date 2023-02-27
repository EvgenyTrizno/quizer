import { Link } from 'react-router-dom';
import { IoArrowRedo } from 'react-icons/io5';

import cup from '../../assets/golden-cup-icon.png';
import ghost from '../../assets/ghost.png';
import question from '../../assets/questions.png';
import correct from '../../assets/correct.png';
import error from '../../assets/error.png';

import './Result.scss';

const Result = () => {
    return (
        <div className="result">
            <div className="container">
                <div className="result__modal">
                    <img src={cup} alt="" className="result__modal-img" />
                    <div className="result__modal-text">
                        <h2 className="result__modal-title">
                            Вы победили !
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
                                    10
                                </span>
                                <p>Количество вопросов</p>
                            </div>
                            <div className="result__modal-summary">
                                <span className="result__modal-current">
                                    <img src={correct} alt="" />
                                    8
                                </span>
                                <p>Правильных ответов</p>
                            </div>
                            <div className="result__modal-summary">
                                <span className="result__modal-current">
                                    <img src={error} alt="" />
                                    2
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