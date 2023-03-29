import React, { useState } from 'react';
//import LoginPage from './login';




const Courses = () => {
    const [classCode, setClassCode] = useState('');
    const [className, setClassName] = useState('');
    const [chosenCourse, selectChosenCourse] = useState('');
    const [ShowCode, setShowCode] = useState(false);
    const [ShowName, setShowName] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');
    const TeamNames = [];
    const [TeamName, setTeamName] = useState('');
    const [AddAnother, setAddAnother] = useState(true);
    const [Done, setDone] = useState(false);
    let x = 0;

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const handleCourseCreation = () =>{
        setShowCode(true);
        setShowName(false);

}    
    const joinCourse = () => {
        setShowCode(true);
        setShowName(false);
        setClassCode(<input type="text" placeholder="Class Code" />);
    };

    const createCourse = () => {
        setShowName(true);
        setShowCode(false);
        setClassName(<input type="text" placeholder="Class Name" />);
        
    };

    const taketoDashboard = () =>{
        setDone(true);
    }

    const askforTeams = () => {
        //x.toString();
        <>
            //x.toString();
            <p>Add Teams?</p>
            
            <><button>Yes</button>
                <button>No</button></></>
       
       setTeamName(<input type="text" placeholder="Team Name"/>);
        setAddAnother(true);

        //<><button onClick={addAnother}>Add Another?</button>
        //OR
        
       
       
}

    const finishCourseCreation = () =>
    {
    setAddAnother(false);
}    
return (
        <div className="App">
        
            <div id = "title">
                <h1>Courses</h1>
            </div>
            

            <div id="buttons">
                <button className = "coursebuttons" onClick={joinCourse}>Join Course +</button>
                <button className = "coursebuttons"onClick={createCourse}>Create Course +</button>
                
                
    
            </div>
            {ShowCode && <div>{classCode}</div>}
            {ShowName && <div>{className}</div>}

            <button className = "coursebuttons" onClick={askforTeams}>Submit</button>
           
            {AddAnother && <div>{TeamName}</div>}

            <><button className = "coursebuttons">Finish Course Creation</button></>
        </div>
    );
};

export default Courses;
