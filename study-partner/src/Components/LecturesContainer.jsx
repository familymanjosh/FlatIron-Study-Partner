import React from "react";
import LectureCard from "./LectureCard";

const LecturesContainer = ({lectures}) => {
    const renderLectures = lectures.map((lecture) => {
       return <LectureCard key={lecture.id} lecture={lecture} />
    });
    return (
        <div>
        <h1>Lectures</h1>
        <div className="ui four cards">{renderLectures}</div>
        </div>
    );
    };

export default LecturesContainer;