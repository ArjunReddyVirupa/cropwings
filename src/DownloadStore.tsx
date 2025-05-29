import AppleStoreIcon from "./assets/AppStoreIcon.svg";
import PlayStoreIcon from "./assets/PlayStoreIcon.svg";

export default function DownloadStore() {
  return (
    <div>
      <div className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition">
        <img src={AppleStoreIcon} alt="Apple store icon" />
        <div>
          Download on the
          <br />
          <span>App Store</span>
        </div>
      </div>
      <div className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition">
        <img src={PlayStoreIcon} alt="Play store icon" />
        <div>
          Get it on
          <br />
          <span>Google Play</span>
        </div>
      </div>
    </div>
  );
}
