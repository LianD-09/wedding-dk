'use client';
import React from 'react';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
import Typography from '@/libs/Typography';

export default function Footer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPause, setIsPause] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isClose, setIsClose] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  React.useEffect(() => {
    const timerClose = setTimeout(() => {
      setIsClose(true);
    }, 4000);

    return () => {
      clearTimeout(timerClose);
    };
  }, []);

  const handleMouseClick = (pause: boolean) => {
    setIsPause(pause);
    if (pause) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; dungmt & khanhdhn 2025. All right reserved.
      </small>
      <p className="text-xs">
        <span className="font-normal">
          Thanks for supporting us to build this website @linhda and @tuannha.
        </span>
      </p>
      <div
        className={`fixed z-[100] md:bottom-10 md:left-10 xs:bottom-5 xs:left-5 flex opacity-80 hover:cursor-pointer
        text-white justify-start rounded-full hover:opacity-100 
        `}
      >
        <div
          className={`absolute rounded-full h-full aspect-square pointer-events-none 
            ${isPause ? 'bg-tamarillo' : 'bg-khaki'} animate-[borderTransform_1.5s_linear_infinite] 
            z-[95] opacity-40`}
        ></div>
        <div
          className={`flex relative justify-center items-center rounded-full z-[90] flex-row-reverse overflow-x-hidden`}
        >
          {isVisible && (
            <Typography
              variant="desc"
              className={`p-3 -ml-12 !font-semibold md:pl-14 w-auto xs:pl-14
            !text-white ${isClose ? 'animate-slide-in-left' : 'animate-slide-in-right'}
              ${isPause ? 'bg-tamarillo' : 'bg-khaki'} rounded-3xl
              text-center justify-center items-center flex z-[10] !text-sm
            `}
            >
              Bấm vào đây để phát nhạc!
            </Typography>
          )}
          <audio
            controls
            src="https://res.cloudinary.com/db1pg8ylo/video/upload/v1741667943/zgbrevxo6aranlp1hvjw.mp3"
            autoPlay={!isPause}
            hidden
            className="scale-90 z-[90]"
            loop
            ref={audioRef}
          ></audio>

          {isPause ? (
            <div className="bg-tamarillo text-[1rem] p-4 rounded-full z-[90]" onClick={() => handleMouseClick(!isPause)} >
              <BsVolumeMuteFill />
            </div>
          ) : (
            <div className="bg-khaki text-[1rem] p-4 rounded-full z-[90]" onClick={() => handleMouseClick(!isPause)}>
              <BsVolumeUpFill />
            </div>
          )}
        </div>
        {isPause ? (
          <div className="bg-tamarillo text-[1rem] p-4 rounded-full z-[100] pointer-events-none absolute">
            <BsVolumeMuteFill />
          </div>
        ) : (
          <div className="bg-khaki text-[1rem] p-4 rounded-full z-[100] pointer-events-none absolute">
            <BsVolumeUpFill />
          </div>
        )}
      </div>
    </footer>
  );
}
