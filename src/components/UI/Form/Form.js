import { useState, useRef, useCallback, useEffect } from 'react';
import Input from "../Input/Input";
import classes from './Form.module.css';
let url = "https://www.boredapi.com/api/activity?";

const Form = props => {
    const [error, setError] = useState();
    let activities = props.state;
    
   
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
        let args = {
            accessibility: accessibility,
            type: type,
            participants: participants,
            price: price
        }
       APIHandler(args)

        props.onSubmit({accessibility, type, participants, price}, countRef.current.input.value);
    };
    
    /* API CONNECT */
    const APIHandler = useCallback(async (args) => {
        if (args.accessibility) { url += `accessibility=${args.accessibility}&`};
        console.log(url);
        if (args.type) {url += `type=${args.type}&`};
        console.log(url);
        if (args.participants) { url += `participants=${args.participants}&`};
        console.log(url);
        if (args.price) {url += `price=${args.price}&`};
        console.log(url);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
    
          const transformedData = {
            activity: data.activity,
            type: data.type,
            participants: data.participants,
            price: data.price,
            link: data.link,
            key: data.key,
            accessibility: data.accessibility,
          };
        //   setActivities(transformedData, ...activities);
        //   console.log(props.state);
        activities.push(transformedData);
        props.setState(activities)
        console.log("USE EFFECT", props.state)
         
          console.log(activities);
        } catch (error) {
        //   setError(error.message);
            console.log(error)
        }
        url = "https://www.boredapi.com/api/activity?";
      }, [activities]);
    

    /* API CONNECT */
    useEffect(() => {
        props.setState(activities)
        console.log("USE EFFECT", props.state)
    }, [APIHandler, activities]);
    
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