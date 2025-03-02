'use client'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SwipeProvider } from "../Events/SwipeProvider";
import ImageSlider from "./image-fade";
import Typography from "../Typography";
import decorFlower from "@/public/decor-flower.png";

type Props = {
  slides: string[] | StaticImport[],
}

export default function Carousel({ slides }: Props) {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const autoNext = setTimeout(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 10000);

    return () => {
      clearTimeout(autoNext)
    }

  }, [current, slides.length])


  return (
    <div className="relative w-screen h-full md:px-24 px-5 md:mt-24 mt-5">
      <Image
        src={decorFlower}
        alt=""
        className="absolute -top-[20%] right-0 w-1/3 pointer-events-none z-50"
      />
      <SwipeProvider onSwipeLeft={nextSlide} onSwipeRight={previousSlide}>
        <div className="flex flex-col group overflow-hidden relative w-[inherit] md:px-10 px-5 bg-black md:py-24 py-5 md:gap-20 gap-4 transition-all ease-in-out duration-1000">
          <Typography className="text-white !font-light italic md:!text-4xl" variant={'desc'}>
            02 . 12 . 2023
          </Typography>
          <Typography className="text-white !font-medium lg:!text-9xl md:!text-7xl !font-windsong" variant={'h1'}>
            Save the date
          </Typography>
          <ImageSlider src={slides[current]} current={current} />
        </div>
      </SwipeProvider>
    </div>
  );
}