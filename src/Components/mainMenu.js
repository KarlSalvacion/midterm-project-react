import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS Components/mainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faClipboardList, faMagnifyingGlass, faPlus, faPencilAlt, faList, faFilter, faExclamationTriangle, faSort, faTrash} from '@fortawesome/free-solid-svg-icons';

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
    <div>
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

                    
                    <div className="navbar-nav">
                        <Link to="/search" className="search-section">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '10px' }} className="fa-icon"/>
                            <p className="search-item">SEARCH ITEM</p>
                        </Link>

                        <Link to="/add-item" className={`add-section ${location.pathname === '/add-item' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faPlus} className="fa-icon" style={{ marginRight: '10px' }} />
                            <p className="add-link">ADD ITEM</p>
                        </Link>

                        <Link to="/update-item" className="update-section">
                            <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="update-item">UPDATE ITEM</p>
                        </Link>   

                        <Link to="/display-all" className="display-all-section">
                            <FontAwesomeIcon icon={faList} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="display-items-all">DISPLAY ALL ITEMS</p>
                        </Link>

                        <Link to="/display-category" className="display-category-section">
                            <FontAwesomeIcon icon={faFilter} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="display-item-category">DISPLAY BY CATEGORY</p>
                        </Link>

                        <Link to="/display-lowstock" className="display-lowstock-section">
                            <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="display-item-lowstock">DISPLAY LOW STOCK ITEM</p>
                        </Link>

                        <Link to="/sort" className="sort-section">
                            <FontAwesomeIcon icon={faSort} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="sort-item">SORT ITEM</p>
                        </Link>

                        <Link to="/remove" className="remove-section">
                            <FontAwesomeIcon icon={faTrash} style={{ marginRight: '10px' }}  className="fa-icon"/>
                            <p className="remove-item">REMOVE ITEM</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

      <div className="dashboard">
        {children}
      </div>
    </div>
  );
};

export default MainMenu;