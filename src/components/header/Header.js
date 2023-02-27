import { IoIosNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom'

import ProfileStats from '../profileStats/ProfileStats';

import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__menu">
                    <Link to='/profile' className="header__profile-img">
                        <img 
                            src="https://www.w3schools.com/w3images/avatar2.png" 
                            alt="user avatar" 
                            className='profile__user-avatar'/>
                    </Link>
                    <h1 className='title header__title'>
                        Опросник
                    </h1>
                    {/* <div className="header__notification">
                        <IoIosNotifications size={25}/>
                    </div> */}
                </div>
                <ProfileStats/>
            </div>
        </header>
    );
}

export default Header;