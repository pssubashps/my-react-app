import React from 'react';
import classes from './Logo.module.css';
import ProfilePic from '../../assets/images/profile.png';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={ProfilePic} alt="Profile pic"/>
    </div>
);

export default logo;