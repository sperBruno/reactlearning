import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import {SpeakerContext} from "../src/components/Speakers/SpeakerContext"

function Speaker() {
  const speakersList = [
    { imageSrc: "cristianoRonaldo.png", name: "Cristiano Ronaldo" },
    { imageSrc: "ronaldhino.png", name: "Ronaldhino Gaucho" },
    { imageSrc: "JuanRomanRiquelme.png", name: "Juan Roman Riquelme" },
  ];

  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakersList}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContext.Provider>
      <Footer />
    </div>
  );
}

export default Speaker;
