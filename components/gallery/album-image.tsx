'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

type AlbumImageProps = {
  selected: number;
  items: StaticImport[]
};

function AlbumImage({ selected, items }: AlbumImageProps) {

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={selected}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'linear',
          duration: 0.4
        }}
        className='h-fit sm:h-[50vh] lg:h-[50vh] flex flex-grow justify-center items-center px-10 bg-transparent'
      >
        <Image
          src={items[selected]}
          alt="My wedding image"
          priority
          className="h-fit sm:h-full w-full rounded-lg transition
          duration-300 ease-in-out object-contain object-center
          hover:cursor-pointer bg-transparent"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default AlbumImage;