import React from "react";
import LectureCard from "./LectureCard";  

const LecturesContainer = ({lectures}) => {
    const renderLectures = lectures.map((lecture) => {
       return <LectureCard key={lecture.id} lecture={lecture} />
    });

    return (
        <div>
        <h1>
        <div className="btns">
        <button className="ui button"  >Add Lecture</button>
        <button className="ui button" >Instructors</button>
        <button className="ui button"  >Phases</button>
        <button className="ui button"  >Cohort Start Date</button>
        <button className="ui button"  >All lectures</button>
        </div>
        </h1>
        <div className="ui four cards">{renderLectures}</div>
        </div>
    );
    };

export default LecturesContainer;