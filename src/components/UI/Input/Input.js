import classes from './Input.module.css';

const Input = props => (
    <li className={classes["input--container"]}>
        <label className={classes["input--label"]} htmlFor={props.name}>{props.title}</label>
        <input
            id={props.name}
            type={props.type}
            title={props.tooltip}
            list={props.datalistId}
            min={props.min}
            max={props.max}
        />
        {props.datalist}
    </li>
);

export default Input;