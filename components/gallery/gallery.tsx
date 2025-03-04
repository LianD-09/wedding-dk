'use client';
import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albumUrls } from '@/utils/data';
import { SectionHeading } from '@/layout/section-heading';
import ImageGrid from './image-grid';

export default function Gallery() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });

  return (
    <section ref={ref} className="text-center pb-10" id="album">
      <SectionHeading className="sm:!mb-2 md:!mb-6 mt-24 md:mt-40 md:!text-8xl !font-bold">
        Our Album
      </SectionHeading>
      <ImageGrid images={albumUrls} />
    </section>
  );
}
