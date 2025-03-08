'use client';
import { useSectionInView } from '@/hooks/hooks';
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
      <Typography variant="desc" className="p-6">
        Cái này cần anh Dũng chị Khánh nghĩ nhéeeeee
      </Typography>
      <p>💚💚💚💚</p>
    </section>
  );
}
