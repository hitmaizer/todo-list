
function Tabs(props) {
    
  
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={props.state === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.clickHandler(1)}>
          <span className="tab__title">
            All
          </span>
        </button>
        <button
          className={props.state === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.clickHandler(2)}>
          <span className="tab__title">
            Active
          </span>
        </button>
        <button
          className={props.state === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.clickHandler(3)}>
          <span className="tab__title">
            Completed
          </span>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={props.state === 1 ? "content  active-content" : "content"}>
          <div className="input__container flex-row">
            <input type="text" className="alltab__input" placeholder="add details" />
            <button className="alltab__btn">
              <span className="btn__text">Add</span> 
            </button>
          </div>
          <div className="alltab__content flex-col">
            
            <div className="content__item flex-row">
              <input type="checkbox" className="item__checkbox" />
              <p className="item__description">Do coding challenges</p>
            </div>
            <div className="content__item flex-row">
              <input type="checkbox" className="item__checkbox" />
              <p className="item__description">Do coding challenges</p>
            </div>
            <div className="content__item flex-row">
              <input type="checkbox" className="item__checkbox" />
              <p className="item__description">Do coding challenges</p>
            </div>

          </div>
        </div>

        <div
          className={props.state === 2 ? "content  active-content" : "content"}>
          <h2>Active</h2>
          <hr />
          <p>
            This is going to be active items
          </p>
        </div>

        <div
          className={props.state === 3 ? "content  active-content" : "content"}>
          <h2>Completed</h2>
          <hr />
          <p>
            This is going to be completed items plus delete
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;