import { PartyItemProps } from '@/types/props.types';
import { StaticImageData } from 'next/image';
import groomQR from '@/public/groom_qr.jpeg';
import brideQR from '@/public/bride_qr.jpeg';
import { AlbumImage } from '@/types/common.types';
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

// 20 - images
export const albumUrls = [
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 2
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', // Col - 3
    height: 1264,
    width: 1896,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 1
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302088.jpg', // Col - 2
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302088.jpg', // Col - 3
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', // Col - 2
    height: 1264,
    width: 1896,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 3
    height: 4000,
    width: 6000,
    horizontal: true,
  },

  {
    src: '/images/HR302900.jpg', // Col - 1
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302088.jpg', // Col - 2
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', // Col - 3
    height: 1264,
    width: 1896,
    horizontal: false,
  },
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302088.jpg', // Col - 2
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 3
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 2
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', // Col - 3
    height: 1264,
    width: 1896,
    horizontal: false,
  },
] as Array<AlbumImage>;

// 12 - images
export const albumUrlsSm = [
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 2
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302900.jpg', // Col - 1
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/Z7eFICZ.jpg', // Col - 2
    height: 1264,
    width: 1896,
    horizontal: false,
  },
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 2
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302900.jpg', // Col - 1
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302088.jpg', // Col - 2
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302088.jpg', // Col - 1
    height: 7612,
    width: 5077,
    horizontal: false,
  },
  {
    src: '/images/HR302900.jpg', // Col - 1
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302900.jpg', // Col - 2
    height: 4000,
    width: 6000,
    horizontal: true,
  },
  {
    src: '/images/HR302088.jpg', // Col - 2
    height: 7612,
    width: 5077,
    horizontal: false,
  },
] as Array<AlbumImage>;

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

export const slides = [
  {
    src: '/images/HR302900.jpg',
    height: 4000,
    width: 6000,
  },
  {
    src: '/images/HR302088.jpg',
    height: 7612,
    width: 5077,
  },
];

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
