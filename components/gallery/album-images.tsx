'use client';

import { AlbumImage } from '@/types/common.types';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useLayoutEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

type AlbumImageProps = {
  selected: number;
  items: AlbumImage[]
};

function AlbumImages({ selected, items }: AlbumImageProps) {
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);
  }, [selected])
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
        className='h-[40vh] sm:h-[50vh] lg:h-[50vh] flex flex-grow justify-center items-center bg-transparent relative'
      >
        {loading && (
          <div className="absolute flex w-full justify-center items-center bg-inherit">
            <FaSpinner className="text-xl opacity-80 transition-all animate-spin" />
          </div>
        )}
        <Image
          src={items[selected]}
          alt="My wedding image"
          loading='lazy'
          onLoad={() => {
            setLoading(false);
          }}
          className={` h-full rounded-lg transition
          duration-300 ease-in-out object-contain object-center
          hover:cursor-pointer bg-transparent`}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default AlbumImages;