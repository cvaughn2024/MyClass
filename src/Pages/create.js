import React, { useState } from 'react';

const Create = () =>{

    const [selectedButton, setSelectedButton] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [showForm, setShowForm] = useState('false');
    const [selectedForm, setSelectedForm] = useState('');

    return(
    <div className="App">
        
        <div id = "title">
        <h1>Create</h1>
        </div>

<div id = "create_buttons" >
    <div className = "create">
        Discussions
    </div>

    <div className = "create">
        Events
    </div>

    <div className = "create">
       Questions
    </div>

    <div className = "create">
        Quiz
    </div>

    </div>

    <div id = "create_form">
    

    </div>

    </div>
    );
};

export default Create;