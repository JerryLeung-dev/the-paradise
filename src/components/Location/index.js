import React from "react";

import './Location.css';

const Location = () => {
  return (
    <div className="location">
        <div className="location__tag">
            <div>Location</div>
        </div>
      <iframe
        title="Location of the color powder event"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.527808426649!2d151.20709741545124!3d-33.8760580806542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d9bbd5113%3A0xa5d329a5d0eeebf6!2s271%20Elizabeth%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1szh-CN!2sau!4v1594959853764!5m2!1szh-CN!2sau"
        width="100%"
        height="350px"
        frameborder="0"
        allowfullscreen
        aria-hidden="false"
      ></iframe>
    </div>
  );
};

export default Location;
