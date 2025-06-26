import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useDeviceType from "../../Hooks/useDeviceType";

const ImageOverlayCard = ({
  label,
  end,
  imgSrc,
  suffix = "",
}: {
  label: string;
  end: number;
  imgSrc: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const { isMobile } = useDeviceType();
  const isInView = useInView(ref, { once: true, amount: 0.9 });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      let current = 0;
      const duration = 2000;
      const stepTime = 16;
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end, controls]);

  return (
    <>
      {isMobile ? (
        <div
          ref={ref}
          className="md:w-[30%] w-full rounded-xl overflow-hidden shadow-lg relative"
        >
          <img
            className="w-full h-64 object-cover"
            src={imgSrc}
            alt={`${label} background`}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10">
            <h2 className="text-4xl font-bold text-center">
              {count.toLocaleString()}
              {suffix}
            </h2>
            <p className="text-xl mt-1 text-center">{label}</p>
          </div>
        </div>
      ) : (
        <div
          ref={ref}
          className="md:w-[30%] w-full rounded-xl overflow-hidden shadow-lg mb-[4px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          <div className="flex flex-col justify-end p-2 z-10">
            <h2 className="text-2xl font-bold text-center">
              {count.toLocaleString()}
              {suffix}
            </h2>
            <p className="text-xl mt-1 text-center">{label}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageOverlayCard;
