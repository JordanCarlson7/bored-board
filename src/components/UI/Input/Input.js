import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => (
    <li className={classes["input--container"]}>
        <label className={classes["input--label"]} htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
        {props.datalist}
    </li>
));

export default Input;