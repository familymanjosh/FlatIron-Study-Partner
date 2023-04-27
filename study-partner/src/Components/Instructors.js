import React, { useState } from "react";
import Instructor from "./Instructor";

const Instructors = ({ lectures,addClap,addReview,deleteLecture,handleDislike }) => {
  const [selectedInstructor, setSelectedInstructor] = useState("");


  const handleClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const filteredLectures = lectures.filter(
    (lecture) => lecture.instructor === selectedInstructor
  );

  const instructors = [
    "Morgan VanYperen",
    "Lantz Warrick",
    "Phil Roth",
    "Matteo Piccini"
  ];

  return (
    <div className="instructors">
      <h1>
        Instructors :  
        {instructors.map((instructor) => (
          <button key={instructor} onClick={() => handleClick(instructor)}>
            {instructor}
          </button>
        ))}
      </h1>
      <div className="instructor-list">
        {filteredLectures.map((lecture) => (
          <Instructor key={lecture.id} lecture={lecture} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike}/>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
