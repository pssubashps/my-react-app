import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Skill.module.css';

const skill = (props) => {
    const style={
        width:props.rating,
        backgroundColor: props.color
    };
    return (
        <Aux>
            <p>{props.name}</p>
            <div className={classes.Container}>
                <div className={classes.Skill} style={style}>{props.rating}</div>
            </div>
        </Aux>

    );
};

export default skill;