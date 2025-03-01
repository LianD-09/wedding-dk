import Congrats from '@/components/congrats/Congrats';
import { CountdownTimer } from '@/components/counter/counter';
import Events from '@/components/events/Events';
import Gallery from '@/components/gallery/gallery';
import Gift from '@/components/gift/gift';
import Intro from '@/components/intro/intro';
import HeartFalling from '@/components/main/heart-falling';
import SaveDateCircle from '@/components/main/save-date-circle';
import Parties from '@/components/party/parties';
import Story from '@/components/story/story';
import Wishes from '@/components/wish/wishes';
import Carousel from '@/libs/Slide/Carousel';
import { slides } from '@/utils/data';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Carousel slides={slides} />
      <SaveDateCircle />
      <HeartFalling />
      <Intro />
      <CountdownTimer />
      <Story />
      <Events />
      <Parties />
      <Gallery />
      <Wishes />
      <Congrats />
      <Gift />
      <ToastContainer />
    </main>
  );
}
