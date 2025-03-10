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

  fullAlbum.forEach((s, index) => {
    const imgUrl = encodeURIComponent(s.src);
    ReactDOM.preload(s.src, {
      as: 'image',
      imageSrcSet: `/_next/image?url=${imgUrl}&w=${s.width}&q=25`
    })
  })

  return null;
}