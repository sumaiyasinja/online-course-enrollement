import { useState,useEffect } from 'react'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
 
function App() {
  const[courses, setCourses]= useState([])
  
  const[enrolledCourse, setEnrolledCourse]= useState([])
  const[gainedCredits, setGainedCredits]= useState(0)
  const[prices, setPrices]= useState(0)
  const [remainingCredits, setRemainingCredits] = useState(20);
 
  
  useEffect(()=> {
   fetch('onlineCourse.json')
   .then(res => res.json()) 
   .then( data => setCourses(data))
  },[])

// Enrolled Course list handling
const handleEnrolledCourse = (enrolled) => {
  if(remainingCredits < enrolled.credit) {
    toast.error('Not enough credit hour remained.')
    return
  }
  // Check if the course is already in the enrolledCourse array
  if (!enrolledCourse.some((course) => course.id === enrolled.id)) {
    const newEnrolledCourse = [...enrolledCourse, enrolled];
    setEnrolledCourse(newEnrolledCourse);
    toast.success('Course enrolled successfully')
    setGainedCredits(gainedCredits + enrolled.credit)

    setRemainingCredits(remainingCredits - enrolled.credit);

    setPrices(prices + enrolled.price)
  }
    else {
      toast.error('This course already enrolled')
  }
  
};

  return (
    <div >
      <Toaster 
       position="top-right"
       toastOptions={{
        success: {
          style: {
            background: 'green',
            borderRadius: '8px',
            color: 'white',
            padding: '16px',
          },
        },
        error: {
          style: {
            background: 'red',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',

          },
        },
      }}
      />
      <header className="p-10 ">
        <h2 className='text-[#1C1B1B] text-3xl text-center font-bold hover:text-[#2F80ED]'>Course Registration</h2>
      </header>      
      <main className='flex flex-col md:flex-row lg:flex-row gap-3 md:gap-0 lg:gap-0'>
        
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 '>
        {
          courses.map(course => <Courses key={course.id}
             course={course}
             handleEnrolledCourse={handleEnrolledCourse}
             ></Courses> )
        }
      </section>
      <section className='w-full md:w-2/4 lg:w-1/2	'>

      <Cart key={enrolledCourse.id} 
        enrolledCourse={enrolledCourse}
        gainedCredits={gainedCredits}
        remainingCredits={remainingCredits}
        prices={prices}
      ></Cart> 

      </section>
        </main>
    </div>
  )
}

export default App
