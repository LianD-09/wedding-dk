'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import Item from './item';
import { couple } from '@/utils/data';
import Typography from '@/libs/Typography';
import { Triangle } from '@/libs/Shape';
export default function Intro() {
  const { ref } = useSectionInView({ sectionName: 'Giới thiệu' });
  const { groom, bride } = couple;

  return (
    <section
      ref={ref}
      className="w-full bg-white text-center pb-20 pt-10 md:pt-32 gap-10 flex flex-col"
      id="intro"
    >
      <div className='relative w-full h-full flex flex-col md:gap-10 gap-5 md:py-40 py-16 bg-black'>
        <Typography variant='h1' className='md:!text-8xl italic !font-semibold text-white'>WEDDING</Typography>
        <div className='w-full h-full flex flex-row justify-center items-center md:gap-40 gap-16'>
          <Typography variant='h1' className='md:!text-9xl !text-6xl !font-extrabold text-white'>D</Typography>
          <div className='md:h-32 h-16 border-l-2 border-white' />
          <Typography variant='h1' className='md:!text-9xl !text-6xl !font-extrabold text-white'>K</Typography>
        </div>
        <Triangle type='rtb' className='absolute bottom-0' />
        <Triangle type='ltt' className='absolute top-0' />
      </div>

      <div className="w-full transition-all ease-in-out duration-1000 xs:px-5 sm:px-10 lg:px-40 flex xs:flex-col md:flex-row justify-between relative">
        <Item
          image={groom.image}
          description={groom.description}
          name={groom.name}
          facebook={groom.facebook}
          instagram={groom.instagram}
          title='Chú rể'
        />
      </div>
      <div className="w-full transition-all ease-in-out duration-1000 xs:px-5 sm:px-10 lg:px-40 flex xs:flex-col md:flex-row-reverse justify-between relative">
        <Item
          image={bride.image}
          description={bride.description}
          name={bride.name}
          facebook={bride.facebook}
          instagram={bride.instagram}
          reverse
          title='Cô dâu'
        />
      </div>
    </section >
  );
}
