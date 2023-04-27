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
              <NavLink className= "NavBtn" to="/">
                  <Menu.Item>
                      Home
                  </Menu.Item>
              </NavLink>
              <NavLink className= "NavBtn" to="/NewLecture">
                  <Menu.Item>
                      New Lecture
                  </Menu.Item>
              </NavLink>
              <NavLink className= "NavBtn" to="/allLectures">
                  <Menu.Item>
                      All Lectures
                  </Menu.Item>
              </NavLink>
              <NavLink className= "NavBtn" to="/instructors">
                  <Menu.Item>
                      Instructors
                  </Menu.Item>
              </NavLink>
              <NavLink className= "NavBtn" to="/phases">
                  <Menu.Item>
                      Phases
                  </Menu.Item>
              </NavLink>
              <NavLink className= "NavBtn" to="/cohorts">
                  <Menu.Item>
                      Cohorts
                  </Menu.Item>
              </NavLink>
              
  </Menu>
        <button onClick={handleClick}>Home</button>
      </header>
    );
  };
  
  export default Header;