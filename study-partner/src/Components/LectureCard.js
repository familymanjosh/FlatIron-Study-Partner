import React from "react";

const LectureCard = ({ lecture }) => {
  const {Topic, Link, Instructor, Notes, Phase, Date, StarterCode, Solution} = lecture

  return (
    <div className="card">
      <card>
        <h2>{Topic}</h2>
        <p>{Instructor}</p>
        <p>{Notes}</p>
        <iframe
          width="560"
          height="315"
          src={Link}
          title={Topic}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </card>
    </div>
  );
};

export default LectureCard;