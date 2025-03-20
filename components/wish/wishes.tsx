'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { SectionHeading } from '@/layout/section-heading';
import WishForm from './wish-form';
import WishList from './wish-list';

export default function Wishes() {
  const { ref } = useSectionInView({ sectionName: 'Lời chúc' });
  return (
    <section ref={ref} className="max-w-[100rem] text-center mt-10 flex flex-col gap-10" id="wishes">
      <SectionHeading className="sm:!mb-2 md:!mb-6 mt-24 md:mt-40 md:!text-8xl !font-bold">Send Wishes</SectionHeading>
      <div
        className="flex gap-2 justify-center mt-8
      sm:items-stretch sm:flex-col 
      xs:items-center xs:flex-col 
      md:items-stretch md:flex-row md:h-[50dvh]"
      >
        <div className="xs:px-5 md:w-1/2 h-full">
          <WishForm />
        </div>
        <div className="xs:w-full xs:px-5 md:w-1/2 md:h-full h-[60dvh]">
          <WishList />
        </div>
      </div>
    </section>
  );
}
