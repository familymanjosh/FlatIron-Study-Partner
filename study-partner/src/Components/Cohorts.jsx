import React, { useState } from "react";
import Cohort from "./Cohort";

const Cohorts = ({ lectures }) => {
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
      <div className="Cohorts-list">
        {filteredLectures.map((lecture) => (
          <Cohort key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </div>
  );
};

export default Cohorts;