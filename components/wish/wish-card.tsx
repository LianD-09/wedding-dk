import Typography from '@/libs/Typography';
import React from 'react';

export interface WishData {
  author: string;
  message: string;
}
export default function WishCard({ author, message }: WishData) {
  return (
    <div className="group h-full">
      <div className="flex flex-col items-start justify-start text-black w-full group-even:bg-khaki group-even:text-white p-4 gap-1">
        <Typography variant="h4">{author}</Typography>
        <Typography
          className="font-normal whitespace-pre-line text-start group-even:text-white"
          variant="desc"
        >
          {message}
        </Typography>
      </div>
    </div>
  );
}
