import React from "react";

const LectureCard = ({ lecture }) => {
  const { title, date, link, instructor, notes } = lecture;

  return (
    <div className="card">
      <card>
        <h2>{title}</h2>
        <h2>{date}</h2>
        <h1>{instructor}</h1>
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
        <button className="viewbtn">view</button>
        <button className="claps">👏</button>
      </card>
    </div>
  );
};

export default LectureCard;