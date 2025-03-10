import Modal from '@/libs/modal';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ImageItemProps = {
  imgProps: StaticImageData;
  horizontal?: boolean;
  alt: string;
};
export default function ImageItem({ imgProps, alt, horizontal }: ImageItemProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // modal wedding gift
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-center items-start h-full">
      <Image
        src={{
          src: imgProps.src,
          width: imgProps.width / 8,
          height: imgProps.height / 8,
        }}
        alt={alt}
        onClick={openModal}
        priority
        className={`h-full w-full rounded-sm shadow-2xl 
        hover:cursor-pointer bg-transparent ${horizontal ? `md:border-[24px]` : `md:border-[24px]`} border-[12px] border-black
        z-10 object-center object-cover transition-all ease-in-out duration-1000`}
      />

      <Modal
        onClose={closeModal}
        open={isModalOpen}
        classNameChildren="xs:!p-2 md:!p-2"
        classNameHeader="!absolute !-top-5 !-right-5 !h-6 !w-6 !z-50"
        onKeyDown={(e) => e.key === 'Escape' && closeModal()}
      >
        <div
          className={`flex relative justify-center items-center p-0 
            ${imgProps.width > imgProps.height ? 'w-[70vw] h-full' : 'md:h-[80vh] h-[50vh] w-full'}`}
        >
          <Image
            src={imgProps}
            alt={alt}
            priority
            className="object-cover object-center rounded-lg w-full h-full"
          />
        </div>
      </Modal>
    </div>
  );
}
