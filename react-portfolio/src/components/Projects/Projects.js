import React from 'react';
import './Projects.css';
import brewery from './images/brewery.png';
import courtfinder from './images/courtfinder.png';
import awesomecrap from './images/awesomecrap.png';

const projectData = [
    {
        title: 'Good Times',
        repoName: 'book-search',
        deployedName: 'https://boiling-basin-57000.herokuapp.com/',
        image: brewery,
        description: " "
    },
    {
        title: 'Court Finder',
        repoName: 'boogiematrix/court-finder',
        deployedName: 'https://quiet-beyond-45478.herokuapp.com/',
        image: courtfinder,
        description: " "
    },
    {
        title: 'Awesome Crap',
        repoName: 'court-finder',
        deployedName: 'https://quiet-beyond-45478.herokuapp.com/',
        image: awesomecrap,
        description: ''
    },
];

export function Projects() {
    return projectData.map((project, index) => {
        return (
            <div className='card' key={index}>
                <h2>{project.title}</h2>
                <div className='cardContent'> 
                    <div className='imageWrapper'>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                    </div>
                    <div class="projectlinks">
                        <p><a class="deployed" href={project.deployedName}>Link to App</a></p>
                        <p><a href={`https://github.com/${project.repoName}`}>GitHub Repository</a></p>
                    </div>
                </div>
            </div>
        )
    })
}