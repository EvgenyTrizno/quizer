import { SiStarship } from 'react-icons/si';
import { GiMoneyStack } from 'react-icons/gi';

import './ProfileStats.scss';

const ProfileStats = () => {

    return (
        <div className='profile-stats'>
            <div className="profile-stats__user">
                <div className="profile-stats__user-level profile-stats__user-box"> 
                    <SiStarship size={35}/>
                    <div className="profile-stats__user-text">
                        <span>1</span>
                        уровень
                    </div>
                </div>
                <div className="profile-stats__user-coins profile-stats__user-box">
                    <GiMoneyStack size={35}/>
                    <div className="profile-stats__user-text">
                        <span>110</span>
                        монет
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ProfileStats;