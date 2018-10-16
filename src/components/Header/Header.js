import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <header className={classes.Header}>
            <nav>
                <div className="row">

                    <ul className={classes.MainNav}>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#works">My Works</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                   
                </div>
            </nav>
            <div className={classes.TextBox}>
                <h1>Hello, I'am <span className={classes.Name}>Subash</span><br/>
                I'am a full-stack web developer
                </h1>
               <p></p>
            </div>

        </header>

    );
};
export default header;