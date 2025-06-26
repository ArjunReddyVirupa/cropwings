import { motion } from "framer-motion";
import Retailer from "../../assets/Retailer.webp";
import useDeviceType from "../../Hooks/useDeviceType";

export default function Retail() {
  const { isMobile } = useDeviceType();
  return (
    <>
      <div className="text-center text-4xl text-bold pt-8">For Retail</div>
      <div className="grid grid-flow-row sm:grid-flow-col gap-4 items-center justify-center px-8 py-8 mb-4 sm:mt-0 sm:mb-0">
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
          <ul className="text-left font-normal space-y-2">
            <li>Offer Additional services to farmers</li>
            <li>Unlock more income with additional service offerings</li>
          </ul>
          <br />
          <div className="font-bold pt-2">Multiple Income opportunities</div>
          <br />
          <ul className="text-left font-normal space-y-2">
            <li>Be a CropWings official partner in your area</li>
            <li>Sell drone specific pesticides in your area</li>
          </ul>
          <div
            className="text-sm"
            style={{ marginTop: isMobile ? "1rem" : "3rem" }}
          >
            See how partnering with CropWings helps you offer more, sell more,
            and earn more. Watch the video to get started.
            <span
              className="text-[#106d20] ml-2"
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
