import { useState } from "react";
import CalculationSection from "../CalculationSection/CalculationSection";
import CardSection from "../CardSection/CardSection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardSectionAndCalculationSectionContainer = () => {
    const [totalCredit, setCredit] = useState(0);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(20);
    const handleCourseSelection = (course) => {

        const newCredit = totalCredit + course.credit;
        if (newCredit <= 20) {

            const newSelectedCourses = [...selectedCourses]
            const isCourseExist = selectedCourses.find(item => item.id === course.id);

            if (isCourseExist) {
                toast('This course already added to cart');
            } else {
                newSelectedCourses.push(course)
                setCredit(newCredit);
                setRemainingCredit(remainingCredit - course.credit)
            }
            setSelectedCourses(newSelectedCourses)
        } else {
            toast('Sorry, your credit is not sufficient!')

        }
    }

    return (
        <div className="flex gap-4 ">
            <CardSection handleCourseSelection={handleCourseSelection}></CardSection>
            <CalculationSection selectedCourses={selectedCourses} totalCredit={totalCredit} reamingCredit={remainingCredit}></CalculationSection>
            <ToastContainer />
        </div>
    );
};

export default CardSectionAndCalculationSectionContainer;