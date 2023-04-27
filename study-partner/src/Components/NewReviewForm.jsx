import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom";

const NewReviewForm = ({addReview}) => {
    const [review, setReview] = useState("");
    const history = useHistory();
    const { id } = useParams();

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addReview(id, review)
                history.push('/lectures')
                }}>
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
