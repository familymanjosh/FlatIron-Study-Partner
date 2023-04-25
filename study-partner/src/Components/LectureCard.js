import React from "react";

const LectureCard = ({ lecture }) => {
  const { title, image, instructor, description, link, notes, topic } = lecture;

  return (
    <div className="card">
      <card>
        <h2>{topic}</h2>
        <p>{instructor}</p>
        <p>{notes}</p>
        <iframe
          width="560"
          height="315"
          src={link}
          title={topic}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </card>
    </div>
  );
};

export default LectureCard;