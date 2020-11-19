const speakersList = [
    { imageSrc: "cristianoRonaldo.png", name: "Cristiano Ronaldo" },
    { imageSrc: "ronaldhino.png", name: "Ronaldhino Gaucho" },
    { imageSrc: "JuanRomanRiquelme.png", name: "Juan Roman Riquelme" },
  ];

// function withData(Component) {
//     return function() {
//         return <Component speakers={speakersList}></Component>;
//     };
// }

const withData = (maxSpeakerToShow) => (Component) => {
    return () => {
        const limitSpeaker = speakersList.slice(0, maxSpeakerToShow)
        return <Component speakers={limitSpeaker}></Component>;
    };
};
export default withData;