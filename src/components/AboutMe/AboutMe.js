import React from 'react';
import './AboutMe.css'
import Linkedin from './Linkedin.png'
export function AboutMe() {
    return (
        <div id="summary">
            <p>
            My name is Davis Kim, and I built this site to provide insight of my professional and academic offerings. 
            I recently graduated from the University of Wisconsin-Madison majoring in Economics, 
            currently I work at PFF (Pro Football Focus) as a data collection analyst. 
            I also, am enrolled in a professional development program 
            at the University of Minnesota CCAPS in full stack development course that 
            utilizes front-end and back-end technologies.
            </p>
            <img src={Linkedin} alt='This is me' />
            <div id="skills">
                <h3>Skills:</h3>
                <ul>
                    <li>CSS3</li>
                    <li>Excel</li>
                    <li>Express</li>
                    <li>HTML5</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Node</li>
                    <li>Python</li>
                    <li>R</li>
                    <li>React</li>
                    <li>SQL</li>
                </ul>
            <br>
            
            
            
            </br>
            </div>
        </div>
    )
}