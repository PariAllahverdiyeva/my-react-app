import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPencilAlt } from 'react-icons/fa'; 

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const sidebarStyles = {
        width: isOpen ? '200px' : '60px', 
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px', 
        zIndex: 1,
    };

    const buttonStyles = {
        marginBottom: '20px', 
        alignSelf: isOpen ? 'flex-end' : 'center',
    };

    const menuHeaderStyles = {
        marginBottom: '20px',
        display: isOpen ? 'block' : 'none',
    };

    const ulStyles = {
        listStyleType: 'none',
        padding: 0, 
        margin: 0, 
    };

    const liStyles = {
        marginBottom: '15px', 
    };

    const linkStyles = {
        textDecoration: 'none',
        color: 'black',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: isOpen ? 'flex-start' : 'center', 
    };

    const iconStyles = {
        marginRight: isOpen ? '10px' : '0', 
    };

    return (
        <div style={sidebarStyles}>
            <button onClick={toggleSidebar} style={buttonStyles}>
                {isOpen ? 'Close' : 'Open'}
            </button>
            <h3 style={menuHeaderStyles}>Menu</h3>
            <ul style={ulStyles}>
                <li style={liStyles}>
                    <Link to="/" style={linkStyles}>
                        <FaHome style={iconStyles} />
                        {isOpen && 'Home'}
                    </Link>
                </li>
                <li style={liStyles}>
                    <Link to="/editor" style={linkStyles}>
                        <FaPencilAlt style={iconStyles} />
                        {isOpen && 'Editor'}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
