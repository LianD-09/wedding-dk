import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  src: string | StaticImport,
  current: number
}

const ImageSlider = ({ src, current }: Props) => {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false); // Start fading out
    const timeout = setTimeout(() => setFade(true), 1000); // Fade in new image
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div
      className={`w-full flex transition-opacity duration-1000`}
      style={{ opacity: fade ? "1" : "0" }}
    >
      <Image
        key={current}
        src={src}
        alt=""
        priority
        className="aspect-[2/1] h-full object-center object-cover pointer-events-none"
      />
    </div>
  );
};

export default ImageSlider;
