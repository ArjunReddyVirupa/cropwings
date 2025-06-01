const ImageOverlayCard = ({
  label,
  value,
  imgSrc,
}: {
  label: string;
  value: string;
  imgSrc: any;
}) => {
  return (
    <div className="md:w-[30%] w-[100%] rounded-xl overflow-hidden shadow-lg relative">
      <img
        className="w-full h-72 object-cover"
        src={imgSrc}
        alt="Card background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10">
        <h2 className="text-4xl font-bold text-center">{label}</h2>
        <p className="text-xl mt-1 text-center">{value}</p>
      </div>
    </div>
  );
};

export default ImageOverlayCard;
