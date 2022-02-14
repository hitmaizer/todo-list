import React from 'react';
import Tabs from './components/Tabs';
import './scss/style.css';

export default function App() {
    const [toggleState, setToggleState] = React.useState(1);

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