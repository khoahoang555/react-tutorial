import React, {useState, useCallback} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOuput from "./components/Demo/DemoOuput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log("App Running!");

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prevState => !prevState);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOuput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
