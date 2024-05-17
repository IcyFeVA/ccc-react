import React from "react";
import "./styles.css";

function Greeting({ name, video, fruits }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <h3>{video.title}</h3>
      <p>
        {video.views} :: {video.channel} :: {video.posted}
      </p>
      <p>{fruits[0]}</p>
    </div>
  );
}

export default Greeting;
