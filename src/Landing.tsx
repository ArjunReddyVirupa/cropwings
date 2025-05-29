export default function Landing() {
  return (
    <div className="relative flex h-screen min-h-max w-full flex-col items-center justify-end bg-black bg-cover bg-center">
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="relative overflow-hidden w-full h-full">
          <video
            src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
            className="transition-opacity duration-400 overflow-clip pointer-events-none w-full h-full object-cover opacity-100"
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            style={{ overflowClipMargin: "content-box" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 h-full w-full bg-[linear-gradient(179.87deg,_rgba(28,28,28,0)_0%,_#1C1C1C_100%)]" />
      </div>
      <div className="z-20 flex max-h-[75%] flex-col items-center justify-center">
        <div className="mb-6 2xl:mb-8">
          <img
            className="h-8 w-auto lg:h-8 xl:h-10 2xl:h-14"
            src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
            loading="eager"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center text-white">
          <h1 className="mb-4 whitespace-pre-line px-5 text-center text-[26px] leading-8 font-semibold">
            India’s #1 <br />
            for crop protection services
          </h1>
        </div>
        <div className="m-8 flex w-full flex-col justify-center xl:mt-12">
          <div className="flex w-full justify-center gap-6 px-4">
            <a
              href="https://shorturl.at/v3heE"
              target="_blank"
              className="z-50 size-fit transition-transform duration-200 hover:scale-110"
            >
              <div className="">
                <img
                  alt="App Download Logo"
                  className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"
                  src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                  loading="lazy"
                />
              </div>
            </a>
            <a
              href="https://shorturl.at/v3heE"
              target="_blank"
              className="z-50 size-fit transition-transform duration-200 hover:scale-110"
            >
              <div className="">
                <img
                  alt="App Download Logo"
                  className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"
                  src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="mb-6 flex animate-bounce cursor-pointer items-center 2xl:my-8">
          <div className="text-sm text-white xl:text-base 2xl:text-lg">
            Scroll down
            <span className="z-icon ml-2 text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
