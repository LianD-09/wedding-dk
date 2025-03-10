import { StaticImageData } from 'next/image';

export type PartyItemProps = {
  house: 'NHÀ TRAI' | 'NHÀ GÁI';
  hour: string;
  minute: string;
  date: string;
  address: string;
  location: string;
  image: StaticImageData;
};

export interface ShapeProps {
  className?: string;
  children?: React.ReactNode;
}
