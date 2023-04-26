import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const handleClick = () => onToggleDarkMode();
  
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
      <header>
        <button onClick={handleClick}>{buttonTextContent}</button>
        <h1>
          <span className="logo">{"//"}</span>
          Flatiron's Number 1 Study Partner App
        </h1>
        <Menu>
              <NavLink to="/allLectures">
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
              <NavLink to="/cohorts/:id">
                  <Menu.Item>
                      Cohort
                  </Menu.Item>
              </NavLink>
              <NavLink to="/cohorts/:id/lectures">
                  <Menu.Item>
                      Cohort Lectures
                  </Menu.Item>
              </NavLink>
  </Menu>
        <button onClick={handleClick}>Home</button>
      </header>
    );
  };
  
  export default Header;