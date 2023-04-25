import { useState, useEffect } from "react";
import Header from "./Components/Header";
import LecturesContainer from "./Components/LecturesContainer";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lectures, setLectures] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/lectures")
      .then((r) => r.json())
      .then((lectures) => {
        setLectures(lectures);
      });
  }, []);

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <LecturesContainer lectures={lectures} />

    </div>
  );
};

export default App;
