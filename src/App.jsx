import React from 'react';
import Tabs from './components/Tabs';
import './scss/style.css';
import { nanoid } from 'nanoid'



export default function App() {
    const [toggleState, setToggleState] = React.useState(1);
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [])
    const [activeTasks, setActiveTasks] = React.useState([])
    const [completedTasks, setCompletedTasks] = React.useState([])
    const [currentNote, setCurrentNote] = React.useState({
        task: "",
        isCompleted: false
    })

    React.useEffect(() => {
        const activeList = notes.filter((value) => {
          if (value.isCompleted === false) {
            return value
          }
        })
        
        const completedList = notes.filter((value) => {
          if (value.isCompleted === true) {
            return value
          }
        })
    
        setActiveTasks(activeList)
        setCompletedTasks(completedList)
        
        localStorage.setItem("notes", JSON.stringify(notes))

        
      }, [notes])
    
    function handleChange(e) {
        const { name, value } = e.target
        setCurrentNote({...currentNote, [name]: value, id: nanoid()})

    }

    function checkItem(id) {
      setNotes(notes.map(note => {
        if(id === note.id) {
          return {...note, isCompleted: !note.isCompleted}
        } else {
          return note
        }
      }))
  
    }

    function deleteSelectedNote(event, noteId) {
      setNotes(notes => notes.filter(note => note.id !== noteId))
    }
    
    function deleteAllNotes() {
      setNotes([])
    }

    function submitNote() {
        setNotes(prevNotes => [currentNote, ...prevNotes])
        //notes.push(currentNote)
        
    }

    

    function toggleTab(index) {
        setToggleState(index);
    };


    return (
        <div className="page__wrapper">
            <h1 className="page__title">#todo</h1>
            <Tabs 
            clickHandler={toggleTab}
            state={toggleState}
            handleChange={handleChange}
            submitNote={submitNote}
            notes={notes}
            checkItem={checkItem}
            activeTasks={activeTasks}
            completedTasks={completedTasks}
            deleteAllNotes={deleteAllNotes}
            deleteSelectedNote={deleteSelectedNote}
            />
        </div>
    )
}