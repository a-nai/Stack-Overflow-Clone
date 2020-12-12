import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as GlobalIcon } from '../../assets/Globe.svg';
import './SideBar.styles.scss';

const SideBar = () => (
    <div className='side-bar-container'>
        <div className='side-bar-tabs'>

            <NavLink exact activeClassName='active' className='home-link nav_link' to='/' >
                <p>Home</p>
            </NavLink>

            <div className='public-tabs'>
                <p className='title fc-light'>PUBLIC</p>
                <NavLink activeClassName='active' className='icon-link nav_link' to='/questions' >
                    <p>
                        <GlobalIcon className='icon' />
                        Language
                    </p>
                </NavLink>
                <NavLink activeClassName='active' className='link nav_link' to='/tags/Русский' >
                    <p>Русский</p>
                <NavLink activeClassName='active' className='link nav_link' to='/tags/Español' >
                    <p>Español</p>
                </NavLink>
                <NavLink activeClassName='active' className='link nav_link' to='/tags/Deutsch' >
                    <p>Deutsch</p>
                </NavLink>
                <NavLink activeClassName='active' className='link nav_link' to='/tags/Italiano' >
                    <p>Italiano</p>
                </NavLink>
                                    <NavLink activeClassName='active' className='link nav_link' to='/tags/Português' >
                    <p>Português</p>
                </NavLink>
                    
                                    <NavLink activeClassName='active' className='link nav_link' to='/tags/Polski' >
                    <p>Polski</p>
                </NavLink>
                    
                    
                                    <NavLink activeClassName='active' className='link nav_link' to='/tags/日本語' >
                    <p>日本語</p>
                </NavLink>
                    
                                    <NavLink activeClassName='active' className='link nav_link' to='/tags/Français' >
                    <p>Français</p>
                </NavLink>
                    
                                    <NavLink activeClassName='active' className='link nav_link' to='/tags/中文' >
                    <p>中文</p>
                </NavLink>
                    <NavLink activeClassName='active' className='link nav_link' to='/tags/English' >
                    <p>English</p>
                </NavLink>
                    
                    
            </div>
            <div className='teams-tabs'>
                <p className='title fc-light'>TEAMS</p>
            </div>
        </div>
    </div>

);

export default SideBar;
