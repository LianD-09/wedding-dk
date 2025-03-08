import axios from 'axios';

export const fetchComments = async () => {
  const { data } = await axios.get(
    'https://wedding-dk-be.onrender.com/comment',
  );
  return data?.data;
};

export const postComment = async (author: string, message: string) => {
  const { data } = await axios.post(
    'https://wedding-dk-be.onrender.com/comment',
    {
      author,
      message,
    },
  );
  return data;
};
