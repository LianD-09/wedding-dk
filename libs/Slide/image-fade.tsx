import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  src: string | StaticImport,
  current: number
}

const ImageSlider = ({ src, current }: Props) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true); // Start fading out
    const timeout = setTimeout(() => setFade(false), 9000); // Fade in new image
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div
      className={`w-full h-full flex transition-opacity duration-1000 overflow-hidden`}
      style={{ opacity: fade ? "1" : "0" }}
    >
      <Image
        key={current}
        src={src}
        alt=""
        priority
        className="md:h-screen h-full md:object-[center_30%] object-cover pointer-events-none animate-[scaleUp_12s_linear_2s]"
      />
    </div>
  );
};

export default ImageSlider;
