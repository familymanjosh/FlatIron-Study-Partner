import React,{ useState} from "react";

const AddtoLecture = ({handleSubmit}) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [phase, setPhase] = useState("");
    const [date, setDate] = useState("");
    const [cohort, setCohort] = useState("");
    const [reviews, setReviews] = useState("");
    const [instructor, setInstructor] = useState("");
    const [starterCode, setStarterCode] = useState("");
    const [solution, setSolution] = useState("");
    const [notes, setNotes] = useState("");
    const youtube = "https://www.youtube.com/embed/";

    return (
        <><div>
            <form className="lecture-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Enter a lecture title..."
                    onChange={(e) => setTitle(e.target.value)}
                    className="input-text" />
                <br />
                <input
                    type="text"
                    name="link"
                    value={link}
                    placeholder={youtube}
                    onChange={(e) => setLink(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type= "number" 
                    name="phase"
                    value={phase}
                    placeholder="Enter a lecture phase..."
                    onChange={(e) => setPhase(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type="text"
                    name="date"
                    value={date}
                    placeholder="Enter a lecture date..."
                    onChange={(e) => setDate(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type="text"
                    name="cohort"
                    value={cohort}
                    placeholder="Enter a lecture's Cohort start date..."
                    onChange={(e) => setCohort(e.target.value)}

                    className="input-text" />
                <br />
                <textarea
                 name="reviews"
                 value={reviews}
                 placeholder="Enter a lecture review..."
                 onChange={(e) => setReviews(e.target.value)}
                 className="input-text"
                ></textarea>
                <br />
                <input
                    type="text"
                    name="instructor"
                    value={instructor}
                    placeholder="Enter a lecture instructor..."
                    onChange={(e) => setInstructor(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type="text"
                    name="starterCode"
                    value={starterCode}
                    placeholder="Enter a lecture starter code link..."
                    onChange={(e) => setStarterCode(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type="text"
                    name="solution"
                    value={solution}
                    placeholder="Enter a lecture solution link..."
                    onChange={(e) => setSolution(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type="text"
                    name="notes"
                    value={notes}
                    placeholder="Enter a lecture notes or link..."
                    onChange={(e) => setNotes(e.target.value)}

                    className="input-text" />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Create New Lecture"
                    className="submit" />
            </form>
        </div><h1>Create A Lecture!</h1></>
    );
    }

export default AddtoLecture;
