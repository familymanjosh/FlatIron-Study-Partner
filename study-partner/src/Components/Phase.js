import React from "react";
import { Link } from "react-router-dom";

const Phase = ({ lecture,addClap,addReview,deleteLecture,handleDislike }) => {
    const { title, date, link, instructor, image, startDate, reviews, clapCount, dislikes, id } = lecture;
  
  
    const handleView = () => {
      window.open(link, "_blank");
    };
    const dislikeClick = () => {
      handleDislike(id);
    };
  
    const deletesLecture = () => {
      deleteLecture(id);
    };
  
    const handleClap = () => {
      addClap(id);
    };

  
    return (
      <div className="card">
        <card>
          <h1>{title}</h1>
          <h2>Date: {date}</h2>
          <h2>{instructor}</h2>
          <h2>Cohort: {startDate}</h2>
          <img src={image} alt="Lecture" />
          <h2>Reviews: <ul>{reviews.map(r => <li>{r}</li>)}</ul> </h2>
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
          <button className="claps" onClick={handleClap} >👏 {clapCount || 0}</button>
          <button className="thumsDown" onClick={dislikeClick} >👎 {dislikes || 0} </button>
          <Link to={`/lectures/${id}/reviews/new`} > 
          <button className="addReviews" >Add review</button>
          </Link>
          <button className="delete" onClick={deletesLecture}>Delete</button>
        </card>
      </div>
    );
  };
  
  export default Phase;