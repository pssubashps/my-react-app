import React from 'react';
import Project from './project/project';
import classes from './projects.module.css';

const projects = (props) => {
    const projects = props.projects.map((project,i) => {
        return <Project  key={i} title={project.title} description={project.description} />;
    });
    return (
        <div className={classes.Projects}>
            {projects}
        </div>
    );
};
export default projects;