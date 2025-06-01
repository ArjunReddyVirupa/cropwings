"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote?: string;
  name: string;
  designation: string;
  src: string;
};

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
};

export const MobileUI: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-xs px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-80 w-full">
          {testimonials.map((testimonial, index) => {
            const isPrev =
              index ===
              (active - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (active + 1) % testimonials.length;
            const isActive = index === active;

            let styleProps = {
              zIndex: 10,
              scale: 1,
              rotate: 0,
              x: 0,
            };

            if (isPrev) {
              styleProps = {
                zIndex: 5,
                scale: 0.9,
                rotate: -10,
                x: -20,
              };
            } else if (isNext) {
              styleProps = {
                zIndex: 5,
                scale: 0.9,
                rotate: 10,
                x: 20,
              };
            } else if (!isActive) {
              return null;
            }

            return (
              <motion.div
                key={testimonial.src}
                animate={styleProps}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                />
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 pt-8 md:pt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
