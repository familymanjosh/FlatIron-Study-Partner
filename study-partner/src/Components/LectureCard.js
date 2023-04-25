import React from "react";

const LectureCard = ({ lecture }) => {
  const { title, image, Instructor, description, Link } = lecture;

  return (
    <div className="card">
      <card>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{instructor}</p>
        <p>{description}</p>
        <iframe
          width="560"
          height="315"
          src={link}
          alt={title}
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
