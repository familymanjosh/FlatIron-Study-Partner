import { useState, useEffect } from "react";
import Header from "./Components/Header";
import LecturesContainer from "./Components/LecturesContainer";
import { Switch, Route, useHistory } from "react-router-dom";
import AddtoLecture from "./Components/AddtoLecture";
import Instructors from "./Components/Instructors";
import Phases from "./Components/Phases";
import Cohorts from "./Components/Cohorts";
import "./App.css";





const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lectures, setLectures] = useState([]);
  
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/lectures")
      .then((r) => r.json())
      .then((lectures) => {
        setLectures(lectures);
      });
  }, []);

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLecture = {
      title: e.target[0].value,
      link: e.target[1].value,
      phase: e.target[2].value,
      date: e.target[3].value,
      startDate: e.target[4].value,
      reviews: e.target[5].value,
      instructor: e.target[6].value,
      starterCode: e.target[7].value,
      solution:e.target[8].value, 
      notes:e.target[9].value,
    };
    fetch("http://localhost:4000/lectures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLecture),
    })
    .then((r) => r.json())
    .then((newLecture) => {
      setLectures([...lectures, newLecture]);
      history.push("/allLectures");
    });
  };

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
        <Route path="/phases">
          <Phases lectures={lectures} />
        </Route>
        <Route path="/cohorts">
          <Cohorts lectures={lectures} />
        </Route>
        <Route path="/NewLecture">
          <AddtoLecture handleSubmit={handleSubmit} />
        </Route>

      </Switch>
    </div>
  );
};

export default App;
