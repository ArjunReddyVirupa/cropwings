import Apple from "./assets/AppleIcon.svg";
import GooglePlay from "./assets/GooglePlay.svg";

export default function DownloadIcons() {
  return (
    <>
      <a
        href="https://app.cropwings.com/qr"
        target="_blank"
        className="z-50 hover:text-white hover:no-underline bg-black size-fit transition-transform duration-200 hover:scale-110 text-white flex rounded-lg w-fit py-[4px] px-[8px] gap-2 border-gray-400 border border-solid"
      >
        <img src={Apple} alt="" width={30} height={30} />
        <div className="flex flex-col font-light" style={{ fontSize: "11px" }}>
          Download on the <span className="text-sm font-bold">App Store</span>
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.cropwings.app&pcampaignid=web_share"
        target="_blank"
        className="z-50 hover:text-white hover:no-underline bg-black size-fit transition-transform duration-200 hover:scale-110 text-white flex rounded-lg w-fit py-[4px] px-[8px] gap-2 border-gray-400 border border-solid"
      >
        <img src={GooglePlay} alt="" width={30} height={30} />
        <div className="flex flex-col font-light" style={{ fontSize: "11px" }}>
          GET IT ON <span className="text-sm font-bold">Google Play</span>
        </div>
      </a>
    </>
  );
}
