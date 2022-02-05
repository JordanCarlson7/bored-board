import { useState, useRef } from 'react';

import Input from "../UI/Input/Input";
import classes from './Form.module.css';

const Form = props => {
    const [error, setError] = useState();

    const typeRef = useRef();
    const participantsRef = useRef();
    const priceRef = useRef();
    const accessibilityRef = useRef();
    const countRef = useRef();

    // default list of activity types from boredapi.com/documentation
    const typeList = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

    // submission event handler
    const submitHandler = event => {
        event.preventDefault();
        if (!true) {
            // DATA VALIDATION IF APPLICABLE
            setError("ERROR");
            return;
        }

        let accessibility = accessibilityRef.current.checkbox.checked ? accessibilityRef.current.input.value / 100 : null;
        let type = typeRef.current.checkbox.checked ? typeRef.current.input.value.toLowerCase() : null;
        let participants = participantsRef.current.checkbox.checked ? participantsRef.current.input.value : null;
        let price = priceRef.current.checkbox.checked ? priceRef.current.input.value / 100 : null;

        props.onSubmit({accessibility, type, participants, price}, countRef.current.input.value);
    };
    
    return (
        <form className={classes.Form} onSubmit={submitHandler}>
            <ul className={classes.InputList}>
                <Input
                    label="Activity Type"
                    toggle
                    input={{
                        id: "type",
                        type: "text",
                        list: "typeList",
                        defaultValue: "any",
                    }}
                    datalist={
                        <datalist id="typeList">
                            <option key="any" value="any"/>
                            {typeList.map(t => (<option key={t} value={t}/>))}
                        </datalist>
                    }
                    ref={typeRef}
                />
                <Input
                    label="Participants"
                    toggle
                    input={{
                        id: "participants",
                        type: "number",
                        min: 1,
                        max: 20,
                        defaultValue: 1,
                        title: "The number of people that this activity could involve (between 1 and 50)",
                    }}
                    ref={participantsRef}
                />
                <Input
                    label="Price"
                    toggle
                    input={{
                        id: "price",
                        type: "range",
                        min: 0,
                        max: 100,
                        step: 5,
                        defaultValue: 0,
                        title: "A factor describing the cost of the event with zero being free",
                    }}
                    ref={priceRef}
                />
                <Input
                    label="Accessibility"
                    toggle
                    input={{
                        id: "accessibility",
                        type: "range",
                        min: 0,
                        max: 100,
                        step: 10,
                        defaultValue: 0,
                        title: "A factor describing how possible an event is to do with zero being the most accessible",
                    }}
                    ref={accessibilityRef}
                />
                <Input
                    label="Ideas to Show"
                    input={{
                        id: "count",
                        type: "number",
                        min: 1,
                        max: 10,
                        defaultValue: 1,
                        title: "How many activity ideas would you like to see?",
                    }}
                    ref={countRef}
                />
                <li className={classes.SubmitContainer}>
                    <button type="submit" disabled={error ? true : false}>MAKE ME NOT BORED</button>
                </li>
            </ul>
        </form>
    );
}

export default Form;