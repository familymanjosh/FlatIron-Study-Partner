import React from "react";
import LectureCard from "./LectureCard";  

const LecturesContainer = ({lectures,addClap,addReview,deleteLecture,handleDislike}) => {
    const renderLectures = lectures.map((lecture) => {
       return <LectureCard key={lecture.id} lecture={lecture} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike} />
    });

    return (
        <div>
        <div className="ui four cards">{renderLectures}</div>
        </div>
    );
    };

export default LecturesContainer;