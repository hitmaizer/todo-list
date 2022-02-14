import { NanoDimensions } from '@styled-icons/crypto/Nano';
import React from 'react';
import Tabs from './components/Tabs';
import './scss/style.css';
import { nanoid } from 'nanoid'

export default function App() {
    const [toggleState, setToggleState] = React.useState(1);
    const [notes, setNotes] = React.useState([])
    const [currentNote, setCurrentNote] = React.useState({
        id: nanoid(),
        task: "",
        isCompleted: false
    })
    
    

    function toggleTab(index) {
        setToggleState(index);
    };


    return (
        <div className="page__wrapper">
            <h1 className="page__title">#todo</h1>
            <Tabs 
            clickHandler={toggleTab}
            state={toggleState}
            />
        </div>
    )
}