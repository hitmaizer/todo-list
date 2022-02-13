import React from 'react';
import Tabs from './components/Tabs';

export default function App() {
    const [toggleState, setToggleState] = React.useState(1);

    function toggleTab(index) {
        setToggleState(index);
    };


    return (
        <div className="page__wrapper">
            <Tabs 
            clickHandler={toggleTab}
            state={toggleState}
            />
        </div>
    )
}