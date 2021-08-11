import React from 'react';
import './Research.css'
import econ460 from './Econ 460 Final Report.pdf';
import econ570 from './ECON 570 Final Project .pdf';

export function Research() {
    return (
        <div>
            <h3><a href={econ460} download="econ460">Download ECON 460</a></h3>
            <h3><a href={econ570} download="econ570">Download ECON 570</a></h3>
        </div>
    )
}