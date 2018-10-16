import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './project.module.css';

class Project extends Component {

    render() {
        return (
            <div className={classes.Project}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}
export default Project;