import Collective from '@/components/common/Collective';
import Events from '@/components/common/collective/Events';
import Hero from '@/components/common/collective/Hero';
import Members from '@/components/common/collective/Members';
import OurCollective from '@/components/common/collective/OurCollective';
import React from 'react';

const Collectives = () => {
  return (
    <>
      <Hero />
      <Members />
      <Events />
      <OurCollective />
      <Collective
        title="Want to join the Collective"
        content="Be part of a movement redefining music ownership. Collect exclusive NFT tracks, support visionary artists, and own a piece of sonic history"
      />
    </>
  );
};

export default Collectives;
