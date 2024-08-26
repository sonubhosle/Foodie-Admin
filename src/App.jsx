import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';

import Home from './Pages/Home.jsx';
import Header from './Components/Header/Header.jsx';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <BrowserRouter>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
     
      <div className={`main-content ${isSidebarOpen ? 'open' : 'closed'}`}>
      <Header />
        <main>
          <Routes>
            {/* <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} /> */}
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};





export default App;