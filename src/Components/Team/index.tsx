import { motion } from "framer-motion";
import { MobileUI } from "./MobileUI";

const images = [
  {
    src: "https://rivor-tailwind.vercel.app/images/home-ai/team/ai-team-1.png",
    name: "Manjunath",
    designation: "CEO",
  },
  {
    src: "https://rivor-tailwind.vercel.app/images/home-ai/team/ai-team-2.png",
    name: "Gowrav",
    designation: "CMO",
  },
  {
    src: "https://rivor-tailwind.vercel.app/images/home-ai/team/ai-team-3.png",
    name: "Sai Vignesh",
    designation: "Director- Head Open Market",
  },
  {
    src: "https://rivor-tailwind.vercel.app/images/home-ai/team/ai-team-4.png",
    name: "Bhanu Prathap",
    designation: "Head - Strategies & New Initiatives",
  },
  {
    src: "https://rivor-tailwind.vercel.app/images/home-ai/team/ai-team-3.png",
    name: "Nipun",
    designation: "Head - Corporate Relations",
  },
  {
    src: "https://rivor-tailwind.vercel.app/images/home-ai/team/ai-team-2.png",
    name: "Mounika",
    designation: "COO",
  },
];

const hoverTextVariants = {
  rest: { y: "-100%", opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const Team = () => {
  return (
    <div>
      <div className="text-center text-4xl mt-10">Meet Our Talent</div>
      <div className="hidden lg:block container mx-auto mt-5 px-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 overflow-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial={{ width: "120px" }}
              whileHover={{ width: "250px" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <motion.div
                className="w-full h-[350px] sm:h-[300px] relative overflow-hidden cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <img
                  src={image.src}
                  alt={`img-${index}`}
                  loading="eager"
                  className="w-full h-full object-cover"
                />

                {/* Desktop hover text */}
                <motion.div
                  variants={hoverTextVariants}
                  className="hidden lg:block absolute bottom-0 left-0 w-full bg-teal-400 text-white text-left p-3 pointer-events-none"
                >
                  <div className="text-black text-sm font-medium">
                    {image.name}
                  </div>
                  <div className="text-black text-xs">{image.designation}</div>
                </motion.div>
              </motion.div>

              {/* Always-visible text for small devices */}
              <div className="block lg:hidden mt-2 bg-teal-400 p-2 text-black text-sm text-left w-[90%] absolute bottom-[10px]">
                <div className="font-medium">{image.name}</div>
                <div className="text-xs">{image.designation}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <MobileUI testimonials={images} />
      </div>
    </div>
  );
};

export default Team;
