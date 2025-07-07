import Hero from "../../components/common/Hero";
import Featured from "../../components/common/Featured";
import MusicBrowser from "../../components/common/ArtistContentSection";
import Share from "../../components/common/Share";
import MusicSlider from "../../components/common/MusicSlider";
import Discover from "../../components/common/Discover";
import Collective from "../../components/common/Collective";

export default function Home() {
  return (
    <>
      <Hero/>
      <Featured/>
      <MusicBrowser/>
      <Share/>
      <Discover/>
      <MusicSlider/>
      <Collective/>
    </>
  );
}
