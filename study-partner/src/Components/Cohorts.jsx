import React, { useState } from "react";
import LectureCard from "./LectureCard";

const Cohorts = ({ lectures,addClap,addReview,deleteLecture,handleDislike }) => {
  const [selectedCohort, setSelectedCohort] = useState("");


  const handleClick = (cohort) => {
    setSelectedCohort(cohort);
  };

  const filteredLectures = lectures.filter(
    (lecture) => lecture.cohort === selectedCohort
  );

  const Cohorts = [
    "11/21/22",
    "12/12/22",
    "02/20/23",
    "03/20/23",
    "04/10/23"
];

  return (
    <div className="Cohorts">
      <h1>
        Cohorts :  
        {Cohorts.map((cohort) => (
          <button key={cohort} onClick={() => handleClick(cohort)}>
            {cohort}
          </button>
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

export default Cohorts;