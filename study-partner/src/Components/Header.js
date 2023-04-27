import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const handleClick = () => onToggleDarkMode();
  
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
        <div className='nav'>
            <header>
            <button onClick={handleClick}>{buttonTextContent}</button>
            <h1>
            <span className="logo">{"//"}</span>
            Flatiron's Study Partner
            </h1>
            <Menu className='menu'>
                <NavLink to="/">
                    <Menu.Item>
                        Home
                    </Menu.Item>
                </NavLink>
                <NavLink to="/NewLecture">
                    <Menu.Item>
                        New Lecture
                    </Menu.Item>
                </NavLink>
                <NavLink to="/lectures">
                    <Menu.Item>
                        All Lectures
                    </Menu.Item>
                </NavLink>
                <NavLink to="/instructors">
                    <Menu.Item>
                        Instructors
                    </Menu.Item>
                </NavLink>
                <NavLink to="/phases">
                    <Menu.Item>
                        Phases
                    </Menu.Item>
                </NavLink>
                <NavLink to="/cohorts">
                    <Menu.Item>
                        Cohorts
                    </Menu.Item>
                </NavLink>
            </Menu>
            </header>
        </div>
    );
  };
  
  export default Header;