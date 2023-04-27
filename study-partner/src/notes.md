   const addReview = (id, newReview) => {
    fetch(`http://localhost:4000/lectures/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: [...newReview] }),
    })
      .then((r) => r.json())
      .then((updatedLecture) => {
        setLectures(
          lectures.map((lecture) => {
            if (lecture.id === id) {
              return { ...lecture, reviews: updatedLecture.reviews };
            } else {
              return lecture;
            }
          })
        );
        history.push("/allLectures");
      });
  };


   const addReview = (id, review) => {
    const currentReviews = lectures.find(
      (lecture) => lecture.id === id
    ).reviews;

    fetch(`http://localhost:4000/lectures/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: currentReviews + 1 }),
    });
    setLectures(
      lectures.map((lecture) => {
        if (lecture.id === id) {
          return { ...lecture, reviews: currentReviews + 1 };
        } else {
          return lecture;
        }
      })
    );
    const addReview = (id, newReview) => {
  fetch(`http://localhost:4000/lectures/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reviews: [...reviews, newReview] }),
  })
    .then((r) => r.json())
    .then((updatedLecture) => {
      setReviews(updatedLecture.reviews);
      history.push("/allLectures");
    });
};
This should add the new review to the reviews array in state and update it with the reviews returned from the server. Note that I assumed the server response contains an array of reviews in the reviews property, just like in the original version of your code. If this is not the case, you'll need to adjust the code accordingly.






