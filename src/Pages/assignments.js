/*mport React from 'react';

const Assignments = () =>{
    return(
    <div className="App">

        

        <h1>Work</h1>

        <h2>Assignments</h2>
        <hr class = "hrother"/>

        <h2>Files</h2>
        <hr class = "hrother"/>

    </div>
    );
};

export default Assignments;*/
import React, { useState } from 'react';

function Assignments() {
  const [showMenu, setShowMenu] = useState(false);

  const assignments = [
    { id: 1, title: 'Assignment 1' },
    { id: 2, title: 'Assignment 2' },
    { id: 3, title: 'Assignment 3' }
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div id="assignments">
      <button onClick={toggleMenu}>Assignments</button>
      {showMenu && (
        <ul>
          {assignments.map(assignment => (
            <li key={assignment.id}>{assignment.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Assignments;
