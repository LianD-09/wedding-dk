import Congrats from '@/components/congrats/Congrats';
import { CountdownTimer } from '@/components/counter/counter';
import Gallery from '@/components/gallery/gallery';
import Gift from '@/components/gift/gift';
import Intro from '@/components/intro/intro';
import HeartFalling from '@/components/main/heart-falling';
import Parties from '@/components/party/parties';
import Wishes from '@/components/wish/wishes';
import Carousel from '@/libs/Slide/Carousel';
import { slides } from '@/utils/data';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Carousel slides={slides} />
      <HeartFalling />
      <Intro />
      <CountdownTimer />
      <Gallery />
      <Parties />
      <Wishes />
      <Congrats />
      <Gift />
      <ToastContainer />
    </main>
  );
}
