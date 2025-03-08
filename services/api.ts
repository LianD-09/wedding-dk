import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const fetchComments = async () => {
  const { data } = await axios.get(`${API_URL}/comment`);
  return data?.data;
};

export const postComment = async (author: string, message: string) => {
  const { data } = await axios.post(`${API_URL}/comment`, {
    author,
    message,
  });
  return data;
};
