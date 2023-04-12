
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Courses = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [coursesTable, setCoursesTable] = useState([]);
  

    // function to keep track of currentuser and all the created courses
    useEffect(() => {
        // Retrieve the current user from local storage
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(storedUser);
      
        // Retrieve the courses table from local storage
        const storedCoursesTable = JSON.parse(localStorage.getItem('coursesTable')) || [];
      
        // Set the courses table
        setCoursesTable(storedCoursesTable);
      }, []);
      

      // function to create a course given a name and description
      const createCourse = (courseName, courseDesc) => {
        
        // if currentuser is not define
        if (!currentUser) {
          // display error message
          alert('Error: Current user not defined.');
          return;
        }
      
        // new course object
        const newCourse = {
          id: uuidv4(),
          name: courseName,
          description: courseDesc,
          createdBy: currentUser.name,
          users: [currentUser.name],
        };
      
        // add new course to courses table
        const updatedCoursesTable = [...coursesTable, newCourse];
        setCoursesTable(updatedCoursesTable);
      
        // save updated courses table to local storage
        localStorage.setItem('coursesTable', JSON.stringify(updatedCoursesTable));
      };
          

      // function to delete course given courseid and user who created it

      const deleteCourse = (id, createdBy) => {
        if (!currentUser) {
          // Display an error message or redirect the user to a login page
          console.log('Error: Current user not defined.');
          return;
        }
      
        // check if attempted deletion is by coursecreator
        if (currentUser.name !== createdBy) {
         
          window.alert("Only the creator of a course can delete the course.");
          return;
        }
      
        // confirm deletion
        const confirmDelete = window.confirm('Are you sure you want to delete this course?');
        if (!confirmDelete) {
          return;
        }
      
        const updatedCoursesTable = coursesTable.filter((course) => course.id !== id);
        setCoursesTable(updatedCoursesTable);
        localStorage.setItem('coursesTable', JSON.stringify(updatedCoursesTable));
      };
      


    return (

        <><div id="title">
            <h1>Courses</h1>

        </div>
        
        <div>
                {/* courses list */}
                <div id="created_courses">
                    <h2>Created Courses</h2>
                    <ul>
                        {coursesTable.map(course => (
                            <li key={course.id}>
                                <p >Course Name: {course.name}</p>
                                <p>Created By: {course.createdBy}</p>
                                Course Description: <p id = "description">{course.description} </p>
                                
                               
                                <button id = "gradient_delete" onClick={() => deleteCourse(course.id, course.createdBy)}>Delete Course</button>
                         
                            </li>
                        ))}
                    </ul>
                </div>

                {/* course creation form */}

                <div id = "create_course_form">
                <h2>Add a Course</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createCourse(e.target.courseName.value, e.target.courseDesc.value);
                    e.target.courseName.value = '';
                    e.target.courseDesc.value = '';
                } }>
                    <input type="text" name="courseName" placeholder="Course Name" />
                    <input type="text" name="courseDesc" placeholder="Course Description" />
                    <button id = "gradient_create" type="submit">Create Course</button>
                </form>
                </div>


            </div></>
      );
    };

    
    export default Courses;
