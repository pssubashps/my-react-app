import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Projects from '../../components/projects/projects';
import ProjectControl from '../../components/ProjectControl/ProjectControl';
class Portfolio extends Component {
    state = {
        projects: [
            { title: 'Portfolio', description: 'React based portfolio application' },
           
        ]
    }
    addProject = (value) => {

        this.setState((prevState, props) => {
           const updatedProjects = prevState.projects;
            updatedProjects.push(value)
            return {
                projects: updatedProjects
            }
        })
    }
    render() {
        return (
            <Aux>
                <div>
                    <Projects projects={this.state.projects} />
                </div>
                <ProjectControl add={this.addProject} />
            </Aux>

        );
    }
}
export default Portfolio;