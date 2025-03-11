'use client';

import { useSectionInView } from '@/hooks/hooks';
import Typography from '@/libs/Typography';
import React from 'react';
import PartyItem from './party-item';
import { albumUrls, parties } from '@/utils/data';
import { SectionHeading } from '@/layout/section-heading';
import { Button } from '@/libs/Button';
import { toast } from 'react-toastify';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import Modal from '@/libs/modal';
import Image from 'next/image';
import RadioButton from '@/libs/radio-button';
import { appendRowData, getIDs } from '@/services/spreadsheets';
import { Triangle } from '@/libs/Shape';

enum GUEST {
  GROOM_GUEST = 'GROOM_GUEST',
  BRIDE_GUEST = 'BRIDE_GUEST',
}
const originalIcon = (
  <BsCheckCircleFill
    className="text-lg opacity-80 transition-all 
group-hover:translate-x-1 group-hover:-translate-y-1"
  />
);

const loadingIcon = (
  <FaSpinner className="text-xs opacity-80 transition-all animate-spin" />
);
export default function Parties() {
  const { ref } = useSectionInView({ sectionName: 'Tiệc cưới' });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(GUEST.GROOM_GUEST);
  const [guestName, setGuestName] = React.useState('');
  const [confirmInfo, SetConfirmInfo] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // modal wedding gift
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (value: GUEST) => {
    setSelectedOption(value);
  };

  const handleGuestNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuestName(event.target.value);
  };

  const handleConfirmInfoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    SetConfirmInfo(event.target.value);
  };

  const confirmationSubmit = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (!guestName) {
      toast.error('Vui lòng nhập tên của bạn!', {
        position: 'top-center',
        autoClose: 2000,
      });
    } else {
      try {
        setIsLoading(true);
        const newestIds = await getIDs();
        const rowSubmit = {
          STT: newestIds,
          'Guest name': guestName,
          Type: selectedOption,
          'Confirm Info': confirmInfo,
        };
        await appendRowData(rowSubmit as never);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsModalOpen(false);
        setGuestName('');
        toast.success(
          'Cảm ơn bạn đã xác nhận tham dự đám cưới của chúng tôi!',
          {
            position: 'top-center',
            autoClose: 2000,
          },
        );
      }
    }
  };
  return (
    <section
      ref={ref}
      className="w-full bg-black text-center sm:py-32 py-20 relative gap-10 flex flex-col px-0 sm:px-20 md:px-0"
      id="parties"
    >
      <Triangle type="rtt" className="absolute top-0 left-0" />
      <Triangle type="rtb" className="absolute bottom-0 left-0" />
      <SectionHeading className="sm:!mb-2 md:!mb-6 md:mt-40 md:!text-8xl !font-bold text-white">
        Wedding Party
      </SectionHeading>
      <div
        className="w-full mt-16 sm:p-10 xs:p-5 md:px-32 lg:px-16 
        fhd:px-16 sm:gap-5 md:gap-10 lg:gap-16 flex flex-wrap flex-row justify-center relative
        bg-white md:bg-transparent
        "
      >
        {parties.map((party, index) => (
          <div
            key={index}
            className="justify-center items-center flex gap-10 relative"
          >
            <div className="hidden md:flex overflow-hidden shadow-xl border-[2rem] border-white z-10">
              <Image
                src={party.image}
                alt="Wedding couple"
                width={party.image.width / 6}
                height={party.image.height / 6}
                quality={50}
                className=""
                priority
              />
              <div className="absolute top-[2rem] w-full h-full bg-white -z-10" />
            </div>

            <div className="">
              <PartyItem {...party} />
            </div>
          </div>
        ))}
      </div>
      <div className="md:mt-6 xs:mt-3 flex items-center justify-center">
        <Button
          onClick={openModal}
          endIcon={originalIcon}
          type="button"
          className="w-[14rem] !font-medium"
        >
          Xác nhận tham dự
        </Button>
      </div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col md:gap-4 xs:gap-1 xs:w-[20rem] md:w-[24rem]">
          <div className="flex justify-center items-center">
            <Image
              className="xs:w-48 xs:h-48 sm:w-60 sm:h-60 rounded-full border-4 border-cs-green-700 object-[center_top] object-cover"
              src={albumUrls[15]}
              priority
              alt=""
            />
          </div>
          <Typography variant="h3" className="text-black font-extrabold">
            Xác nhận tham dự
          </Typography>
          <Typography variant="desc" className="text-black !font-medium">
            Tiệc cưới của
          </Typography>
          <Typography
            variant="h2"
            className="xs:!text-2xl text-black font-bold"
          >
            Tiến Dũng ❤️ Ngọc Khánh
          </Typography>
          <input
            placeholder="Nhập tên của bạn"
            className="text-khaki text-center md:h-14 xs:h-10 border-b px-3 bg-white focus:outline-none focus:ring-0 focus:border-b-khaki focus:border-b-2 rounded-none caret-khaki"
            required
            id="guestName"
            value={guestName}
            onChange={handleGuestNameChange}
          ></input>
          <div className="flex md:flex-row xs:flex-col justify-center items-center p-3 gap-3 text-black">
            <RadioButton
              label="Khách nhà trai"
              checked={selectedOption === GUEST.GROOM_GUEST}
              onChange={() => handleOptionChange(GUEST.GROOM_GUEST)}
            />
            <RadioButton
              label="Khách nhà gái"
              checked={selectedOption === GUEST.BRIDE_GUEST}
              onChange={() => handleOptionChange(GUEST.BRIDE_GUEST)}
            />
          </div>
          <input
            placeholder="Bạn sẽ tham dự đám cưới của chúng mình chứ?"
            className="text-khaki text-center md:h-14 xs:h-10 border-b px-3 bg-white focus:outline-none focus:ring-0 focus:border-b-khaki focus:border-b-2 caret-khaki rounded-none"
            required
            value={confirmInfo}
            onChange={handleConfirmInfoChange}
          ></input>
          <div className="flex justify-center items-center mt-4">
            {isLoading ? (
              <Button
                className="items-center"
                type="submit"
                endIcon={loadingIcon}
              ></Button>
            ) : (
              <Button
                className="items-center"
                type="submit"
                onClick={confirmationSubmit}
              >
                Xác nhận
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </section>
  );
}
