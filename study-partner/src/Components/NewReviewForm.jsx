import React from "react";

const NewReviewForm = ({addReview}) => {
    return (
        <div>
            <form onSubmit={addReview}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Review:
                    <input type="text" name="review" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>New Review Form</h1>
        </div>
    );
}

export default NewReviewForm;
