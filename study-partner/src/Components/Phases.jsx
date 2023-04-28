import React, { useState } from "react";
import LectureCard from "./LectureCard";

const Phases = ({ lectures,addClap,addReview,deleteLecture,handleDislike }) => {
  const [selectedPhase, setSelectedPhase] = useState("");


  const handleClick = (phase) => {
    setSelectedPhase(phase);
  };

  const filteredLectures = lectures.filter(
    (lecture) => lecture.phase === selectedPhase
  );

  const Phases = [ 1, 2, 3 ,4 ];

  return (
    <div className="Phases">
      <h1>
        Phases : 
        {Phases.map((phase) => (
          <button key={phase} onClick={() => handleClick(phase)}>{phase}</button>
        ))}
      </h1>
      <div className="ui four cards">
        {filteredLectures.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} addClap={addClap} addReview={addReview} deleteLecture={deleteLecture} handleDislike={handleDislike} />
        ))}
      </div>
    </div>
  );
};

export default Phases;