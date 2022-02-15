import React from 'react';

export default function ListItem(props) {
    return (
        <div className="content__item flex-row">
            <input type="checkbox" className="item__checkbox" defaultChecked={props.completed} onClick={props.checkItem} />
            
            <p className="item__description">{props.task}</p>
        </div>
    )
}