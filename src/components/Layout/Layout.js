import React from 'react';
import Aux from '../../Hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
    <div>Main, Side other stuff</div>
    <main className={classes.content}>
        {props.children}
    </main>
    </Aux>
)

export default layout;