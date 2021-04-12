import React from "react";
import {FirstName, LastName, MiddleName} from "./App";

const ComC = () => {
    return(
        <>
    <FirstName.Consumer>
        {(fname) => {
            return (
                <MiddleName.Consumer>
                    {(mname) => {
                     return(
              <LastName.Consumer>
                {(lname) => {
                  return(
                        <h1> My name is {fname} {mname} {lname} </h1>
                  );
                }}
                </LastName.Consumer> 
                        );
                    }}
                </MiddleName.Consumer>
            );
        }}
    </FirstName.Consumer>
        </>
    ); 
};

export default ComC;