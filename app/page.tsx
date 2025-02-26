import HeartFalling from '@/components/main/heart-falling';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeartFalling />
      <ToastContainer />
    </main>
  );
}
