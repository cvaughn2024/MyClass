
import React, { useState } from "react";

const Progress = () => {

const [selectedButton, setSelectedButton] = useState('progress_grades');
const [showGrades, setshowGrades] = useState(false);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  
  const toggleGrades = () =>{
      setshowGrades(!showGrades);
  }
    const grades = [
        { id: 1, title: 'Math: 97' },
        { id: 2, title: 'English: 95' },
        { id: 3, title: 'Science: 88' }
      ];
    return(


    <div className = "App">


        <div className = "prog" id = "title">
        <h1>Progress</h1>
        </div>

        
        <div id = "progress_display">


        <button id = "progress_grades" onClick={toggleGrades}>Grades</button>
      {showGrades && (
        <ul>
          {grades.map(grade => (
            <li key={grade.id}>{grade.title}</li>
          ))}
        </ul>
      )}
        
        <button id = "progress_growth">Growth Charts</button>

        
        </div>
      

      
     


        </div>

    );

};

export default Progress;



