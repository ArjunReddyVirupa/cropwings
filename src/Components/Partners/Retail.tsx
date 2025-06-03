import { motion } from "framer-motion";
import Retailer from "../../assets/Retailer.png";

export default function Retail() {
  return (
    <>
      <div className="text-center text-4xl text-bold pt-8">For Retail</div>
      <div className="grid grid-flow-row sm:grid-flow-col gap-4 items-center justify-center px-8 py-8 mt-4 mb-4 sm:mt-0 sm:mb-0">
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
          <ul className="text-left text-lg space-y-2">
            <li>Broaden your offerings and maximize revenue opportunities</li>
            <li>Unlock more income with additional service offerings</li>
          </ul>
          <div className="font-semibold pt-2">Pilot</div>
          <ul className="text-left text-lg space-y-2">
            <li>Receive local orders with ease</li>
            <li>Boost your spraying productivity</li>
            <li>Unlock extra income opportunities</li>
            <li>Maximize daily spray coverage</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
