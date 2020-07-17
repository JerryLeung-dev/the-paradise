import React from "react";

import "./Info.css";
import Zoom from "react-reveal/Zoom";

const InfoCard = (props) => {
  return (
    <Zoom delay={props.delayTime} duration={500}>
      <div className="card">
        <div className="card__outer">
          <div className="card__inner">
            <div
              className="card__icon-box"
              style={{
                backgroundColor: `${props.bgColor}`,
              }}
            >
              <div
                className="card__icon"
                style={{
                  backgroundImage: `url(${props.icon})`,
                }}
              ></div>
            </div>
            <div className="card__title">{props.title}</div>
            <div className="card__desc">{props.desc}</div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default InfoCard;
