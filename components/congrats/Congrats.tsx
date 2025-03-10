'use client';
import { useSectionInView } from '@/hooks/hooks';
import Divider from '@/layout/divider';
import { SectionHeading } from '@/layout/section-heading';
import Typography from '@/libs/Typography';
import React from 'react';
export default function Congrats() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });

  return (
    <section
      ref={ref}
      className="mb-16 max-w-[50rem] text-center sm:pt-10"
      id="congrats"
    >
      <SectionHeading className="mt-10">Lời Cảm Ơn</SectionHeading>
      <div className="flex flex-col items-center gap-0 mt-10">
        <Typography variant="desc">
          Thật sự hạnh phúc và vinh dự khi nhận được tình cảm và sự có mặt của
          mọi người trong ngày vui của hai gia đình!
        </Typography>
        <Divider className="h-[2px] w-20 bg-khaki" />
      </div>
    </section>
  );
}
