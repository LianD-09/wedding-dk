import { PartyItemProps } from '@/types/props.types';
import { StaticImageData } from 'next/image';
import groomQR from '@/public/groom_qr.jpeg';
import brideQR from '@/public/bride_qr.jpeg';
export const links = [
  {
    name: 'Giới thiệu',
    hash: '#intro',
  },
  {
    name: 'Chuyện tình yêu',
    hash: '#story',
  },
  {
    name: 'Sự kiện',
    hash: '#events',
  },
  {
    name: 'Tiệc cưới',
    hash: '#parties',
  },
  {
    name: 'Album cưới',
    hash: '#album',
  },
  {
    name: 'Lời chúc',
    hash: '#wishes',
  },
  {
    name: 'Lời cảm ơn',
    hash: '#congrats',
  },
] as const;

export const albumUrls = [
  {
    src: 'https://i.imgur.com/qZSXtdf.jpg', //0 - 9216
    height: 4000,
    width: 6000,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', //0 - 9216
    height: 1264,
    width: 1896,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', //0 - 9216
    height: 1264,
    width: 1896,
  },
] as Array<StaticImageData>;

export const storyLine = [
  {
    title: '1',
    description: `Love`,
    year: '09 - 2018',
    image: {
      src: 'https://i.imgur.com/Z7eFICZ.jpg',
      width: 5120,
      height: 5120,
    } as StaticImageData,
  },
] as const;

export const couple = {
  groom: {
    name: 'Tiến Dũng',
    image: {
      src: 'https://i.imgur.com/Z7eFICZ.jpg',
      width: 1264,
      height: 1896,
    } as StaticImageData,
    description:
      'Cái này phải để anh Dũng nghĩ thôi ạ 😁',
    facebook: '',
    instagram: '',
  },
  bride: {
    name: 'Ngọc Khánh',
    image: {
      src: 'https://i.imgur.com/Z7eFICZ.jpg',
      width: 3072,
      height: 4319,
    } as StaticImageData,
    description:
      'Cô dâu cũng phải nghĩ nha ạ 😍',
    facebook: '',
    instagram: '',
  },
};

export const events = [
  {
    image: albumUrls[13],
    title: 'LỄ THÀNH HÔN',
    date: '22/03/2025',
    time: '10:00 AM',
    location: '',
    mapUrl: '',
  },
] as const;

export const slides = [albumUrls[0], albumUrls[0], albumUrls[0]];

export const banks = [
  {
    bankName: '',
    cardNumber: '',
    cardHolder: 'MAI TIEN DUNG',
    image: groomQR,
    type: 'GROOM',
  },
  {
    bankName: '',
    cardNumber: 'DO HOANG NGOC KHANH',
    cardHolder: '',
    image: brideQR,
    type: 'BRIDE',
  },
];

export const parties: Array<PartyItemProps> = [
  {
    house: 'NHÀ TRAI',
    hour: '10',
    minute: '00',
    date: 'Thứ Bảy | 22 . 03 . 2025',
    address: '',
    location: '',
  },
  {
    house: 'NHÀ GÁI',
    hour: '10',
    minute: '00',
    date: 'Thứ Bảy | 22 . 03 . 2025',
    address: '',
    location: '',
  },
];
