const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const handleClick = () => onToggleDarkMode();
  
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
      <header>
        <h1>
          <span className="logo">{"//"}</span>
          Flatiron's Number 1 Study Partner App
        </h1>
        <button onClick={handleClick}>{buttonTextContent}</button>
      </header>
    );
  };
  
  export default Header;

  //example comment
  