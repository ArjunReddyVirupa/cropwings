// import { motion } from "framer-motion";
// import FarmerImg from "../../assets/FarmerImg.png";
// import PilotImg from "../../assets/Pilot.png";

// export default function Partners() {
//   return (
//     <div className="flex flex-col">
//       <div className="grid grid-flow-row sm:grid-flow-col items-center gap-16 justify-center px-16">
//         <motion.img
//           src={FarmerImg}
//           alt="farmer"
//           width={400}
//           height={400}
//           style={{ borderRadius: "8px" }}
//           variants={{
//             hidden: { x: -200, opacity: 0 },
//             visible: { x: 0, opacity: 1 },
//           }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         />
//         <motion.div
//           variants={{
//             hidden: { x: 200, opacity: 0 },
//             visible: { x: 0, opacity: 1 },
//           }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <ul className="text-left text-lg space-y-2">
//             <li>Protect your crops in just a few clicks</li>
//             <li>Save up to 30% on crop protection solutions</li>
//             <li>Fast and affordable drone services at your fingertips</li>
//             <li>Discover products designed exclusively for drones</li>
//             <li>Get an early access to openmarket.ag</li>
//           </ul>
//         </motion.div>
//       </div>
//       <div className="grid grid-flow-row sm:grid-flow-col gap-4">
//         <div className="grid grid-flow-row sm:grid-flow-col gap-4 justify-center px-16">
//           <motion.img
//             src={PilotImg}
//             alt="drone-service"
//             width={300}
//             height={300}
//             style={{ borderRadius: "8px" }}
//             variants={{
//               hidden: { x: -200, opacity: 0 },
//               visible: { x: 0, opacity: 1 },
//             }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           />
//           <motion.div
//             variants={{
//               hidden: { x: 200, opacity: 0 },
//               visible: { x: 0, opacity: 1 },
//             }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           >
//             <ul className="text-left text-lg space-y-2">
//               <li>Broaden your offerings and maximize revenue opportunities</li>
//               <li>Unlock more income with additional service offerings</li>
//             </ul>
//             <div className="font-semibold pt-2">Pilot</div>
//             <ul className="text-left text-lg space-y-2">
//               <li>Receive local orders with ease</li>
//               <li>Boost your spraying productivity</li>
//               <li>Unlock extra income opportunities</li>
//               <li>Maximize daily spray coverage</li>
//             </ul>
//           </motion.div>
//         </div>
//         <div className="grid grid-flow-row sm:grid-flow-col gap-4 justify-center px-16">
//           <motion.img
//             src={PilotImg}
//             alt="drone-service"
//             width={300}
//             height={300}
//             style={{ borderRadius: "8px" }}
//             variants={{
//               hidden: { x: -200, opacity: 0 },
//               visible: { x: 0, opacity: 1 },
//             }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           />
//           <motion.div
//             variants={{
//               hidden: { x: 200, opacity: 0 },
//               visible: { x: 0, opacity: 1 },
//             }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           >
//             <ul className="text-left text-lg space-y-2">
//               <li>Broaden your offerings and maximize revenue opportunities</li>
//               <li>Unlock more income with additional service offerings</li>
//             </ul>
//             <div className="font-semibold pt-2">Pilot</div>
//             <ul className="text-left text-lg space-y-2">
//               <li>Receive local orders with ease</li>
//               <li>Boost your spraying productivity</li>
//               <li>Unlock extra income opportunities</li>
//               <li>Maximize daily spray coverage</li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
export { default as Farmer } from "./Farmer";
export { default as Retail } from "./Retail";
export { default as Partner } from "./Partner";
