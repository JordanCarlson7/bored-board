import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => (
    <li className={classes.InputContainer}>
        <label className={classes.InputLabel} htmlFor={props.input.id}>{props.label}</label>
        <input className={classes.Input} ref={ref} {...props.input} />
        {props.datalist}
    </li>
));

export default Input;