import React, { Component } from 'react';
import classes from '../ProjectControl/ProjectControl.module.css';

class ProjectControl extends Component {

    title;
    description;

    titleHandler = (event) => {
        this.title = event.target.value;
    }

    descriptionHandler = (event) => {
        this.description = event.target.value;
    }

    render() {
        return (
            <div className={classes.ProjectControl}>
                <div className={classes.control}>
                    <label>Project Title</label>
                    <input type="text" onChange={this.titleHandler} />
                </div>
                <div className={classes.control}>
                    <label className={classes.control}>Project Description</label>
                    <input type="text" onChange={this.descriptionHandler} />
                </div>
                <div>
                    <button type="button" onClick={() => this.props.add({ title: this.title, description: this.description })}>Add</button>
                </div>
            </div>
        )
    }

}

export default ProjectControl;