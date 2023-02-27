import './UserProfile.scss';

const UserProfile = () => {
    return (
        <div className="profile">
            <div className="container">
                <div className="profile__inner">
                    <div className="profile__data">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className="profile__user-avatar" />
                        <p className="profile__nickname">
                            User
                        </p>
                    </div>
                    <div className="profile__analytics-wrapper">
                        <div className="profile__analytics">
                            <ul className="profile__analytics-stats">
                                <li>Место в топе: 214 <span className="profile__analytics-progress">42</span></li>
                                <li>Количество пройденых опросов: 10</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;