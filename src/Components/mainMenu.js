import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS Components/mainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faClipboardList, faMagnifyingGlass, faPlus, faPencilAlt, faList, faSort, faTrash} from '@fortawesome/free-solid-svg-icons';

const MainMenu = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
};
 


/*<div className="collapsed-icons">
    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '10px' }} className="fa-icon-collapsed"/>
    <FontAwesomeIcon icon={faPlus} className="fa-icon" style={{ marginRight: '10px' }} />      
</div>

FOR COLLAPSED ICONS PAG MAY ROUTING NA LAHAT

*/
return (
    <div className="mainMenu-container">
        <nav className={`navbar custom-navbar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" onClick={handleToggle}>
                    {isCollapsed ? <FontAwesomeIcon icon={faArrowRightLong} /> : <FontAwesomeIcon icon={faArrowLeftLong} />}
                </button>

                <div className="navbar-texts">
                    <div className="navbar-brand">
                        <FontAwesomeIcon icon={faClipboardList } />
                        <span className="imText"> INVENTORY</span>
                    </div>

                    <Link to="/" className={`${location.pathname === '/' ? 'active ' : ''}dashboard-text`}>DASHBOARD</Link>

                    <Link to="/" className={`${location.pathname === '/' ? 'active ' : ''}collapsed-dashboard-text`}>D</Link>

                    <div className="collapsed-icons">
                    <Link to="/search-item" className={`collapsed ${location.pathname === '/search-item' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-icon" />
                    </Link> 

                    <Link to="/add-item" className={`collapsed ${location.pathname === '/add-item' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faPlus} className="fa-icon" />
                    </Link>  

                    <Link to="/update-item" className={`collapsed ${location.pathname === '/update-item' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faPencilAlt} className="fa-icon" />
                    </Link>  

                    <Link to="/display-items" className={`collapsed ${location.pathname === '/display-items' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faList} className="fa-icon" />
                    </Link>  

                    <Link to="/sort-items" className={`collapsed ${location.pathname === '/sort-items' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faSort} className="fa-icon" />
                    </Link>

                    <Link to="/remove-item" className={`collapsed ${location.pathname === '/remove-item' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faTrash} className="fa-icon" />
                    </Link>
</div>
                    
                    <div className="navbar-nav">
                        <Link to="/search-item" className={`search-section ${location.pathname === '/search-item' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '10px' }} className="fa-icon"/>
                            <p className="search-item">SEARCH ITEM</p>
                        </Link>

                        <Link to="/add-item" className={`add-section ${location.pathname === '/add-item' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faPlus} className="fa-icon" style={{ marginRight: '10px' }} />
                            <p className="add-link">ADD ITEM</p>
                        </Link>

                        <Link to="/update-item" className={`update-section ${location.pathname === '/update-item' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="update-item">UPDATE ITEM</p>
                        </Link>   

                        <Link to="/display-items" className={`display-items-section ${location.pathname === '/display-items' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faList} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="display-items">DISPLAY ITEMS</p>
                        </Link>

                        <Link to="/sort-items" className={`sort-section ${location.pathname === '/sort-items' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faSort} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="sort-item">SORT ITEM</p>
                        </Link>

                        <Link to="/remove-item" className={`remove-section ${location.pathname === '/remove-item' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faTrash} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="remove-item">REMOVE ITEM</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

      <div className="mainArea">
        {children}
      </div>
    </div>
  );
};

export default MainMenu;