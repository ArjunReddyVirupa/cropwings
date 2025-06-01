import Star from "../../assets/Star.svg";

const CropwingsStar = () => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img
        alt="cropwings logo"
        src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
        loading="lazy"
        className="w-[100px] md:w-[200px] h-auto"
      />

      <span className="text-[20px] md:text-[26px] bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent font-semibold mt-2">
        STAR
      </span>

      <div className="w-[90%] md:w-full mt-3 md:mt-4 text-sm md:text-base font-normal bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent">
        <div>India’s Top Savings</div>
        <div>Program for Crop Protection Services</div>
      </div>

      <div className="flex items-center justify-center gap-2 pt-6 md:pt-8">
        <span
          className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-[8px] md:text-base"
          style={{ fontFamily: "Wasabi" }}
        ></span>

        <span className="text-[13px] md:text-base font-medium leading-tight tracking-[2.6px] md:tracking-[4px] text-white uppercase">
          Max Benefits
        </span>

        <span
          className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-[8px] md:text-base"
          style={{ fontFamily: "Wasabi" }}
        ></span>
      </div>
      <div className="mt-6 md:mt-10 w-full flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl">
          <li className="flex items-start gap-2 list-none">
            <img width={16} height={16} src={Star} alt="Cropwings Star" />
            Special discounts on all products and services
          </li>
          <li className="flex items-start gap-2 list-none">
            <img width={16} height={16} src={Star} alt="Cropwings Star" />
            Priority service with no surge pricing
          </li>
          <li className="flex items-start gap-2 list-none">
            <img width={16} height={16} src={Star} alt="Cropwings Star" />
            Service availability guaranteed when you need it
          </li>
          <li className="flex items-start gap-2 list-none">
            <img width={16} height={16} src={Star} alt="Cropwings Star" />
            Enjoy free cancellations and flexible rescheduling
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CropwingsStar;
