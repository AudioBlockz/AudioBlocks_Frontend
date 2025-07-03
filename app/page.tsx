import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import MusicBrowser from "./components/ArtistContentSection";
import Share from "./components/Share";
import MusicSlider from "./components/MusicSlider";
import Discover from "./components/Discover";
import Collective from "./components/Collective";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Featured/>
      <MusicBrowser/>
      <Share/>
      <Discover/>
      <MusicSlider/>
      <Collective/>
    </div>
  );
}
