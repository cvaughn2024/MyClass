import { useState, useEffect } from 'react';

const Posts = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [coursePosts, setCoursePosts] = useState([]);
  const [coursesTable, setCoursesTable] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(null);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [courseCreator, setCourseCreator] = useState(null);

 // function to obtain stored users and courses
  useEffect(() => {

     // Retrieve the current user from local storage
     const storedUser = JSON.parse(localStorage.getItem('currentUser'));
     setCurrentUser(storedUser);


    // Retrieve the courses table from local storage
    const storedCoursesTable = JSON.parse(localStorage.getItem('coursesTable')) || [];
      
    // Set the courses table
    setCoursesTable(storedCoursesTable);
  }, []);

  
  // function to handle course selection
  const handleCourseSelect = (event) => {
    const selectedCourse = event.target.value;

    // Retrieve the AllPosts array from local storage for the selected course
    const allPosts = JSON.parse(localStorage.getItem('AllPosts')) || {};
    const coursePosts = allPosts[selectedCourse] || [];

    // Set the selected course and course posts
    setSelectedCourse(selectedCourse);
    setCoursePosts(coursePosts);

    setShowAnswers(coursePosts.map(post => false));
  };

  // show the quiz answer if chosen
  const toggleAnswers = (index) => {
    // toggle state of showAnswers for the selected quiz post
    setShowAnswers(prevState => prevState.map((answer, i) => i === index ? !answer : answer));

    // retrieve corresponding quiz post from coursePosts
    const quizPost = coursePosts[index];

    // if the selected quiz post is already selected, reset selectedQuizIndex and selectedQuizAnswer
    if (selectedQuizIndex === index) {
      setSelectedQuizIndex(null);
      setSelectedQuizAnswer(null);
      return;
    }

    // Set the selectedQuizIndex and selectedQuizAnswer for the selected quiz post
    setSelectedQuizIndex(index);
    setSelectedQuizAnswer(quizPost.quizAnswers[quizPost.correctAnswerIndex]);
  }

   
        // function to handle delete post
        const handleDeletePost = (index) => {
            const course = coursesTable.find((course) => JSON.stringify(course.name) === selectedCourse);
           
            
            // check if course was found
            if (!course) {
                window.alert('Selected course was not found!');
                return;
            }


            
            // retrieve corresponding post from coursePosts
            const post = coursePosts[index];
          
            const courseCreator = course.createdBy;
            // check if current user is course creator or post creator. if not, unauthorized deletion
            if (post.creator !== currentUser.name && courseCreator !== currentUser.name) {
              window.alert('You are not authorized to delete this post!');
              return;
            }
          
            // confirm deletion
            const confirmDelete = window.confirm('Are you sure you want to delete this post?');
            if (!confirmDelete) {
              return;
            }
            
            const updatedPosts = [...coursePosts];
            updatedPosts.splice(index, 1);
            setCoursePosts(updatedPosts);
            
            // update allposts in localStorage
            const allPosts = JSON.parse(localStorage.getItem('AllPosts')) || {};
            allPosts[selectedCourse] = updatedPosts;
            localStorage.setItem('AllPosts', JSON.stringify(allPosts));
          };
          
   
  

  return (

    <><div id="title">
          <h1>Posts</h1>

      </div>
      <div id="createeee">

              <h2>Select a course to view posts:</h2>
              <select onChange={handleCourseSelect}>
                  
                  <option  value="">Select a course</option>
                  {coursesTable.map((course) => (

                      <option key={course.id}>
                          {JSON.stringify(course.name)}
                      </option>
                  ))}
              </select>

              {selectedCourse && (
                  <div id="view_posts">
                      <h2>Posts for Course {selectedCourse}</h2>
                      {coursePosts.map((post, index) => (
                          <div key={post.id}>
                              <div id = "post">
                              <h3>Post Title: {post.title}</h3>
                              <h3>Post Creator: {post.creator}</h3>

                              <h3>Date Created: {new Date(post.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</h3>

                              <p>Post Text: {post.text}</p>

                              {post.type === 'quiz' && (
                                  <div>
                                      <p>Question: {post.quizQuestion}</p>
                                      <ul>
                                          {post.quizAnswers.map((answer, i) => (
                                              <li key={i}>
                                                  {answer}
                                                  {selectedQuizIndex === index && i === post.correctAnswerIndex && <span> (Correct)</span>}
                                              </li>
                                          ))}
                                      </ul>
                                      {selectedQuizIndex === index ? (
                                          <p>Correct answer: {selectedQuizAnswer}</p>
                                      ) : (
                                          <button id = "show_answer" onClick={() => toggleAnswers(index)}>
                                              Show Answer
                                          </button>
                                      )}


                                  </div>
                                  
                              )}
                                </div> 
                                <div id = "delete">
                              <button id = "gradient" onClick={() => handleDeletePost(index)}>Delete Post</button>
                              </div>
                          </div>

                          
                      ))}
                  </div>
              )}

          </div></>
  )
}

export default Posts;


