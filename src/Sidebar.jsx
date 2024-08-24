import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPencilAlt } from 'react-icons/fa'; 
import './css/sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${!isOpen ? 'closed' : ''}`}>
            <button onClick={toggleSidebar} className={`sidebar-button ${!isOpen ? 'closed' : ''}`}>
                {isOpen ? 'Close' : 'Open'}
            </button>
            <h3 className={`menu-header ${!isOpen ? 'closed' : ''}`}>Menu</h3>
            <ul>
                <li>
                    <Link to="/" className={`sidebar-link ${!isOpen ? 'closed' : ''}`}>
                        <FaHome className={`sidebar-icon ${!isOpen ? 'closed' : ''}`} />
                        {isOpen && 'Home'}
                    </Link>
                </li>
                <li>
                    <Link to="/editor" className={`sidebar-link ${!isOpen ? 'closed' : ''}`}>
                        <FaPencilAlt className={`sidebar-icon ${!isOpen ? 'closed' : ''}`} />
                        {isOpen && 'Editor'}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
