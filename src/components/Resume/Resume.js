import React from 'react';
import './Resume.css'
import davisResume from './Davis Kim Resume 0.23.pdf';

export function Resume() {
    return (
        
        <div>
            <h3><a href={davisResume} download="daviskim_resume">Download Resume</a></h3>
        </div>
    )
}

