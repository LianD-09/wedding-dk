import { fullAlbum } from '@/utils/data';
import Image from 'next/image';
import ReactDOM from 'react-dom';

// preload images
export function PreloadResources() {
  ReactDOM.preload('/std-bg.jpg', {
    as: 'image',
    fetchPriority: 'high',
  });

  ReactDOM.preload('/images/HR302900.jpg', {
    as: 'image',
    fetchPriority: 'auto',
  });

  const preloadExternalImages = () => {
    return fullAlbum.map((s, index) => (
      <Image
        src={s}
        alt="My wedding image"
        priority
        hidden
        key={index}
      />
    ))
  }

  return <div className='hidden'>
    {preloadExternalImages()}
  </div>;
}