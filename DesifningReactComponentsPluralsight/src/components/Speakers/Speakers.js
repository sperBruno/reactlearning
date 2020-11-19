import React, { Component } from "react";
import SpeakersRenderProps from "./SpeakersRenderProps"

const Speakers = () => {
  return (
    <SpeakersRenderProps>
      {({ speakers }) => {
        return (
          <div>
            {speakers.map(({ imageSrc, name }) => {
              return (
                <img src={`/images/${imageSrc}`} alt={name} key={imageSrc} />
              );
            })}
          </div>
        );
      }}
    </SpeakersRenderProps>
  );
};

export default Speakers;
