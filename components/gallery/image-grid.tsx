import React from 'react';
import ImageItem from './image-item';
import { useWindowSize } from '@/hooks/useWindowSize';
import { AlbumImage } from '@/types/common.types';

type ImageGridProps = {
  images: Array<AlbumImage>;
  imagesSm: Array<AlbumImage>;
};
const MAX_COLS = 3;
const MAX_COLS_BELOW_SM = 2;

const getColumns = (colIndex: number, maxCols: number, album: Array<AlbumImage>) => {
  return album.filter((img, index) => index % maxCols === colIndex);
}

export default function ImageGrid({ images, imagesSm }: ImageGridProps) {
  const { isBelowSm } = useWindowSize();

  return isBelowSm ? (
    <div className="grid grid-cols-2 gap-2 px-5 py-5">
      {[
        getColumns(0, MAX_COLS_BELOW_SM, imagesSm),
        getColumns(1, MAX_COLS_BELOW_SM, imagesSm),
      ].map(
        (column, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            {column.map((img, index) => (
              <React.Fragment key={index}>
                <ImageItem imgProps={img} alt="image album" />
              </React.Fragment>
            ))}
          </div>
        ),
      )}
    </div>
  ) : (
    <div className="grid grid-cols-3 gap-2 md:gap-8 md:p-10 lg:px-40 xs:px-8 md:mt-20">
      {[
        getColumns(0, MAX_COLS, images),
        getColumns(1, MAX_COLS, images),
        getColumns(2, MAX_COLS, images),
        getColumns(3, MAX_COLS, images),
      ].map((column, idx) => (
        <div className="flex flex-col gap-8" key={idx}>
          {column.map((img, index) => (
            <React.Fragment key={index}>
              <ImageItem imgProps={img} alt="image album" horizontal={img.horizontal} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
