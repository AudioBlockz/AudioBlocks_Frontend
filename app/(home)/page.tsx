import Hero from '../../components/common/Hero';
import Featured from '../../components/common/Featured';
import Share from '../../components/common/Share';
import Discover from '../../components/common/Discover';
import Collective from '../../components/common/Collective';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Share />
      <Discover />
      <Collective
        title="Where Artists Thrive And Where Fans Belong "
        content="Be part of a movement redefining music ownership. Collect exclusive NFT tracks, support visionary artists, and own a piece of sonic history."
      />
    </>
  );
}
