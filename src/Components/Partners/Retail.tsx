import { motion } from "framer-motion";
import Retailer from "../../assets/Retailer.webp";

export default function Retail() {
  return (
    <>
      <div className="text-center text-2xl text-bold pt-4">For Retailer</div>
      <div className="grid grid-flow-row sm:grid-flow-col items-center gap-16 justify-center px-4 mt-2 mb-4 sm:mt-0 sm:mb-0">
        <motion.img
          src={Retailer}
          alt="drone-service"
          width={300}
          height={300}
          style={{ borderRadius: "8px" }}
          variants={{
            hidden: { x: -200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ul className="text-left font-normal space-y-2 text-[14px]">
            <li>Offer Additional services to farmers</li>
            <li>Multiple income oppertunities</li>
            <li>Be a CropWings official partner in your area</li>
            <li>Sell drone specific pesticides in your area</li>
          </ul>
          <div className="text-[12px] mt-4">
            See how partnering with CropWings helps you offer more, sell more,
            and earn more. Watch the video to get started.
            <span
              className="text-[#106d20] ml-1 font-bold cursor-pointer"
              onClick={() => {
                window.open(
                  "https://youtube.com/shorts/QyX9drUqF3w?si=63JxGRtKir_m3ehU",
                  "_blank"
                );
              }}
            >
              Click Here
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
