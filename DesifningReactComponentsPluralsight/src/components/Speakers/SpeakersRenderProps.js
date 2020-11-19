const SpeakersRenderProps = (props) => {
    const speakersList = [
        { imageSrc: "cristianoRonaldo.png", name: "Cristiano Ronaldo" },
        { imageSrc: "ronaldhino.png", name: "Ronaldhino Gaucho" },
        { imageSrc: "JuanRomanRiquelme.png", name: "Juan Roman Riquelme" },
      ];
      return props.children({
          speakers: speakersList
      });
    
};

export default SpeakersRenderProps;