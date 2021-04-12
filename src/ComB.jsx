import React, { useContext } from "react";
import ComC from "./ComC";
import {FirstName, LastName, MiddleName} from "./App";

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const mname = useContext(MiddleName);

    return (
        <h1>My name is {fname} {mname} {lname}</h1>
    );
}

export default ComB;