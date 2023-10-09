import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const CardSection = ({ handleCourseSelection }) => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className=" w-3/4  grid grid-cols-3 gap-4 ">
            {
                courses.map(course => <Card key={course.id} course={course} handleCourseSelection={handleCourseSelection}></Card>)
            }
        </div>
    );
};

CardSection.propTypes = {
    handleCourseSelection: PropTypes.func,

};

export default CardSection;