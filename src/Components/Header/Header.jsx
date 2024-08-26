import React, { useEffect, useState } from 'react'
import '../../Styles/Header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from '../../State/Authentication/Action'
import { Menu } from '@mui/material'
import { FaUser, FaRegUser } from 'react-icons/fa';
import { MdOutlineEventNote } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
const Header = () => {

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null)
    const openUserMenu = Boolean(anchorEl);
    const jwt = localStorage.getItem("jwt");
    const auth = useSelector(state => state.auth);
    console.log(jwt)
    console.log(auth)

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    }


    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));

        }

    }, [jwt, auth.jwt]);

    const handleLogout = () => {
        dispatch(logout());
        handleCloseUserMenu();
    }
    const handleCloseUserMenu = (e) => {
        setAnchorEl(null)
    }



    return (
        <header className=' flex '>
            <div className="logo">
                <Link to='/'>Dreams Technologies</Link>
            </div>
            <div className="right">
                <div className="profile">
                    {
                        auth.user?.name ? (
                            <div>
                                <div className='open-btn' onClick={handleUserClick} aria-controls={openUserMenu ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={openUserMenu ? 'true' : undefined}>
                                    <img src={auth.user?.photo} alt={auth.user?.name} />
                                    <div>
                                        <p>Welcome</p>
                                        <div className="name">{auth.user?.name}</div>
                                    </div>
                                </div>

                                <Menu id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openUserMenu}
                                    onClose={handleCloseUserMenu}
                                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                                    className="custom-menu"
                                    PaperProps={{
                                        style: {
                                            marginTop: '15px',
                                            padding: "0px",
                                            width: '200px',
                                            borderRadius: "3px",
                                            boxShadow: "rgba(0, 0, 0, 0.051) 0px 5px 15px 0px",

                                        },
                                    }}
                                >
                                    <Link to='/admin-profile' className="menu-link" onClick={() => handleLinkClick('/admin-profile')}>
                                        <p className="menu-item"><FaRegUser className="menu-icon" /> Profile</p>
                                    </Link>

                                    <Link to="/admin/orders" className="menu-link" onClick={() => handleLinkClick('/admin/orders')}>
                                        <p className="menu-item"><MdOutlineEventNote className="menu-icon" />Admin Orders</p>
                                    </Link>

                                    {auth.user?.role === 'CUSTOMER' && (
                                        <Link className="menu-link" onClick={() => window.location.href = 'http://localhost:5173/'}>
                                            <p className="menu-item"><FaUser className="menu-icon" /> User Dashboard</p>
                                        </Link>
                                    )}
                                    <div className="hr-line"></div>
                                    <Link className="menu-link" onClick={handleLogout}>
                                        <p className="menu-item"><RiLogoutBoxRLine className="menu-icon" /> Logout</p>
                                    </Link>
                                </Menu>
                            </div>
                        ) : (
                            <p>Admin</p>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header