import { io } from 'socket.io-client';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const socket = io(API_URL);

export default socket;
