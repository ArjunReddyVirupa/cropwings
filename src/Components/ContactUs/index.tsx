import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

type AnimatedModalProps = {
  show: boolean;
  onClose: () => void;
};

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: "-50%",
    x: "-50%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.3 },
  },
};

const ContactUs: React.FC<AnimatedModalProps> = ({ show, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [button, setButton] = useState("Send Message");
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    position: "",
    email: "",
    phone_number: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    full_name: "",
    company_name: "",
    position: "",
    email: "",
    phone_number: "",
  });

  const validate = () => {
    const newErrors: any = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Name is required.";
    if (!formData.company_name.trim())
      newErrors.company_name = "Company Name is required.";
    if (!formData.position.trim()) newErrors.position = "Position is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email.";
    if (!formData.phone_number.match(/^[0-9]{10}$/))
      newErrors.phone_number = "Phone must be 10 digits.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let inputValue = value;
    if (name === "phone_number") {
      inputValue = value.replace(/[^0-9]/g, "");
    }
    setFormData({ ...formData, [name]: inputValue });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButton("Sending...");
    if (!validate()) {
      setButton("Send Message");
      return;
    }

    await emailjs
      .send(
        "service_gqpoy2w",
        "template_c21u73w",
        {
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          description: formData.description,
        },
        "YpmROJ9mqA6Q_LiHc"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );

    setFormData({
      full_name: "",
      company_name: "",
      position: "",
      email: "",
      phone_number: "",
      description: "",
    });
    onClose();
    setButton("Send Message");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="fixed top-1/2 left-1/2 bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md z-50 transform -translate-x-1/2 -translate-y-1/2 text-black"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h5 className="text-lg font-semibold mb-4">
              Fill the below details
            </h5>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <input
                  name="full_name"
                  type="text"
                  placeholder="Full Name"
                  className={`w-full border rounded px-3 py-2 ${
                    errors.full_name ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.full_name}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.full_name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  name="companyName"
                  placeholder="Company Name"
                  type="text"
                  className={`w-full border rounded px-3 py-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.company_name}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.company_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.company_name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  name="position"
                  placeholder="Position"
                  type="text"
                  className={`w-full border rounded px-3 py-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.position}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  className={`w-full border rounded px-3 py-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  name="phone_number"
                  placeholder="Phone Number"
                  type="tel"
                  className={`w-full border rounded px-3 py-2 ${
                    errors.phone_number ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.phone_number}
                  onChange={handleChange}
                  maxLength={10}
                  autoComplete="off"
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone_number}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  autoComplete="off"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <div
                  className="relative w-52 h-14 my-4 overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute w-full h-full bg-teal-400 z-10 top-0 left-0" />
                  <motion.div
                    className="absolute w-full h-full top-0 left-0 z-20"
                    initial={{ y: "100%" }}
                    animate={{ y: isHovered ? "0%" : "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ backgroundColor: "#000" }}
                  />
                  <div
                    className="relative z-30 h-full flex items-center justify-center font-bold uppercase cursor-pointer transition-colors duration-300"
                    style={{ color: isHovered ? "#fff" : "#000" }}
                    onClick={handleSubmit}
                  >
                    {button}
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactUs;
