import useDeviceType from "../../Hooks/useDeviceType";
import first from "../../assets/1.webp";
import second from "../../assets/2.webp";
import third from "../../assets/3.webp";
import fourth from "../../assets/4.webp";
import fifth from "../../assets/5.webp";
import sixth from "../../assets/6.webp";
import seventh from "../../assets/7.webp";
import eigth from "../../assets/8.webp";

const AppScreenshots = () => {
  const { isMobile } = useDeviceType();
  const images = [first, second, third, fourth, fifth, sixth, seventh, eigth];
  return (
    <div className="flex flex-col">
      <div className="flex text-center items-center justify-between mb-4">
        <div
          className="text-2xl font-bold text-center"
          style={{ marginLeft: isMobile ? "16px" : "" }}
        >
          Book your drone in three clicks
        </div>
        {!isMobile && (
          <button
            onClick={() => {
              window.open("https://app.cropwings.com/qr", "_blank");
            }}
            className="bg-[#106d20] h-[36px] px-[12px] py-0 text-white"
          >
            Book Now
          </button>
        )}
      </div>
      <div
        className="flex gap-4 overflow-x-scroll items-center text-center p-4"
        style={{ padding: isMobile ? "16px" : 0 }}
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            width={isMobile ? 250 : 320}
            height={isMobile ? 250 : 320}
            alt=""
            style={{ borderRadius: 8 }}
          />
        ))}
      </div>
      {isMobile && (
        <button
          onClick={() => {
            window.open("https://app.cropwings.com/qr", "_blank");
          }}
          className="mt-[40px] m-auto w-[90vw] whitespace-pre-line rounded-xl bg-[#106d20] px-5 py-3 text-base text-white"
        >
          Book Now
        </button>
      )}
    </div>
  );
};

export default AppScreenshots;
