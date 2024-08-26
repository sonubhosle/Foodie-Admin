import React from 'react';
import '../../Styles/Sidebar.css'
import { TbSettings2 } from 'react-icons/tb';
import { FaBars } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="logo_details">
                    <div className="icon">
                        <TbSettings2 onClick={toggleSidebar} className="cog" />
                    </div>
                    <div className="logo_name">Dashboard</div>
                    <FaBars onClick={toggleSidebar} id='btn' />
                </div>
                <ul className="nav-list">
                    <div className="heading"> <p></p> <span>Main</span></div>
                    <div className="heading"> <p></p> <span>Pages</span></div>
                </ul>
            </div>
        </>


    );
};

export default Sidebar;