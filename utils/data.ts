import { PartyItemProps } from '@/types/props.types';
import { StaticImageData } from 'next/image';
import groomQR from '@/public/groom_qr.jpeg';
import brideQR from '@/public/bride_qr.jpeg';
import { AlbumImage } from '@/types/common.types';
export const links = [
  {
    name: 'Trang chủ',
    hash: '#',
  },
  {
    name: 'Giới thiệu',
    hash: '#intro',
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

// 40 - full
export const fullAlbum = [
  {
    src: 'https://i.imgur.com/DCBIBSM.jpeg',
    height: 2336,
    width: 3504,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/oDRYzFo.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/jU1V31j.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/oWJ1zoL.jpeg',
    height: 2336,
    width: 3504,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/IeaGesZ.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/K2J6ssK.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/ppOxYvc.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/hfeVMI8.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/QX8PCvh.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/c5nVxgo.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/sZ4X6ZJ.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/b29AjZ3.jpeg',
    height: 2336,
    width: 3504,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/4huKOjj.jpeg',
    height: 2336,
    width: 3504,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/p2JrlDC.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/j5DwG5d.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/upOuEfr.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/jqlOgAp.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/LCsZFLg.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/ysEpkUZ.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/peZGbgk.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/wK9KuCA.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/D5r97UW.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/sUpa8cQ.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/BrnicNV.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/KKonsxU.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/wmQ86cX.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/dnbTpEO.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/4F0YkmH.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/2cLvLgO.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/Gow4Ir4.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/H0MMQFC.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/Z8Fd1TV.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/5aDpSuv.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/Nn09jY1.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/ITIrfUC.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/9kYNI0y.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/wmrZ3U2.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
  {
    src: 'https://i.imgur.com/kBFGjoi.jpeg',
    height: 2336,
    width: 3504,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/i5xjO2B.jpeg',
    height: 2336,
    width: 3504,
    horizontal: true,
  },
  {
    src: 'https://i.imgur.com/e3ZtXJB.jpeg',
    height: 3504,
    width: 2336,
    horizontal: false,
  },
] as Array<AlbumImage>;

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
    src: 'https://i.imgur.com/e3ZtXJB.jpeg',
    height: 3504,
    width: 2336,
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
    src: 'https://i.imgur.com/e3ZtXJB.jpeg',
    height: 3504,
    width: 2336,
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
    src: 'https://i.imgur.com/e3ZtXJB.jpeg',
    height: 3504,
    width: 2336,
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
    src: '/images/HR302900.jpg', // Col - 2
    height: 4000,
    width: 6000,
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
    src: 'https://i.imgur.com/e3ZtXJB.jpeg',
    height: 3504,
    width: 2336,
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
      src: '/images/HR302900.jpg', // Col - 2
      height: 4000,
      width: 6000,
    } as StaticImageData,
  },
] as const;

export const couple = {
  groom: {
    name: 'Tiến Dũng',
    image: {
      src: '/images/HR302900.jpg', // Col - 2
      height: 4000,
      width: 6000,
    } as StaticImageData,
    description: 'Cái này phải để anh Dũng nghĩ thôi ạ 😁',
    facebook: '',
    instagram: '',
  },
  bride: {
    name: 'Ngọc Khánh',
    image: {
      src: '/images/HR302900.jpg', // Col - 2
      height: 4000,
      width: 6000,
    } as StaticImageData,
    description: 'Cô dâu cũng phải nghĩ nha ạ 😍',
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
    bankName: 'TPBank',
    cardNumber: '0141 8651 402',
    cardHolder: 'Mai Tien Dung',
    image: groomQR,
    type: 'GROOM',
  },
  {
    bankName: 'TPBank',
    cardNumber: '0038 1394 003',
    cardHolder: 'Do Hoang Ngoc Khanh',
    image: brideQR,
    type: 'BRIDE',
  },
];

export const parties: Array<PartyItemProps> = [
  {
    house: 'NHÀ TRAI',
    hour: '16',
    minute: '00',
    date: 'Thứ Bảy | 22 . 03 . 2025',
    address: 'Khu Đường Sông, Phúc Sơn, Vũ Ninh, TP. Bắc Ninh',
    location:
      'https://maps.app.goo.gl/X2TzuWtnDdHQh14LA?g_st=com.google.maps.preview.copy',
    image: {
      src: 'https://i.imgur.com/jUlqWyc.jpeg',
      width: 3072,
      height: 4319,
    } as StaticImageData,
  },
  {
    house: 'NHÀ GÁI',
    hour: '10',
    minute: '00',
    date: 'Thứ Bảy | 22 . 03 . 2025',
    address: 'Số 7 ngách 35 ngõ 5 Liên Mạc, Bắc Từ Liêm, Hà Nội',
    location:
      'https://maps.app.goo.gl/KhpgJMMLMdkEbGCm8?g_st=com.google.maps.preview.copy',
    image: {
      src: 'https://i.imgur.com/jUlqWyc.jpeg',
      width: 3072,
      height: 4319,
    } as StaticImageData,
  },
];
