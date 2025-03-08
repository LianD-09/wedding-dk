import { links } from '@/utils/data';
import { StaticImageData } from 'next/image';

export type SectionName = (typeof links)[number]['name'];
export interface AlbumImage extends StaticImageData {
  horizontal?: boolean;
}
