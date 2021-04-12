import React from "react";
import Heading1 from "./Heading1";
import Images from "./Images";

function Card(props){
      return(
        <>
  <div className="cards">
        <div className="card">
          <Images img_src={props.img_src} />
            <div className="card_info">
              <span className="card_category"> {props.title} </span>
                <Heading1 sname={props.sname} />
                <a href={props.link} target="_blank">
                  <button>Watch Now</button>
                </a>
            </div>
      </div>
      </div>
      </>
      );
      }

export default Card;