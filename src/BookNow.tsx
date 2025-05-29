import { useEffect, useRef, useState } from "react";
import LandingImage from "./assets/Landing.jpg";
import NewOrderImage from "./assets/New Order.jpg";
import OrderDetailsImage from "./assets/OrderDetails.jpg";

const BookNow = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto flex h-[28em] w-full max-w-[1880px] items-center justify-center rounded-t-3xl bg-white md:h-[40em] overflow-hidden"
    >
      <button className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-6 py-3 rounded-md text-xl shadow-lg hover:bg-red-600 transition-all duration-300">
        Book Now
      </button>

      <img
        src={LandingImage}
        alt="Left phone"
        className={`absolute top-10 left-10 w-40 h-auto transition-all duration-700 ${
          inView ? "animate-slide-in-left" : "opacity-0"
        }`}
      />

      <img
        src={NewOrderImage}
        alt="Right phone"
        className={`absolute top-10 right-10 w-40 h-auto transition-all duration-700 ${
          inView ? "animate-slide-in-right" : "opacity-0"
        }`}
      />

      <img
        src={OrderDetailsImage}
        alt="Bottom phone"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-auto transition-all duration-700 ${
          inView ? "animate-slide-in-bottom" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default BookNow;
