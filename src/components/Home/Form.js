// import { useState, useRef } from 'react';
import Input from "../UI/Input/Input";

const Form = props => {
    // default list of activity types from boredapi.com/documentation
    const typeList = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

    // submission event handler
    const submitHandler = event => {
        event.preventDefault();
        console.log("Joe mama");
    };
    
    return (
        <form onSubmit={submitHandler}>
            <ul>
                <Input
                    name="type"
                    title="Activity Type"
                    type="text"
                    datalistId="typeList"
                    datalist={<datalist id="typeList">{typeList.map(t => (<option key={t} value={t}/>))}</datalist>}
                />
                <Input
                    name="participants"
                    title="Participants"
                    type="number"
                    min="1"
                    max="20"
                    tooltip="The number of people that this activity could involve (between 1 and 50)"
                />
                <Input
                    name="price"
                    title="Price"
                    type="range"
                    min="0"
                    max="100"
                    tooltip="A factor describing the cost of the event with zero being free"
                />
                <Input
                    name="accessibility"
                    title="Accessibility"
                    type="range"
                    min="0"
                    max="100"
                    tooltip="A factor describing how possible an event is to do with zero being the most accessible"
                />
                <Input
                    name="count"
                    title="Ideas to Show"
                    type="number"
                    min="1"
                    max="10"
                    tooltip="How many activity ideas would you like to see?"
                />
                <li className="submit--container">
                    <button type="submit" id="submit">MAKE ME NOT BORED</button>
                </li>
            </ul>
        </form>
    );
}

export default Form;