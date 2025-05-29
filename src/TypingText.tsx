import { useEffect, useState } from "react";

const TypingText = ({ text, speed = 100 }: { text: string; speed: number }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <p className="text-base md:text-lg text-gray-600 mt-2">{displayed}</p>;
};

export default TypingText;
