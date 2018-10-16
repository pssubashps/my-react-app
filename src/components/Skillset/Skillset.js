import React, { Component } from 'react';
import Skill from '../Skill/Skill';
import classes from './Skillset.module.css';
class Skillset extends Component {
    skills = [
        {name:'PHP',rating:'75%',color:'#042356'},
        {name:'NodeJS',rating:'60%',color:'#095906'},
        {name:'AWS Components',rating:'60%',color:'#af7f05'},
        {name:'Angular',rating:'80%',color:'#8e0404'},
        {name:'ReactJS',rating:'20%',color:'#046272'},
        {name:'CSS',rating:'10%',color:'#5c7204'}
    ];
    skills = this.skills.map((skill) => {
        return <Skill key={skill.name} name={skill.name} rating={skill.rating} color={skill.color} />;
    });
    render() {
        return (
            <section className={classes.Skillset} id="skills">
                {this.skills}
            </section>
        );
    }

}

export default Skillset;