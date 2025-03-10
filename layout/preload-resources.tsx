import { fullAlbum } from '@/utils/data';
import { imageLoader } from '@/utils/utils';
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
    ReactDOM.preload(imageLoader(s), {
      as: 'image',
    })
  })

  return null;
}