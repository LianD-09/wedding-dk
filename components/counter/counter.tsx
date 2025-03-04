'use client';
import React, { useEffect, useState } from 'react';
import TimeBox from './time-box';
import { SectionHeading } from '@/layout/section-heading';
import Typography from '@/libs/Typography';
import Divider from '@/layout/divider';

export function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-03-22T23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      let difference = targetDate.getTime() - now.getTime();
      if (difference < 0) {
        difference = -difference;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getStringTime(time: number) {
    if (time < 10) {
      return `0${time}`;
    }
    return time.toString();
  }

  return (
    <div
      className="relative text-center h-screen
      w-full flex flex-col items-center justify-between bg-black
      transition-all ease-in-out duration-1000
      before:absolute before:w-full before:h-full 
      before:bg-cover
      before:bg-[url('https://i.imgur.com/qZSXtdf.jpg')] 
      before:bg-[center_top_0rem] before:opacity-30
      before:bg-fixed"
    >
      <SectionHeading className="mt-40 !mb-0 z-50 !text-white md:!text-8xl !font-semibold">
        SAVE THE DATE
      </SectionHeading>
      <div className="flex justify-center items-center gap-4 min-h-[3rem] z-50">
        <Divider className="md:h-[2px] xs:h-[1px] md:w-40 xs:w-10" />
        <Typography
          variant="h3"
          className="font-normal text-white xs:!text-2xl md:!text-3xl"
        >
          02 . 12 . 2023
        </Typography>
        <Divider className="md:h-[2px] xs:h-[1px] md:w-40 xs:w-10" />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-6 w-fit z-50 mb-40">
        <TimeBox time={getStringTime(days)} title="Ngày" />
        <TimeBox time={getStringTime(hours)} title="Giờ" />
        <TimeBox time={getStringTime(minutes)} title="Phút" />
        <TimeBox time={getStringTime(seconds)} title="Giây" />
      </div>
    </div>
  );
}
