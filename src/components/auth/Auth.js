import { Link } from 'react-router-dom';

import crown from '../../assets/crown.png';

const Auth = () => {
    return (
        <div className="registration">
            <div className="registration__link">
                <Link to='/registration'>
                    Регистрация
                </Link>
            </div>
            <div className="container">
                <div className="registration__inner">
                <img src={crown} alt="" className="registration__img"/>
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
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Auth;