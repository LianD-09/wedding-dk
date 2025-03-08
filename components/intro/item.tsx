import React from 'react';
import Image from 'next/image';
import Typography from '@/libs/Typography';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useWindowSize } from '@/hooks/useWindowSize';

type ItemProps = {
  image: never;
  description?: string;
  name: string;
  facebook: string;
  instagram: string;
  reverse?: boolean;
  title: string;
  secondary?: boolean;
};

export default function Item({
  image,
  description,
  name,
  facebook,
  instagram,
  reverse,
  secondary,
  title,
}: ItemProps) {
  const { isBelowMd } = useWindowSize();
  return (
    <div className="w-full h-full flex flex-col gap-10">
      {!isBelowMd && (
        <div className="w-full h-full flex flex-col gap-2">
          <Typography
            className={`!font-light ${reverse ? `!text-right` : `!text-left`}`}
            variant="h2"
          >
            {title}
          </Typography>
          <Typography
            className={`!font-bold ${reverse ? `!text-right` : `!text-left`}`}
            variant="h1"
          >
            {name}
          </Typography>
        </div>
      )}
      <div
        className={`w-full h-full flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } relative justify-center items-center md:items-start`}
      >
        <Image
          className={`xs:w-[50vh] xs:aspect-square md:w-[50vh] md:h-[75vh] md:border-[56px] border-[24px] ${
            secondary ? `border-goldsand` : `border-black`
          } z-10 object-center object-cover transition-all ease-in-out duration-1000`}
          src={image}
          priority
          alt=""
        />

        <div className="relative pb-10 md:px-10 px-5 rounded-2xl flex flex-col gap-2 md:gap-5 h-full md:flex-grow">
          {isBelowMd && (
            <div className="w-full h-full flex flex-col gap-2 mt-5">
              <Typography
                className={`!font-light !text-center !text-2xl`}
                variant="h2"
              >
                {title}
              </Typography>
              <Typography
                className={`!font-bold !text-center !text-3xl`}
                variant="h1"
              >
                {name}
              </Typography>
            </div>
          )}

          <Typography
            variant="desc"
            className={`${reverse ? `md:!text-right` : `md:!text-left`}`}
          >
            {description}
          </Typography>
          <div
            className={`flex flex-row items-center ${
              !reverse ? `md:justify-start` : `md:justify-end`
            } justify-center gap-10`}
          >
            <Link href={`${facebook}`} className="group flex flex-row gap-2 ">
              <FaFacebook className="text-3xl text-black group-hover:text-tamarillo" />
              {!isBelowMd && (
                <Typography
                  variant="desc"
                  className="group-hover:text-tamarillo"
                >
                  Facebook
                </Typography>
              )}
            </Link>
            <Link href={`${instagram}`} className="group flex flex-row gap-2">
              <FaInstagram className="text-3xl text-black group-hover:text-tamarillo" />
              {!isBelowMd && (
                <Typography
                  variant="desc"
                  className="group-hover:text-tamarillo"
                >
                  Instagram
                </Typography>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
