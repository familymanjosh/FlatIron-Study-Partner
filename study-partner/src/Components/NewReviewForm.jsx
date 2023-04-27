import React, {useState} from "react";


const NewReviewForm = ({addReview}) => {
    const [review, setReview] = useState("");
    return (
        <div>
            <form onSubmit={addReview}>
                <label>
                    Review:
                    <input   
                    type="text"
                    name="link"
                    value={review}
                    placeholder= "add review"
                    onChange={(e) => setReview(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>New Review Form</h1>
        </div>
    );
}

export default NewReviewForm;
