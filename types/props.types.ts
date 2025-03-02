export type PartyItemProps = {
  house: 'NHÀ TRAI' | 'NHÀ GÁI';
  hour: string;
  minute: string;
  date: string;
  address: string;
  location: string;
};

export interface ShapeProps {
  className?: string;
  children?: React.ReactNode;
}