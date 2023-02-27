import { Link } from 'react-router-dom';

import crown from '../../assets/crown.png';
import './Registration.scss';

const Registration = () => {
    return (
        <div className="registration">
            <div className="registration__link">
                <Link to='/auth'>
                    Войти
                </Link>
            </div>
            <div className="container">
                <div className="registration__inner">
                <img src={crown} alt="" className="registration__img"/>
                    <input 
                        type="text" 
                        className="registration__input"
                        placeholder="Никнейм"
                        name="name" />
                    <input 
                        type="text" 
                        className="registration__input"
                        placeholder="Email"
                        name="email" />
                    <input 
                        type="text" 
                        className="registration__input"
                        placeholder="Пароль"
                        name="password" />
                    <button className="registration__btn btn btn_green">
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Registration;