'use client';
import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albumUrls, albumUrlsSm } from '@/utils/data';
import { SectionHeading } from '@/layout/section-heading';
import ImageGrid from './image-grid';
import { Button } from '@/libs/Button';
import Modal from '@/libs/modal';
import AllAlbum from './all-album';

export default function Gallery() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });
  const [open, setOpen] = React.useState(false);

  return (
    <section ref={ref} className="text-center pb-10" id="album">
      <SectionHeading className="sm:!mb-2 md:!mb-6 mt-24 md:mt-40 md:!text-8xl !font-bold">
        Our Album
      </SectionHeading>
      <ImageGrid images={albumUrls} imagesSm={albumUrlsSm} />
      <div className="w-full flex justify-center items-center">
        <Button onClick={() => setOpen(true)}>See all</Button>
      </div>
      <Modal
        open={open}
        fullScreen
        onClose={() => setOpen(false)}
        classNameContainer="!bg-black md:pb-0"
        onKeyDown={(event) => event.key === 'Escape' && setOpen(false)}
      >
        <AllAlbum />
      </Modal>
      <div className="w-screen flex justify-center items-center py-10 md:p-40 sm:p-10 p-5">
        <iframe
          src="https://www.youtube.com/embed/By6RJgfwzcY"
          allowFullScreen
          loading="lazy"
          className="w-screen aspect-video"
        />
      </div>
    </section>
  );
}
