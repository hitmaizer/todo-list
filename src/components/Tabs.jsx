/* eslint-disable array-callback-return */
import React from 'react'
import { DeleteBin7 } from '@styled-icons/remix-line/DeleteBin7'
import ListItem from '../components/ListItem'
import { nanoid } from 'nanoid'

function Tabs(props) {

  const allItems = props.notes.map(note => <ListItem 
    key={nanoid()}
    task={note.task}
    completed={note.isCompleted}
    checkItem={props.checkItem}
    id={note.id}
    handleClick={() => props.checkItem(note.id)} />)
  
  const activeItems = props.activeTasks.map(item => <ListItem 
    key={nanoid()}
    task={item.task}
    completed={item.isCompleted}
    checkItem={props.checkItem}
    id={item.id}
    handleClick={() => props.checkItem(item.id)} />)
  
  const completedItems = props.completedTasks.map(item => 
    <div key={nanoid()} className="content__item flex-row">
      <ListItem 
      key={nanoid()}
      task={item.task}
      completed={item.isCompleted}
      checkItem={props.checkItem}
      id={item.id}
      handleClick={() => props.checkItem(item.id)} />
      <DeleteBin7 
      key={nanoid()} 
      size="24px" 
      className="item__icon"
      onClick={(e) => props.deleteSelectedNote(e, item.id)} />
    </div> )
    

  
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
        className={props.state === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => props.clickHandler(1)}
        >
          <span className="tab__title">
            All
          </span>
        </button>
        <button
        className={props.state === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => props.clickHandler(2)}
        >
          <span className="tab__title">
            Active
          </span>
        </button>
        <button
        className={props.state === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => props.clickHandler(3)}
        >
          <span className="tab__title">
            Completed
          </span>
        </button>
      </div>
      <div className="content-tabs">
        <div className={props.state === 1 ? "content  active-content" : "content"}>
          <div className="input__container flex-row">
            <input type="text" 
            className="alltab__input" 
            placeholder="add details"
            name="task" 
            onChange={(e) => props.handleChange(e)}
            />
            <button className="alltab__btn" onClick={props.submitNote}>
              <span className="btn__text">Add</span> 
            </button>
          </div>
          <div className="alltab__content flex-col">            
            {allItems}
          </div>
        </div>

        <div className={props.state === 2 ? "content  active-content" : "content"}>
          <div className="input__container flex-row">
            <input type="text" 
            className="alltab__input" 
            placeholder="add details"
            name="task" 
            />
            <button className="alltab__btn" onClick={props.submitNote}>
              <span className="btn__text">Add</span> 
            </button>
          </div>
          <div className="alltab__content flex-col">
            {activeItems}
          </div>
        </div>

        <div className={props.state === 3 ? "content  active-content" : "content"}>
        <div className="alltab__content flex-col">
            {
              completedItems.length !== 0 && 
                <div className="alltab__content flex-col">
                  {completedItems}
                </div>
            }
            
            <button className="delete__btn" onClick={props.deleteAllNotes}>
              <span className="btn__text">delete all</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;