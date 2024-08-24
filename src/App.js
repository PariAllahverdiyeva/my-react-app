import React, {useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Home from './Home.jsx'
import Editor from './Editor.jsx'; 

//component
import Sidebar from './Sidebar.jsx';

//style
import './css/app.css'; 

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/editor" element={<Editor />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
