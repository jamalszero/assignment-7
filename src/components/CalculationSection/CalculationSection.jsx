import { list } from "postcss";


const CalculationSection = ({selectedCourses}) => {
    return (
        <div className=" w-1/4 border border-green-400 bg-base-100 border-dotted h-min p-4 rounded-lg ">
            <h2 className="font-bold text-xl text-blue-500 py-1">Credit Hour Remaining 7 hr</h2>
            <hr />
            <h1 className="font-bold py-1 text-lg">
                Course Name
            </h1>
            <ol className=" list-decimal ml-4 ">
                    
             {
                selectedCourses.map(course => <li>{course.title}</li>)
             }
                    
            </ol>
            <hr />
            <h3 className="font-bold py-1 text-slate-500">Total Credit Hour : </h3>
            <hr />
            <h3 className="font-bold py-1 text-slate-500">Total Price : </h3>
        </div>
    );
};

export default CalculationSection;