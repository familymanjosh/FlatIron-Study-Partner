import React from "react";

const LectureCard = ({ lecture, addClap, addReview, deleteLecture, handleDislike }) => {
  const { title, date, link, instructor, image, startDate, reviews, clapCount, dislikes   } = lecture;


  const handleView = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="card">
      <card>
        <h1>{title}</h1>
        <h2>Date: {date}</h2>
        <h2>{instructor}</h2>
        <h2>Cohort: {startDate}</h2>
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
          <button className="claps" onClick={addClap} >👏 {clapCount}</button>
          <button className="thumsDown" onClick={handleDislike} >👎 {dislikes}  </button>
          <button className="addReviews" onClick={addReview} >Add review</button>
          <button className="delete" onClick={deleteLecture}>Delete</button>
      </card>
    </div>
  );
};

export default LectureCard;