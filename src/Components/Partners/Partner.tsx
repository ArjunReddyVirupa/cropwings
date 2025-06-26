import { motion } from "framer-motion";
import PilotImg from "../../assets/Pilot.webp";

export default function Partner() {
  return (
    <>
      <div className="text-center text-2xl text-bold pt-4">For Pilot</div>
      <div className="grid grid-flow-row sm:grid-flow-col gap-4 items-center justify-center px-4 py-2 mt-2 mb-4 sm:mt-0 sm:mb-0">
        <motion.img
          src={PilotImg}
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
            <li>Receive local orders with ease</li>
            <li>Boost your spraying productivity</li>
            <li>Unlock extra income opportunities</li>
            <li>Maximize daily spray coverage</li>
          </ul>
          <div className="mt-10 text-[12px]">
            See how you can earn more, work smarter, and take on more local
            orders—watch the video to learn how it all works.
            <span
              className="text-[#106d20] ml-2"
              onClick={() => {
                window.open(
                  "https://youtube.com/shorts/dlGO5A_YHgk?si=4a3ULMWgg-rjVx4P",
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
