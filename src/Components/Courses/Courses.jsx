import PropTypes from 'prop-types';
import Course from '../../Components/Course/Course'

const Courses = ({course,handleEnrolledCourse}) => {
    return (
        <div>
      <Course 
        key={course.id}
        course={course}
        handleEnrolledCourse={handleEnrolledCourse}
        ></Course>
        </div>
    );
};

Courses.propTypes = {
    course: PropTypes.object,
    handleEnrolledCourse: PropTypes.func
};

export default Courses;