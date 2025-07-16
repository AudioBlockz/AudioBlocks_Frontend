import Artists from '@/components/common/dashboard/Artists';
import CategorySection from '@/components/common/dashboard/CategorySection';
import Collections from '@/components/common/dashboard/Collections';
import EventSection from '@/components/common/dashboard/EventSection';
import Event from '@/components/common/dashboard/landing/Event';
import Merch from '@/components/common/dashboard/Merch';
import React from 'react';

const page = () => {
  return (
    <>
      <div className='px-4'>
        <p className="text-xs font-medium text-left text-white mb-2">Explore</p>
        <CategorySection />
        <Collections/>
        <EventSection/>
        <Artists/>
        <Merch/>
      </div>
    </>
  );
};

export default page;
