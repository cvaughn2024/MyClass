import React, { useState } from 'react';

const Work = () => {
  const [showAssignments, setShowAssignments] = useState(false);
  const [showFiles, setShowFiles] = useState(false);

  
  const assignments = [
    { id: 1, title: 'Assignment #1' },
    { id: 2, title: 'Quiz #1' },
    { id: 3, title: 'Discussion #2' }
  ];

  const files = [
    { id: 1, title: 'reading_1.pdf' },
    { id: 2, title: 'syllabus.pdf' }
  
  ];

  const toggleAssignments = () => {
    setShowAssignments(!showAssignments);
  }

  const toggleFiles = () => {
    setShowFiles(!showFiles);
  }

  return (
    <div className = "App">
    <div id = "title">
        <h1>Work</h1>
    </div>

    <div id = "work_box">
    <div id="assignments">
      <button id = "work_button" onClick={toggleAssignments}>Assignments</button>
      {showAssignments && (
        <ul>
          {assignments.map(assignment => (
            <li key={assignment.id}>{assignment.title}</li>
          ))}
        </ul>
      )}
    </div>

    <div id="files">
      <button id = "work_button" onClick={toggleFiles}>Files</button>
      {showFiles && (
        <ul>
          {files.map(file => (
            <li key={file.id}>{file.title}</li>
          ))}
        </ul>
      )}
    </div>

    </div>

    </div>
  );
}

export default Work;
