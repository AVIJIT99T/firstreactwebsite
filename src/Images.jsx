import React from "react";

const Images = (props) => {

    return(
        <img src={props.img_src} alt="myPic" className="card_img" />
    );
};

export default Images;