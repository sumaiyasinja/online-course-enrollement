# Questions

## Project Features

1. **Registration Dashboard System for an Online Course Website:**
   - Dashboard system for course registration in an online course platform.

2. **Credit Hours Control:**
   - Ensures that a student cannot enroll in more than 20 credit hours' worth of courses at a time.

3. **Cart Display:**
   - Display total price, total credits, and a list of enrolled courses in a cart.

## Discussion on State Management in the Project

Certainly, I can provide a discussion of how state is managed in your assignment project based on the provided code snippets from your five JSX files. Your project appears to use React and React hooks for state management. Here's how you can discuss it:

### App.jsx:
- In the `App` component, you've used the `useState` hook to manage two important pieces of state: `courses` and `enrolledCourse`. 
- `courses` represents the list of available courses, and it's initialized as an empty array.
- `enrolledCourse` represents the list of courses that a user has enrolled in, and it's also initialized as an empty array.
- You've also used the `useEffect` hook to fetch data from an 'onlineCourse.json' file when the component mounts and update the `courses` state with the fetched data.

### Courses.jsx:
- The `Courses` component receives `course` and `handleEnrolledCourse` as props.
- While this component itself doesn't manage any state, it acts as a bridge between the parent (`App`) component's state and the child (`Course`) component by passing the `course` data and the `handleEnrolledCourse` function as props.

### Course.jsx:
- The `Course` component receives `course` and `handleEnrolledCourse` as props. It uses these props to display information about each individual course.
- The component does not manage its own state; instead, it relies on the parent (`Courses`) component to manage the state and handle course enrollment.

### Cart.jsx:
- The `Cart` component receives `enrolledCourse` as a prop, which represents the list of enrolled courses.
- In this component, you extract and display information about the enrolled courses.
- Similar to `Course.jsx`, this component does not manage its own state; it relies on the parent (`App`) component's state to display the enrolled courses.

### State Flow:
- State management in your project follows a top-down approach, with the `App` component at the top of the component hierarchy managing the main state variables (`courses` and `enrolledCourse`).
- The state is passed down to child components as props, allowing them to access and display the relevant information.
- State updates are triggered by user interactions, such as adding courses to the cart, which is handled by the `handleEnrolledCourse` function in the `App` component.

### State Handling Best Practices:
- Your code appears to follow best practices for state management in React, including using hooks like `useState` and `useEffect`.
- State is initialized correctly, and updates are made using the `setCourses` and `setEnrolledCourse` functions, which ensures immutability.

In summary, your assignment project effectively manages state using React's hooks, with the top-level `App` component managing the main state variables and passing data and functions down to child components as needed. This approach adheres to React's principles of unidirectional data flow and separation of concerns.
