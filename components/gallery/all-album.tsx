'use client';

import React, { useState } from 'react';
import { albumUrls } from '@/utils/data';
import AlbumImage from './album-image';
import SlideAlbum from './slide-album';

export default function AllAlbum() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="flex items-center gap-4 flex-col justify-between w-full h-full">
      <AlbumImage selected={selected} />
      <SlideAlbum
        items={albumUrls}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}
