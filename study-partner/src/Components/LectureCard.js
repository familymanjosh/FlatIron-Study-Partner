import React from "react";
import ReactDOM from "react-dom";

const LectureCard = ({ lecture }) => {
    const { title, image, instructor, description } = lecture;
    
    return (
        <div className="card">
        <card>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{instructor}</p>
        <p>{description}</p>
        </card>
        </div>
    );
    };

export default LectureCard;