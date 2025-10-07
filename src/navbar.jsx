import './navbar.css'
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { CiGrid31 } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { AiOutlineCluster } from "react-icons/ai";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { BsCash } from "react-icons/bs";
import { ImFileText2 } from "react-icons/im";
import { BsFileEarmarkText } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

export default function Navbar({ onLogout }) {
    const username = localStorage.getItem('username') || 'User';
    const menuCheckboxRef = useRef(null);
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();
    const menuItems = [
        { id: 1, icon: <HiOutlineBuildingOffice2 />, label: 'Company', path: '/company' },
        { id: 2, icon: <AiOutlineCluster />, label: 'Department', path: '/department' },
        { id: 3, icon: <BsFillPersonBadgeFill />, label: 'Designation', path: '/designation' },
        { id: 4, icon: <RiTeamFill />, label: 'Employee Details', path: '/employee_details' },
        { id: 5, icon: <BsCash />, label: 'Salary Management' },
        { id: 6, icon: <ImFileText2 />, label: 'Employee Report' },
        { id: 7, icon: <BsFileEarmarkText />, label: 'Pay Salary' },
        { id: 8, icon: <FiSettings />, label: 'Settings' }
    ];
    return (
        <section id='navbar'>
            <div className='navbar-container'>
                {/* --------------------nav-left-------------------- */}
                <div className='navbar-left'>
                    <div className='navbar-logo-text'>
                        <Link to={"/"} className='AL'>AL - MILL</Link>
                    </div>

                    <div className='navbar-logo-subtext'>
                        <input type="checkbox" id="menuCheckbox" ref={menuCheckboxRef} />
                        <div htmlFor="menuCheckbox" className='navbar-logo-content'>
                            <p><span><CiGrid31 /></span>HR Management</p>
                        </div>
                        <div className='navbar-logo-line'>
                            <div className='navbar-logo-list'>
                                {menuItems.map(item => (
                                    <Link
                                        to={item.path}
                                        key={item.id}
                                        className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
                                        onClick={() => setActiveItem(item.id)}
                                    >
                                        <h3 ><span>{item.icon}</span> {item.label}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --------------------nav-right-------------------- */}
                <div className='navbar-right'>
                    <div className='navbar-right-content'>
                        <p>Welcome <span>{username}</span></p>
                        <button className='btn btn-primary' onClick={onLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
