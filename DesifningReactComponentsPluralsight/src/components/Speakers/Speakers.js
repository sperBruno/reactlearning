import React, { Component } from "react";

const speakersList = [
  { imageSrc: "cristianoRonaldo.png", name: "Cristiano Ronaldo" },
  { imageSrc: "ronaldhino.png", name: "Ronaldhino Gaucho" },
  { imageSrc: "JuanRomanRiquelme.png", name: "Juan Roman Riquelme" },
];

const Speakers = () => {
  return (
    <div>
      {speakersList.map(({ imageSrc, name }) => {
        return <img src={`/images/${imageSrc}`} alt={name} key={imageSrc} />;
      })}
    </div>
  );
};

const EnhancedSpeakerComponent = withData(Speakers);

function withData(Component) {
    return function() {
        return <Component></Component>;
    };
}

export default EnhancedSpeakerComponent;
