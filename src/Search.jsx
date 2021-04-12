import React, { useState } from "react";
import Sresult from "./Sresult";


const Search = () => {
    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
  return (
    <>
    <div className="main">
    <input type="text" placeholder="enter your thing" value={img} onChange={inputEvent}/>
    {img === "" ? null : <Sresult name={img}/>}
    </div>
    
    </>
  );
};

export default Search;