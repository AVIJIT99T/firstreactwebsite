import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () => {
    return (
        <Card 
        key={Sdata[3].id}
        img_src={Sdata[3].img_src}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        link={Sdata[3].link}
       />
      );
}

export default Amazon;