import React, { useImperativeHandle, useRef } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const checkboxRef = useRef();
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        // focus: () => { inputRef.current.focus(); },
        get input() { return inputRef.current; },
        get checkbox() { return checkboxRef.current; }
    }));
    
    return (
        <li className={classes.InputContainer}>
            <label className={classes.InputLabel} htmlFor={props.input.id}>
                <input type="checkbox" id={`${props.input.id}--checkbox`} ref={checkboxRef} />
                {props.label}
            </label>
            <input className={classes.Input} ref={inputRef} {...props.input} />
            {props.datalist}
        </li>
    )}
);

export default Input;