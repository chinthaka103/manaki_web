import React, { useState, useRef } from 'react';

import "./Accordion.css"
import Chevron from '../Chevron/Chevron';

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate");
    }

    let contentText;
    if(props.content === "") {
        contentText = <span></span>
    } else {
        contentText = <div 
                        className="accordion_text"
                        dangerouslySetInnerHTML={{ __html: props.content }} />
    }

    return (
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div 
                ref={content} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion_content">
                {contentText}
                <div style={{margin: '10px'}}>{props.children}</div>
            </div>
        </div>
    );

}

export default Accordion;