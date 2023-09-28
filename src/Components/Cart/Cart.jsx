import PropTypes from 'prop-types';


const Cart = ({ enrolledCourse ,gainedCredits, prices,remainingCredits}) => {


  return (
    <div className='rounded-xl bg-white p-6 space-y-4 mx-4'>
        <header className="text-[#2F80ED] font-bold text-xl leading-5">
        Credit Hour Remaining {remainingCredits} hr
        </header>
        <hr />

        <div className="text-[#1C1B1B]  font-bold text-lg">
        Course Name        
        </div>
       
        <ol type='1' className='list-decimal list-inside'>
            {
            enrolledCourse.map(enrolledCourse => <li 
            key={enrolledCourse.id}>
            {enrolledCourse.course_name}
            </li>)
             }    
        </ol>

        <hr />
        <div className="text-[#1C1B1BCC] font-medium text-base">
            Total Credit Hour : {gainedCredits}
        </div>
        <hr />
        <div className="text-[#1C1B1BCC] text-base font-semibold">
            Total Price : {prices} USD
        </div>


      
    </div>
  );
};

Cart.propTypes = {
  enrolledCourse: PropTypes.array,
  prices: PropTypes.number,
  gainedCredits: PropTypes.number,
  remainingCredits: PropTypes.number
};

export default Cart;

