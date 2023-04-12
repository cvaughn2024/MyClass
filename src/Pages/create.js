import { useEffect, useState } from 'react';

const Create = ({ addPost }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [postType, setPostType] = useState('text');
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [quizQuestion, setQuizQuestion] = useState('');
  const [quizAnswers, setQuizAnswers] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [coursesTable, setCoursesTable] = useState([]);

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

  // functions to select course, handle form submission for said course
  const handleCourseSelect = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleQuizQuestionChange = (event) => {
    setQuizQuestion(event.target.value);
  };

  const handleQuizAnswerChange = (index, event) => {
    const newAnswers = [...quizAnswers];
    newAnswers[index] = event.target.value;
    setQuizAnswers(newAnswers);
  };

  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswerIndex(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // new post object
    const newPost = {
      course: selectedCourse,
      type: postType,
      title: postTitle,
      text: postText,
      quizQuestion: quizQuestion,
      quizAnswers: quizAnswers,
      correctAnswerIndex: correctAnswerIndex,
      creator: currentUser.name,
      date: new Date(),
    };
  
    // retrieve all posts from local storage
    const existingAllPosts = JSON.parse(localStorage.getItem('AllPosts')) || {};
  
    // ddd new post to all posts array for the selected course
    const coursePosts = existingAllPosts[selectedCourse] || [];
    const updatedCoursePosts = [...coursePosts, newPost];
    const updatedAllPosts = { ...existingAllPosts, [selectedCourse]: updatedCoursePosts };
  
    // store updated allposts array back into local storage
    localStorage.setItem('AllPosts', JSON.stringify(updatedAllPosts));
  
    // reset form
    setSelectedCourse(null);
    setPostType('text');
    setPostTitle('');
    setPostText('');
    setQuizQuestion('');
    setQuizAnswers(['', '', '', '']);
    setCorrectAnswerIndex(0);
  };
  
  return (

    <><div id="title">
          <h1>Create</h1>

      </div><div id="make_post">
              <h2>Make a new post</h2>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="course-select">Select a course:</label>
                      <select id="course-select" value={selectedCourse} onChange={handleCourseSelect}>
                          <option value="">Select a course</option>
                          {coursesTable.map((course) => (
                              <option key={course.id}>
                                  {JSON.stringify(course.name)}
                              </option>
                          ))}
                      </select>
                  </div>
                  {selectedCourse && (
                      <div>
                          <label htmlFor="post-type-select">Post type:</label>
                          <select id="post-type-select" value={postType} onChange={handlePostTypeChange}>
                              <option value="text">Text post</option>
                              <option value="quiz">Quiz post</option>
                          </select>
                      </div>
                  )}
                  
                  {selectedCourse && (
                      <><div>
                          <label htmlFor="post-title">Title:</label>
                          <input id="post-title" type="text" value={postTitle} onChange={handlePostTitleChange} />
                      </div><div>
                              <label htmlFor="post-text">Text:</label>
                              <textarea id="post-text" value={postText} onChange={handlePostTextChange} />
                          </div></>
                  )}
                  {selectedCourse && postType === 'quiz' && (
                      <div>
                          <label htmlFor="quiz-question">Question:</label>
                          <input id="quiz-question" type="text" value={quizQuestion} onChange={handleQuizQuestionChange} />
                          <div>
                              <label htmlFor="quiz-answer-1">Answer 1:</label>
                              <input id="quiz-answer-1" type="text" value={quizAnswers[0]} onChange={(e) => handleQuizAnswerChange(0, e)} />
                          </div>
                          <div>
                              <label htmlFor="quiz-answer-2">Answer 2:</label>
                              <input id="quiz-answer-2" type="text" value={quizAnswers[1]} onChange={(e) => handleQuizAnswerChange(1, e)} />
                          </div>
                          <div>
                              <label htmlFor="quiz-answer-3">Answer 3:</label>
                              <input id="quiz-answer-3" type="text" value={quizAnswers[2]} onChange={(e) => handleQuizAnswerChange(2, e)} />
                          </div>
                          <div>
                              <label htmlFor="quiz-answer-4">Answer 4:</label>
                              <input id="quiz-answer-4" type="text" value={quizAnswers[3]} onChange={(e) => handleQuizAnswerChange(3, e)} />
                          </div>
                          <div>
                              <label htmlFor="correct-answer-select">Correct answer:</label>
                              <select id="correct-answer-select" value={correctAnswerIndex} onChange={handleCorrectAnswerChange}>
                                  <option value={0}>Answer 1</option>
                                  <option value={1}>Answer 2</option>
                                  <option value={2}>Answer 3</option>
                                  <option value={3}>Answer 4</option>
                              </select>
                          </div>
                      </div>
                  )}

                  <button id = "gradient" type="submit">Create Post</button>
              </form>
          </div></>
  
  );
}

export default Create;
  
  
 