import React from 'react';

type Props = {
  children?: React.ReactNode | null | undefined;
  startIcon?: React.ReactElement | undefined;
  endIcon?: React.ReactElement | undefined;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: 'submit' | 'button' | 'reset' | undefined;
};

export function Button({
  children,
  startIcon,
  endIcon,
  className = '',
  type,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={`
                group h-[3rem] lg:h[3.5-rem] w-[10rem] bg-khaki border-2 border-khaki hover:bg-tamarillo
            hover:border-tamarillo focus:border-tamarillo active:border-tamarillo transition-all hover:cursor-pointer
                ${className}
            `}
      onClick={onClick}
    >
      <div
        className="w-full text-white text-sm sm:text-sm md:text-base lg:text-lg 
                !leading-6 md:!leading-7 font-normal text-center
                flex flex-row justify-center items-center gap-2
                group-hover:text-white m-[3px]"
      >
        {startIcon}
        {children}
        {endIcon}
      </div>
    </button>
  );
}
