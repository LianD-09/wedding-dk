'use client';
import { useSectionInView } from '@/hooks/hooks';
import Divider from '@/layout/divider';
import { SectionHeading } from '@/layout/section-heading';
import { Triangle } from '@/libs/Shape';
import Typography from '@/libs/Typography';
import React from 'react';
export default function Congrats() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });

  return (
    <section
      ref={ref}
      className="flex flex-col sm:!mb-2 md:!mb-6 mt-24 md:mt-40 gap-10 bg-black relative py-20 md:py-40 md:px-40 lg:px-80 sm:px-20 px-10"
      id="congrats"
    >
      <Triangle type='ltt' className='absolute top-0 left-0' />
      <Triangle type='ltb' className='absolute bottom-0 right-0' />
      <SectionHeading className="mt-10 !text-white md:!text-8xl !font-bold">THANK YOU</SectionHeading>
      <div className="flex flex-col items-center gap-0 mt-10">
        <Typography variant="desc" className='text-white'>
          Dũng và Khánh xin gửi lời cảm ơn sâu sắc đến gia đình, bạn bè, đồng nghiệp và những người thân yêu đã luôn đồng hành, sẻ chia và yêu thương trong suốt hành trình trưởng thành của cả hai. Sự hiện diện và lời chúc phúc của mọi người chính là niềm vui, là mọn quá quý giá nhất trong ngày trọng đại của chúng mình.
        </Typography>
        <Divider className="h-[2px] w-1/2 bg-khaki" />
      </div>
    </section>
  );
}
