import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './Editor.jsx'; 
import Sidebar from './Sidebar.jsx';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div style={{ marginLeft: isSidebarOpen ? '200px' : '60px', transition: 'margin-left 0.3s ease', flex: 1, paddingLeft:'20px' }}>
                    <h1>Welcome to Text Editor</h1>
                    <Routes>
                        <Route path="/" element={<h1>Home Page</h1>} />
                        <Route path="/editor" element={<Editor />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
