import React from "react";

const Cohort = ({ lecture }) => {
    const { title, date, link, instructor, image, cohort, reviews  } = lecture;
  
  
    const handleView = () => {
      window.open(link, "_blank");
    };
  
    return (
      <div className="card">
        <card>
          <h1>{title}</h1>
          <h2>Date: {date}</h2>
          <h2>{instructor}</h2>
          <h2>Cohort: {cohort}</h2>
          <img src={image} alt="Lecture" />
          <h2>Reviews: {reviews} </h2>
          {/* <iframe
            width="100%"
            height="auto"
            src={link}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <button className="viewbtn" onClick={handleView}>Youtube</button>
          <button className="claps">👏</button>
          <button className="thumsDown">👎</button>
          <button className="addReviews">Add review</button>
          <button className="addNotes">Add Notes</button>
          <button className="delete">Delete</button>
        </card>
      </div>
    );
  };
  
  export default Cohort;