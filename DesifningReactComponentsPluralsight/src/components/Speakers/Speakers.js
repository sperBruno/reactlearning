import React, { Component } from "react";
import withData from "./withData"



const Speakers = ({speakers}) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return <img src={`/images/${imageSrc}`} alt={name} key={imageSrc} />;
      })}
    </div>
  );
};


const maxSpeakerToShow = 1;
export default withData(maxSpeakerToShow)(Speakers);
