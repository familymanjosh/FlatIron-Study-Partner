import React from "react";

const Instructors = ({ lectures }) => {
    //  const instructor = lectures.map((lecture) => {
    //         return <InstructorCard key={lecture.id} lecture={lecture} />
    //     })
    
    
    return (
        <div className="instructors">
            <h1>Instructors
                <button>Morgan VanYperen</button>
                <button>Lantz Warrick</button>
                <button>Eric Kim</button>
            </h1>
        </div>
    );
};

export default Instructors;