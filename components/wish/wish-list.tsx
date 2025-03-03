'use client';
import React from 'react';
import WishCard from './wish-card';
import { FaSpinner } from 'react-icons/fa';
import { useQuery, useSubscription } from 'urql';

const COMMENTS_QUERY = `
  query {
    comments {
      id
      author
      message
      createdAt
    }
  }
`;

const COMMENT_SUBSCRIPTION = `
  subscription {
    commentAdded {
      id
      author
      message
      createdAt
    }
  }
`;

export default function WishList() {
  const [res] = useQuery({ query: COMMENTS_QUERY });
  const [subRes] = useSubscription(
    { query: COMMENT_SUBSCRIPTION },
    (_, data) => {
      return data
        ? { comments: [data.commentAdded, ...res.data.comments] }
        : res.data;
    },
  );

  const comments = subRes?.data?.comments || res.data?.comments || [];

  return (
    <div
      className={`flex bg-white flex-col md:mt-10 xs:mt-1 border-[3px] w-full
      border-secondary-cl rounded-md gap-2 md:h-[480px] xs:h-[400px] overflow-auto ${
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
