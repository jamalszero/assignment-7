import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const CardSection = ({handleCourseSelection}) => {

const [courses, setCourses] = useState([]);
useEffect(() => {
    fetch('../../../public/data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
}, [])

    return (
        <div className=" w-3/4 border border-green-400 border-dotted grid grid-cols-3 gap-4 ">
            {
                courses.map(course => <Card key={course.id} course={course} handleCourseSelection={handleCourseSelection}></Card>)
            }
        </div>
    );
};

export default CardSection;