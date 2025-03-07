'use client';
import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albumUrls, albumUrlsSm } from '@/utils/data';
import { SectionHeading } from '@/layout/section-heading';
import ImageGrid from './image-grid';
import { Button } from '@/libs/Button';
import Modal from '@/libs/modal';

export default function Gallery() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });
  const [open, setOpen] = React.useState(false);

  return (
    <section ref={ref} className="text-center pb-10" id="album">
      <SectionHeading className="sm:!mb-2 md:!mb-6 mt-24 md:mt-40 md:!text-8xl !font-bold">
        Our Album
      </SectionHeading>
      <ImageGrid images={albumUrls} imagesSm={albumUrlsSm} />
      <div className='w-full flex justify-center items-center'>
        <Button onClick={() => setOpen(!open)}>See all</Button>
      </div>
      <Modal open={open}
        onClose={() => setOpen(false)}>
        null
      </Modal>
    </section>
  );
}
