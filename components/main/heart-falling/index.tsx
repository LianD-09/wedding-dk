'use client'

import dynamic from "next/dynamic";

const HeartFalling = dynamic(() => import('@/components/main/heart-falling/material'), {
  ssr: false,
});

export default HeartFalling;