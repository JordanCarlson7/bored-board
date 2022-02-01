import { useState, useRef } from 'react';
import Input from "../UI/Input/Input";

const Form = props => {
    const [error, setError] = useState();

    const typeInputRef = useRef();
    const participantsInputRef = useRef();
    const priceInputRef = useRef();
    const accessibilityInputRef = useRef();
    const countInputRef = useRef();

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

        props.onSubmit({
            accessibility: accessibilityInputRef.current.value / 100,
            type: typeInputRef.current.value.toLowerCase(),
            participants: participantsInputRef.current.value,
            price: priceInputRef.current.value / 100
        }, countInputRef.current.value);
    };
    
    return (
        <form onSubmit={submitHandler}>
            <ul>
                <Input
                    label="Activity Type"
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
                    ref={typeInputRef}
                />
                <Input
                    label="Participants"
                    input={{
                        id: "participants",
                        type: "number",
                        min: "1",
                        max: "20",
                        defaultValue: "1",
                        title: "The number of people that this activity could involve (between 1 and 50)",
                    }}
                    ref={participantsInputRef}
                />
                <Input
                    label="Price"
                    input={{
                        id: "price",
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "5",
                        defaultValue: "0",
                        title: "A factor describing the cost of the event with zero being free",
                    }}
                    ref={priceInputRef}
                />
                <Input
                    label="Accessibility"
                    input={{
                        id: "accessibility",
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "10",
                        defaultValue: "0",
                        title: "A factor describing how possible an event is to do with zero being the most accessible",
                    }}
                    ref={accessibilityInputRef}
                />
                <Input
                    label="Ideas to Show"
                    input={{
                        id: "count",
                        type: "number",
                        min: "1",
                        max: "10",
                        defaultValue: "1",
                        title: "How many activity ideas would you like to see?",
                    }}
                    ref={countInputRef}
                />
                <li className="submit--container">
                    <button type="submit" disabled={error ? true : false}>MAKE ME NOT BORED</button>
                </li>
            </ul>
        </form>
    );
}

export default Form;