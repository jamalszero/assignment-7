import { useState } from "react";
import CalculationSection from "../CalculationSection/CalculationSection";
import CardSection from "../CardSection/CardSection";


const CardSectionAndCalculationSectionContainer = () => {

    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleCourseSelection = (course) => {

        const newSelectedCourses = [...selectedCourses]
        const isCourseExist = selectedCourses.find(item => item.id === course.id);
        
        if(isCourseExist){
            alert('This course already added to cart.');
        }else{
            newSelectedCourses.push(course)
        }
        setSelectedCourses(newSelectedCourses)





  
    }

    return (
        <div className="flex gap-4 border border-green-400 border-dotted ">
            <CardSection handleCourseSelection={handleCourseSelection}></CardSection>
            <CalculationSection selectedCourses={selectedCourses}></CalculationSection>
        </div>
    );
};

export default CardSectionAndCalculationSectionContainer;