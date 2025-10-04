import './ConditionalStyling.css'
import { useState } from 'react';

export default function ConditionalStyling() {

    const [conditionalStyle, setConditionalStyle] = useState(false);

    const handleConditionalStyle = () => { 
        setConditionalStyle(() => !conditionalStyle);
    } 

    return(
        <div style={{
            'display':'flex',
            'justify-content':'space-evenly'
        }}>
            <p className={`ConditionalStyle ${conditionalStyle ? 'ConditionalStyle2':''}`}>Conditional Styling {conditionalStyle}</p>
            <button onClick={handleConditionalStyle}>Change the Style!</button>
        </div>
    )
}