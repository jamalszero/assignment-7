import PropTypes from 'prop-types';

const CalculationSection = ({ selectedCourses, totalCredit, reamingCredit }) => {
    return (
        <div className=" w-1/4  bg-base-100 h-min p-4 rounded-lg ">
            <h2 className="font-bold text-xl text-blue-500 py-1">Credit Hour Remaining {reamingCredit} hr</h2>
            <hr />
            <h1 className="font-bold py-1 text-lg">
                Course Name
            </h1>
            <ol className=" list-decimal ml-4 ">

                {
                    selectedCourses.map(course => <li key={course.id}>{course.title}</li>)
                }

            </ol>
            <hr />
            <h3 className="font-bold py-1 text-slate-500">Total Credit Hour : {totalCredit}</h3>
            <hr />
            <h3 className="font-bold py-1 text-slate-500">Total Price : </h3>
        </div>
    );
};

CalculationSection.propTypes = {
    selectedCourses: PropTypes.array,
    totalCredit: PropTypes.number,
    reamingCredit: PropTypes.number
};

export default CalculationSection;