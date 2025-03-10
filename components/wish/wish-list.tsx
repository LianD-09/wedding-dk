'use client';
import React, { useEffect } from 'react';
import WishCard from './wish-card';
import { FaSpinner } from 'react-icons/fa';
import useSWR from 'swr';
import { fetchComments } from '@/services/api';
import socket from '@/services/ws-client';

export default function WishList() {
  const { data: comments, mutate } = useSWR('comments', fetchComments);

  useEffect(() => {
    socket.on('NEW_COMMENT', (comment) => {
      mutate([comment, ...comments]);
    });

    return () => {
      socket.off('NEW_COMMENT');
    };
  }, [comments, mutate]);
  return (
    <div
      className={`flex bg-white flex-col md:mt-10 xs:mt-1 border-2 w-full border-khaki
      gap-2 md:h-full h-full overflow-auto ${
        comments?.length ? '' : ' justify-center items-center align-middle'
      }'}`}
    >
      {comments?.length ? (
        comments.map(
          (
            comment: { author: string; message: string },
            index: React.Key | null | undefined,
          ) => (
            <React.Fragment key={index}>
              <WishCard author={comment.author} message={comment.message} />
            </React.Fragment>
          ),
        )
      ) : (
        <div className="flex w-full md:w-[500px] justify-center items-center">
          <FaSpinner className="text-xl opacity-80 transition-all animate-spin" />
        </div>
      )}
    </div>
  );
}
