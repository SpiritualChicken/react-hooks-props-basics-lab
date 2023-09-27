import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.trim() !== '' && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
    </div>
  );
}

export default About;
