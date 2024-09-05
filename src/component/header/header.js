import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../../images/somslogo.png'
import ind from '../../images/indflag.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './header.css'
import { Link } from 'react-router-dom';
const headnav = [
    {
        id: 1,
        namee: 'Home',
        redirect: '/',
        submenu: [],
        submenuredirect: []
    },
    {
        id: 2,
        namee: 'About Us',
        redirect: '/about',
        submenu: [],
        submenuredirect: []
    },
    {
        id: 3,
        namee: 'Courses',
        redirect: '/courses',
        submenu: [
            {
                name:'DG APPROVED',
                path:'/dgcourse'
            },
            {
                name:'OTHER MARITIME COURSES',
                path:'/othercourse'
            }
        ],
        submenuredirect: ['', '']
    },
    {
        id: 4,
        namee: 'Gallery',
        redirect: '/gallery',
        submenu: [
            {
                name:'SHIP VISIT',
                path:'/maingallery/SHIP VISIT'
            },
            {
                name:'DIRECTOR GALLERY',
                path:"/maingallery/DIRECTOR'S GALLERY"
            },
            {
                name:'SIMULATORS',
                path:'/maingallery/SIMULATORS'
            },
            {
                name:'TRAINING',
                path:'/maingallery/TRAINING'
            }
        ],
        submenuredirect: ['', '', '', '']
    },
    {
        id: 5,
        namee: 'Career',
        redirect: '/career',
        submenu: [],
        submenuredirect: []
    },
    {
        id: 6,
        namee: 'Contact Us',
        redirect: '/contact',
        submenu: [],
        submenuredirect: []
    }
]

const Header = (props) => {
    const [submenudisp, setSubmenudisp] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(0)
    const [mobdisplay, setMobdisplay] = useState(false)
    const [active, setActive] = useState(0)
    const [activee, setActivee] = useState(0)
    useEffect(() => {
        if (window.location.pathname === '/') {
            setActive(0)
        }
        if (window.location.pathname === '/about') {
            setActive(1)
        }
        if (window.location.pathname === '/courses' || window.location.pathname === '/dgcourse' || window.location.pathname === '/othercourse') {
            setActive(2)
        }
        if (window.location.pathname === '/gallery') {
            setActive(3)
        }
        if (window.location.pathname === '/career') {
            setActive(4)
        }
        if (window.location.pathname === '/contact') {
            setActive(5)
        }
    }, [active, props.idd])

    const submenudisplaycontroller = (w) => {
        setSubmenudisp(true)
        setHoveredIndex(w)
    }
    const submenui = (w, v) => {
        setSubmenudisp(false)
        setHoveredIndex(w)
        setActivee(w)
        setActive(w)
        setMobdisplay(false)
    }
    const submenuii = (w, n) => {
        setSubmenudisp(false)
        setHoveredIndex(w)
        setActivee(w)
        setActive(w)
        if (n === 'Courses' || n === 'Gallery') {
            setMobdisplay(true)
        } else {
            setMobdisplay(false)
        }
    }
    return (
        <Box>
            <Box id='header'>
                <Box className='img_con'>
                    <img src={logo} alt='logo' />
                </Box>
                <Box className='list_container'>
                    <ul>
                        {
                            headnav.map((e, index) => (
                                <li key={index} onMouseEnter={() => submenudisplaycontroller(index)} onMouseLeave={()=>setHoveredIndex(0)} className={`${active === index ? "active" : ""}`} onClick={() => setActive(index)}>
                                    <Link className='lst_cont' to={e.redirect}>
                                        {e.namee} {e.submenu.length > 0 ? (<ArrowDropDownIcon className='down_iccon' />) : (null)}
                                    </Link>
                                    {e.submenu.length > 0 && submenudisp && index === hoveredIndex && (
                                        <Box className='subb_menu_connt'>
                                            <ul className='sub_menu_nav' onMouseEnter={() => submenudisplaycontroller(index)} onMouseLeave={()=>setHoveredIndex(0)}>
                                                {e.submenu.map((u, index) => (
                                                    <li onClick={() => submenui(index)} key={index} className={`${activee === index ? "activee" : "inactivee"}`} >
                                                    <Link style={{color:'black'}} to={u.path}>{u.name}</Link>
                                                    </li>
                                                ))
                                                }
                                            </ul>
                                        </Box>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                    <img src={ind} alt='ind' className='indflag' />
                    {
                        mobdisplay ? (
                            <CloseIcon className='ham' onClick={() => setMobdisplay(false)} />
                        ) : (
                            <MenuIcon className='ham' onClick={() => setMobdisplay(true)} />
                        )
                    }
                </Box>
            </Box>
            {
                mobdisplay ? (
                    <Box className='mobile_nav'>
                        <ul>
                            {headnav.map((u, index) => (
                                <li key={index} className={`${active === index ? "mob_nav_active" : ""}`} onClick={() => submenuii(index, u.namee)}>
                                    <Link style={{ display: 'flex', alignItems: 'center', width: '95vw', justifyContent: 'space-between',color:'black' }} to={u.redirect}>
                                        {u.namee} {u.submenu.length > 0 ? (<ArrowDropDownIcon className='down_iccon' />) : (null)}
                                    </Link>
                                    {u.submenu.length > 0 && index === hoveredIndex && (
                                        <ul className='mob_sub_m_list'>
                                            {u.submenu.map((u, index) => (
                                                <li onClick={() => submenui(index, u)} key={index} className={`${activee === index ? "mob_sub_m_list_active" : ""}`}>
                                                <Link style={{color:'black'}} to={u.path}>{u.name}</Link>
                                                </li>
                                            ))
                                            }
                                        </ul>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </Box>
                ) : (null)
            }

        </Box>

    );
}

export default Header;
