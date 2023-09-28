import PropTypes from 'prop-types';
import { LuDollarSign } from 'react-icons/lu';
import { HiOutlineBookOpen } from 'react-icons/hi';

const Course = ({course,handleEnrolledCourse}) => {
    const {course_name, course_description,price,credit,img} = course

    return (
        <div className='space-y-3 bg-white p-5 rounded-xl'>
            <div className='flex justify-center'>            
                <img src={img} alt="course cover img" />
            </div>
            <h2 className='text-[#1C1B1B] text-lg font-semibold'>{course_name}</h2>
            <h2 className='text-[#1C1B1B99] text-sm font-normal'>{course_description}</h2>
            
            <div className='flex justify-between text-base'>
            <div  className='flex text-[#1C1B1B99]'>
                <LuDollarSign style={{fontSize:'24px'}}></LuDollarSign>
                 <p >Price : {price}</p>
            </div>
            <div  className='flex text-[#1C1B1B99]'>
                <HiOutlineBookOpen style={{fontSize:'24px'}}></HiOutlineBookOpen>
                 <p >Credit : {credit}hr</p>
            </div>
            </div>
        <button onClick={() => {handleEnrolledCourse(course)}} className='text-base font-semibold w-full bg-[#2F80ED] border border-[#2F80ED] text-white py-2 rounded-lg'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleEnrolledCourse: PropTypes.func
};

export default Course;