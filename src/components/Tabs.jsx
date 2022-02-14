import { DeleteBin7 } from '@styled-icons/remix-line/DeleteBin7'
import ListItem from '../components/ListItem'

function Tabs(props) {
    
  
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
            <button className="alltab__btn">
              <span className="btn__text">Add</span> 
            </button>
          </div>
          <div className="alltab__content flex-col">            
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>

        <div className={props.state === 2 ? "content  active-content" : "content"}>
          <div className="input__container flex-row">
            <input type="text" 
            className="alltab__input" 
            placeholder="add details"
            name="task" 
            />
            <button className="alltab__btn">
              <span className="btn__text">Add</span> 
            </button>
          </div>
          <div className="alltab__content flex-col">
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>

        <div className={props.state === 3 ? "content  active-content" : "content"}>
        <div className="alltab__content flex-col">
            <div className="content__item flex-row">
              <input type="checkbox" defaultChecked={true} className="item__checkbox" />
              <p className="item__description item__description--completed"><del>Do coding challenges</del></p>
              <DeleteBin7 size="24px" className="item__icon" />
            </div>
            <button className="delete__btn">
              <span className="btn__text">delete all</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;