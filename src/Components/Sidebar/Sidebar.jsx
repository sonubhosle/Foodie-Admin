import React from 'react';
import '../../Styles/Sidebar.css'
import { TbSettings2 } from 'react-icons/tb';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { FaRegPlusSquare } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FaUser, FaRegUser } from 'react-icons/fa';
import { MdOutlineEventNote } from 'react-icons/md';

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
                <div className="nav-list">
                    <div className="heading"> <p></p> <span>Main</span></div>
                    <Link to='/' className='menu'>
                        <div className="icon"><MdOutlineDashboard /></div>
                        <div className="link-name"> Dashboard</div>
                    </Link>

                    <div className="heading"> <p></p> <span>Pages</span></div>
                    <Link to='/' className="menu padding">
                        <div className="icon"><RiHome3Line /></div>
                        <div className="link-name">Home</div>
                    </Link>
                    <Link to='/admin/customers' className="menu padding">
                        <div className="icon"><FaRegUser /></div>
                        <div className="link-name">Customers</div>
                    </Link>
                    <Link to='/admin/products' className="menu padding">
                        <div className="icon"><GiClothes /></div>
                        <div className="link-name">Products</div>
                    </Link>
                    <Link to='/admin/orders' className="menu padding">
                        <div className="icon"><MdOutlineEventNote /></div>
                        <div className="link-name">Orders</div>
                    </Link>
                    <Link to='/admin/create' className="menu padding">
                        <div className="icon"><FaRegPlusSquare /></div>
                        <div className="link-name">Create </div>
                    </Link>
                </div>
            </div>
        </>


    );
};

export default Sidebar;