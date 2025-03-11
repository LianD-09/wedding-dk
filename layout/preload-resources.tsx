import { fullAlbum } from '@/utils/data';
import { getImageProps } from 'next/image';
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
    const { props: transformedProps } = getImageProps({ ...s, alt: '', quality: 25 });
    ReactDOM.preload(transformedProps.src, {
      as: 'image',
      imageSrcSet: transformedProps.srcSet,
      imageSizes: transformedProps.sizes,
      fetchPriority: transformedProps.fetchPriority,
    })
  })

  return null;
}