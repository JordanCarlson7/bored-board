import React, { useImperativeHandle, useRef } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const checkboxRef = useRef();
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        get input() { return inputRef.current; },
        get checkbox() { return checkboxRef.current; }
    }));

    const changeHandler = () => { checkboxRef.current.checked = true; };
    const datalistFocusHandler = () => { inputRef.current.value = ''; };
    
    return (
        <li className={classes.InputContainer}>
            <label className={classes.InputLabel} htmlFor={props.input.id}>
                {props.toggle && <input type="checkbox" className={classes.InputToggle} ref={checkboxRef} />}
                {props.label}
            </label>
            <input
                className={classes.Input}
                ref={inputRef}
                {...props.input}
                {...(props.toggle && {onChange: changeHandler})}
                {...(props.datalist && {onFocus: datalistFocusHandler})}
            />
            {props.datalist}
        </li>
    )}
);

export default Input;