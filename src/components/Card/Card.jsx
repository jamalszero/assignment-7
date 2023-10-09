import PropTypes from 'prop-types';

const Card = ({ course, handleCourseSelection }) => {
    const {id, title, cover, description, credit, price } = course;
    return (
        <div className="card card-compact bg-base-100 p-3 rounded-lg">
            <figure><img src={cover} className=' w-full ' /></figure>
            <div className="card-body">
                <h2 className=' text-lg font-semibold '>{title}</h2>
                <p className='text-slate-500 text-base'>{description}</p>

                <div className='flex justify-between '>
                <p className='flex justify-start gap-1 font-medium text-slate-600'>
                <img src="../../../public/dollar-sign.svg" />
                <span>
                   Price : {price}
                </span>
                </p>
                
                <p className='flex justify-end gap-1 font-medium text-slate-600'>
                <img src="../../../public/book.svg" alt="" />
                <span>
                Credit : {credit}
                </span>
                </p>
                </div>

                <button onClick={() => handleCourseSelection(course)} className=' bg-[#2F80ED] p-2 rounded-md text-white font-semibold '>Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object,

};

export default Card;