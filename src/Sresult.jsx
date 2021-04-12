import React from "react";

const Sresult = (props) => {

    const image = `https://source.unsplash.com/400x300/?${props.name}`;
    return(
        <>
        <img src={image} alt="search"/>
        </>
    );
};

export default Sresult;