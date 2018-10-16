import React from 'react';

import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import Skillset from '../Skillset/Skillset';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <Header/>
        <Skillset/>
    </Aux>
);

export default layout;
