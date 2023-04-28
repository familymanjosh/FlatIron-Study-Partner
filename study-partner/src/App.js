import { useState, useEffect } from "react";
import Header from "./Components/Header";
import LecturesContainer from "./Components/LecturesContainer";
import { Switch, Route, useHistory } from "react-router-dom";
import AddtoLecture from "./Components/AddtoLecture";
import Instructors from "./Components/Instructors";
import Phases from "./Components/Phases";
import Cohorts from "./Components/Cohorts";
import NewReviewForm from "./Components/NewReviewForm";
import "./App.css";
import Home from "./Components/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "./Components/Footer";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lectures, setLectures] = useState([]);
  // const [reviews, setReviews] = useState([]);

  
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
      cohort: e.target[4].value,
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
      history.push("/lectures");
    });
  };
  const addClap = (id) => {
    const currentClapCount = lectures.find(
      (lecture) => lecture.id === id
    ).clapCount;

    fetch(`http://localhost:4000/lectures/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clapCount: currentClapCount + 1 }),
    });
    setLectures(
      lectures.map((lecture) => {
        if (lecture.id === id) {
          return { ...lecture, clapCount: currentClapCount + 1 };
        } else {
          return lecture;
        }
      })
    );
  };
  const deleteLecture = (id) => {
    if (id < 79) {
      alert("Cannot delete lectures with IDs from 1 to 78.");
      return;
    }
  
    fetch(`http://localhost:4000/lectures/${id}`, {
      method: "DELETE",
    });
  
    setLectures(lectures.filter((lecture) => lecture.id !== id));
  };
  const handleDislike = (id) => {
    const currentDislikes = lectures.find(
      (lecture) => lecture.id === id
    ).dislikes;

    fetch(`http://localhost:4000/lectures/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dislikes: currentDislikes + 1 }),
    });
    setLectures(
      lectures.map((lecture) => {
        if (lecture.id === id) {
          return { ...lecture, dislikes: currentDislikes + 1 };
        } else {
          return lecture;
        }
      })
    );
  };
  const addReview = (id, review) => {
    const currentReviews = lectures.find(
      (lecture) => lecture.id == id
    ).reviews;

    fetch(`http://localhost:4000/lectures/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: [...currentReviews, review]}),
    });
    setLectures(
      lectures.map((lecture) => {
        if (lecture.id == id) {
          return { ...lecture, reviews: [...currentReviews, review]};
        } else {
          return lecture;
        }
      })
    );
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Switch>
        <Route exact path="/">
          <Home />
          <Parallax pages={3} >
          <ParallaxLayer 
          offset={0}
          speed={1.4}
          factor={2} //makes it factor multiple pages
          style={{
            backgroundImage: 'url(/images/galaxy.jpg)',
            backgroundSize: 'cover',
          }}>
          </ParallaxLayer>

          <ParallaxLayer 
          offset={1}
          speed={1}
          style={{
            backgroundImage: 'url(/images/dusty-death.jpg)',
            backgroundSize: 'cover',
            }}>
          </ParallaxLayer>

          <ParallaxLayer 
          offset={2} 
          speed={1.5} //scrolling speed
          factor={4}
          style={{
            backgroundImage: 'url(/images/orion-flame.jpg)',
            backgroundSize: 'cover',
          }}>   
          </ParallaxLayer>
          </Parallax>  
                
        </Route>
        <Route exact path="/lectures">
          <LecturesContainer lectures={lectures} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike} />
        </Route>
        <Route path="/instructors">
          <Instructors lectures={lectures} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike}  />
        </Route>
        <Route path="/phases">
          <Phases lectures={lectures} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike} />
        </Route>
        <Route path="/cohorts">
          <Cohorts lectures={lectures} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike}  />
        </Route>
        <Route path="/NewLecture">
          <AddtoLecture handleSubmit={handleSubmit} />
        </Route>
        <Route path="/lectures/:id/reviews/new">
          <NewReviewForm addReview={addReview} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
