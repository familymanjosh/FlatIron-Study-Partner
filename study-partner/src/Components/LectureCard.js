import React from "react";

const LectureCard = ({ lecture }) => {
  const { title, link, instructor, notes } = lecture;

  return (
    <div className="card">
      <card>
        <h2>{title}</h2>
        <p>{instructor}</p>
        <p>{notes}</p>
        <iframe
          
          width="100%"
          height="auto"
          src={link}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </card>
    </div>
  );
};

export default LectureCard;