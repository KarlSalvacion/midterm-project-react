import React, { useState } from 'react';
import '../CSS Components/mainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddItem from './addItem';
import { faArrowRightLong, faArrowLeftLong, faClipboardList, faMagnifyingGlass, faPlus, faPencilAlt, faList, faFilter, faExclamationTriangle, faSort, faTrash} from '@fortawesome/free-solid-svg-icons';

const MainMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
      <div className="homeContainer">
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

              <p className="dashboard-text">DASHBOARD</p>

              <div className="navbar-nav">
                <div className="search-section">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '10px' }} className="fa-icon"/>
                    <p className="search-item">SEARCH ITEM</p>
                </div>

                  <div className="add-section">
                    <FontAwesomeIcon icon={faPlus} className="fa-icon" style={{ marginRight: '10px' }} />
                    <p className="add-item">ADD ITEM</p>
                  </div>

                  <div className="update-section">
                    <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: '10px' }}  className="fa-icon"/>
                    <p className="update-item">UPDATE ITEM</p>
                  </div>

                  <div className="display-all-section">
                    <FontAwesomeIcon icon={faList} style={{ marginRight: '10px' }}  className="fa-icon"/>
                    <p className="display-items-all">DISPLAY ALL ITEMS</p>
                  </div>

                  <div className="display-category-section">
                    <FontAwesomeIcon icon={faFilter} style={{ marginRight: '10px' }}  className="fa-icon"/>
                    <p className="display-item-category">DISPLAY BY CATEGORY</p>
                  </div>

                  <div className="display-lowstock-section">
                    <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: '10px' }}  className="fa-icon"/>
                    <p className="display-item-lowstock">DISPLAY LOW STOCK ITEM</p>
                  </div>

                  <div className="sort-section">
                    <FontAwesomeIcon icon={faSort} style={{ marginRight: '10px' }}  className="fa-icon"/>
                    <p className="sort-item">SORT ITEM</p>
                  </div>

                  <div className="remove-section">
                    <FontAwesomeIcon icon={faTrash} style={{ marginRight: '10px' }}  className="fa-icon"/>
                    <p className="remove-item">REMOVE ITEM</p>
                  </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="dashboard">
          <AddItem/>
        </div>
      </div>
  );
};

export default MainMenu;