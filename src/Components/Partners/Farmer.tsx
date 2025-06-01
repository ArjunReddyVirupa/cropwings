import { motion } from "framer-motion";
import FarmerImg from "../../assets/FarmerImg.png";

export default function Farmer() {
  return (
    <div className="grid grid-flow-row sm:grid-flow-col items-center gap-16 justify-center px-16">
      <motion.img
        src={FarmerImg}
        alt="farmer"
        width={400}
        height={400}
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
          <li>Protect your crops in just a few clicks</li>
          <li>Save up to 30% on crop protection solutions</li>
          <li>Fast and affordable drone services at your fingertips</li>
          <li>Discover products designed exclusively for drones</li>
          <li>Get an early access to openmarket.ag</li>
        </ul>
      </motion.div>
    </div>
  );
}
