import React, { useState } from "react";
import Phase from "./Phase";

const Phases = ({ lectures }) => {
  const [selectedPhase, setSelectedPhase] = useState("");


  const handleClick = (phase) => {
    setSelectedPhase(phase);
  };

  const filteredLectures = lectures.filter(
    (lecture) => lecture.phase === selectedPhase
  );

  const Phases = [
    1,2,3,4
  ];

  return (
    <div className="Phases">
      <h1>
        Phases :  
        {Phases.map((phase) => (
          <button key={phase} onClick={() => handleClick(phase)}>
            {phase}
          </button>
        ))}
      </h1>
      <div className="Phase-list">
        {filteredLectures.map((lecture) => (
          <Phase key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </div>
  );
};

export default Phases;