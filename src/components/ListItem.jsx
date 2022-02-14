import React from 'react';

export default function ListItem() {
    return (
        <div className="content__item flex-row">
            <input type="checkbox" className="item__checkbox" />
            <p className="item__description">Do coding challenges</p>
        </div>
    )
}