'use client';
import Image from 'next/image';
import React from 'react';
import iconImg from '@/app/icon.jpg';
import Modal from '@/libs/modal';
import { banks } from '@/utils/data';
import GiftCard from './gift-card';
import Typography from '@/libs/Typography';
export default function Gift() {
  const [isModalWeddingGiftOpen, setIsModalWeddingGiftOpen] =
    React.useState(false);

  const openModalWeddingGift = () => {
    setIsModalWeddingGiftOpen(true);
  };
  const closeModalWeddingGift = () => {
    setIsModalWeddingGiftOpen(false);
  };
  return (
    <section className="mt-10 md:mt-20 mb-20">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-3">
          <Typography
            variant="h4"
            className="!text-khaki md:!text-2xl xs:!text-base px-5 text-center"
          >
            Gửi quà cho cô dâu ❤️ chú rể ở đây nhé!
          </Typography>
          <button
            className="hover:cursor-pointer transition-all animate-[gift_2s_linear_infinite] focus:ring-0 focus:outline-none"
            onClick={openModalWeddingGift}
          >
            <Image alt="gift" src={iconImg} className="w-20 h-20 rounded-xl" />
          </button>
        </div>
        <Modal
          open={isModalWeddingGiftOpen}
          onClose={closeModalWeddingGift}
          classNameTitle="text-black"
          classNameHeader="!absolute !-top-5 !-right-5 !h-6 !w-6 !z-50"
        >
          <div className="flex md:flex-row xs:flex-col justify-center items-center gap-5 w-full">
            {banks.map((bank, index) => (
              <React.Fragment key={index}>
                <GiftCard
                  bankName={bank.bankName}
                  cardHolder={bank.cardHolder}
                  type={bank.type}
                  cardNumber={bank.cardNumber}
                  image={bank.image}
                />
              </React.Fragment>
            ))}
          </div>
        </Modal>
      </div>
    </section>
  );
}
