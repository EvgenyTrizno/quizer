import { FaSearch } from 'react-icons/fa';

import './SearchPanel.scss';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <div className="container">
                <div className="search-panel__wrapper">
                    <button className="search-panel__btn">
                        <FaSearch/>
                    </button>
                    <input
                        type="text" 
                        className="search-panel__input" 
                        placeholder='Поиск категорий опросов'/>
                </div>
            </div>
        </div>
    );
}

export default SearchPanel;