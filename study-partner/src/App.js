import { useState, useEffect } from "react";
import Header from "./Components/Header";
import LecturesContainer from "./Components/LecturesContainer";
import { Switch, Route } from "react-router-dom";
// import AddtoLectures from "./Components/AddtoLectures";
import Instructors from "./Components/Instructors";





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
  // const handleAddLecture = (newLecture) => {
  //   setLectures([...lectures, newLecture]);
  // };

  // const handleForm = () => {
  // const formMap = lectures.map((lecture) => {
  //   return <AddtoLectures key={lecture.id} lecture={lecture} />
  // })

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Switch>
        <Route path="/allLectures">
          <LecturesContainer lectures={lectures} />
        </Route>
        <Route path="/instructors">
          <Instructors lectures={lectures} />
        </Route>
        {/* <Route path="/phases">
          <Phases lectures={lectures} />
        </Route>
        <Route path="/cohorts">
          <Cohorts lectures={lectures} />
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
