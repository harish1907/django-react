import React, { useState } from "react";

const AddForm = (props) => {

    const [person_name, nameChange] = useState("");
    const [domain, domainChange] = useState("");
    const [lovename, loveChange] = useState("");

    const eventNameChangeHandler = (event) => nameChange(event.target.value);
    const eventDomainChangeHandler = (event) => domainChange(event.target.value);
    const eventLoveChangeHandler = (event) => loveChange(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        const submited_data = {
            person_name: person_name,
            domain: domain,
            personal: lovename
        }
        props.addNewRecord(submited_data);

        nameChange("");
        domainChange("");
        loveChange("");
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name:</label><br/>
            <input type="text" value={person_name} onChange={eventNameChangeHandler}/><br/>
            <label>Domain:</label><br/>
            <input type="text" value={domain} onChange={eventDomainChangeHandler}/><br/><br/>
            <label>Love:</label><br/>
            <input type="text" value={lovename} onChange={eventLoveChangeHandler}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form> 
    );
}

export default AddForm;