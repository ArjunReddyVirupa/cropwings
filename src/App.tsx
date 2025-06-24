import { useEffect, useRef } from "react";
import LandingImg from "./assets/Landing.jpg";
import NewOrderImg from "./assets/New Order.jpg";
import { motion, useInView } from "framer-motion";
import InstaIcon from "./assets/Instagram.svg";
import youtubeIcon from "./assets/Youtube.svg";
import linkedInIcon from "./assets/LinkedIn.svg";
import DownloadIcons from "./DownloadIcons";
import MobilePhone from "./assets/MobilePhone.svg";
import QR from "./assets/QR.png";
import CWIntro from "./assets/CW Intro.mp4";
import {
  CropwingsStar,
  Farmer,
  ImageOverlayCard,
  Partner,
  Retail,
  Team,
} from "./Components";
import States from "./assets/States.png";
import Acres from "./assets/Acres.png";
import Partners from "./assets/Partners.png";
import AppScreenshots from "./Components/AppScreenshots";

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center font-our-lexend">
      <div className="fixed bottom-5 z-[200] w-[98vw] transition-all duration-300 ease-in-out translate-y-full opacity-0">
        <div className="sticky bottom-5 flex justify-between rounded-2xl border border-zSlate600 bg-black p-3 sm:hidden">
          <div className="flex items-center">
            <img
              src="https://b.zmtcdn.com/images/square_zomato_logo_new.svg"
              className="size-10 rounded-xl"
              loading="lazy"
            />
            <div className="px-3 text-[13px] leading-5 font-normal text-white">
              Online ordering and
              <br />
              much more on the app
            </div>
          </div>
          <button className="w-max rounded-3xl bg-white px-4 text-center text-xs font-semibold text-zRed500">
            <a href="https://zomato.onelink.me/xqzv/2c9wu3p8" target="_blank">
              Order on app
            </a>
          </button>
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start top-0 before:absolute before:-bottom-12 before:left-0 before:h-12 before:w-full before:bg-zCoal sm:hidden">
        <div className="relative grid h-[--app-height] max-h-[900px] min-h-[--app-height]  grid-cols-1 grid-rows-2 opacity-100 transition-opacity duration-300 will-change-[opacity]">
          <div className="relative  w-full transition-transform ease-linear will-change-transform ">
            <div className="relative overflow-hidden">
              <video
                src={CWIntro}
                className="object-cover transition-opacity duration-400 overflow-clip pointer-events-none aspect-[1125/1494] w-full opacity-100"
                autoPlay
                loop
                playsInline
                muted
                preload="metadata"
                style={{ overflowClipMargin: "content-box" }}
              ></video>
            </div>
            <div className="absolute left-0 top-0 aspect-[1125/1494] w-full translate-y-1/2  bg-[linear-gradient(179.87deg,_rgba(28,28,28,0)_5%,_rgba(28,28,28,1)_50%,_#1C1C1C_100%)] "></div>
          </div>
          <div className="relative z-50 flex w-full flex-col items-center justify-end text-white opacity-100 transition-transform ease-linear will-change-transform">
            <div className="relative overflow-hidden">
              <img
                src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
                alt="cropwings logo"
                className="object-cover transition-opacity duration-200 opacity-100 h-8 w-[164px] mb-10"
                loading="eager"
              />
            </div>
            <h1 className="mb-4 whitespace-pre-line px-5 text-center text-[26px] leading-8 font-semibold">
              India’s #1
              <br />
              <span className="text-[20px]">crop protection services app</span>
            </h1>
            <div className="w-11/12 whitespace-pre-line px-5 text-center text-sm font-light">
              Experience fast &amp; easy online crop protection services on the
              Cropwings app
            </div>
            <a href="https://app.cropwings.com/qr" target="_blank">
              <button className="mb-4 mt-10 w-[90vw] whitespace-pre-line rounded-xl bg-buttonBG px-5 py-3 text-base text-white">
                Order services on app
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start top-[-40%] rounded-t-3xl bg-white before:absolute before:-bottom-12 before:left-0 before:h-14 before:w-full before:bg-white sm:hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-50 h-[calc(100%+40px)] w-full rounded-t-[23px] bg-slate-800 opacity-0 transition-opacity duration-300 ease-out will-change-[opactiy]"></div>
        <div className="flex flex-col gap-4 p-4">
          <AppScreenshots />
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start top-[-40%] rounded-t-3xl bg-white before:absolute before:-bottom-12 before:left-0 before:h-14 before:w-full before:bg-white sm:hidden">
        <div className="rounded-t-3xl bg-white sm:hidden">
          <div className="flex flex-col w-full justify-center overflow-hidden rounded-t-3xl bg-gradient-to-t from-[#FFF] to-[#d5e8ce]">
            <Farmer />
          </div>
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start top-[-40%] rounded-t-3xl bg-white before:absolute before:-bottom-12 before:left-0 before:h-14 before:w-full before:bg-white sm:hidden">
        <div className="rounded-t-3xl bg-white sm:hidden">
          <div className="flex flex-col w-full justify-center overflow-hidden rounded-t-3xl bg-gradient-to-t from-[#FFF] to-[#d5e8ce]">
            <Retail />
          </div>
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start top-[-40%] rounded-t-3xl bg-white before:absolute before:-bottom-12 before:left-0 before:h-14 before:w-full before:bg-white sm:hidden">
        <div className="rounded-t-3xl bg-white sm:hidden">
          <div className="flex flex-col w-full justify-center overflow-hidden rounded-t-3xl bg-gradient-to-t from-[#FFF] to-[#d5e8ce]">
            <Partner />
          </div>
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start sm:hidden top-[-40%]">
        <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-t-3xl bg-black bg-cover bg-center text-white">
          <CropwingsStar />
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start sm:hidden top-[-40%] bg-black">
        <div className="relative flex h-[700px] w-full justify-center overflow-hidden rounded-t-3xl bg-gradient-to-t from-[#FFF] to-[#d5e8ce]">
          <Team />
        </div>
      </div>
      <div className="sticky top-0 rounded-t-3xl bg-white sm:hidden">
        <div className="rounded-t-3xl bg-white sm:hidden">
          <div className="flex w-full justify-center overflow-hidden rounded-t-3xl bg-gradient-to-t from-[#FFF] to-[#d5e8ce]">
            <div className="mt-4 flex gap-4">
              <img
                alt="Download logo"
                src={LandingImg}
                loading="eager"
                className="h-auto w-[120px] h-[100px] transition-transform duration-1000 rounded-lg ease-out translate-y-0"
              />
              <img
                alt="New Order"
                src={NewOrderImg}
                loading="eager"
                className="h-auto w-[120px] transition-transform duration-1000 rounded-lg ease-out translate-y-0"
              />
            </div>
          </div>
          <div className="my-10 flex flex-col items-center justify-center">
            <div className="text-[26px] font-semibold leading-8">
              Download the app now!
            </div>
            <div className="mt-4 w-4/5 text-center text-sm font-light text-comet">
              Experience seamless crop protection services
              <br />
              with the Cropwings app
            </div>
          </div>
          <div className="mb-10 flex justify-center space-x-5 px-4">
            <DownloadIcons />
          </div>
        </div>

        <div className="relative bg-black after:overscroll-y-contain after:absolute after:w-full after:h-20 after:-bottom-20 after:left-0 after:bg-black sm:hidden">
          <footer className="px-5 pt-4   text-white lg:mx-auto lg:max-w-[834px] xl:max-w-[949px] lg:pt-20 ">
            <div className="flex w-full items-center justify-start py-6 ">
              <img
                loading="eager"
                className="h-8 lg:h-9"
                src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
                alt="Cropwings Logo"
              />
            </div>
            <div className="py-6">
              <div className="grid grid-cols-2   gap-6 text-xs font-normal text-zSlate500 md:grid-cols-5">
                <div className="order-1 h-fit max-w-52 ">
                  <h4 className="mb-[10px] font-normal text-zGrey200 text-sm lg:text-lg">
                    Partner with us
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-2 text-xs lg:text-base">
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://www.zomato.com/"
                        target="_blank"
                        className=""
                      >
                        For Corporate
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://app.cropwings.com/onboarding/partner/01"
                        target="_blank"
                        className=""
                      >
                        For Pilots
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://app.cropwings.com/onboarding/partner/01"
                        target="_blank"
                        className=""
                      >
                        For Retailers
                      </a>
                    </div>
                  </div>
                </div>
                <div className="max-w-52 h-fit order-2 lg:order-4">
                  <h4 className="mb-[10px] font-normal text-zGrey200 text-sm lg:text-lg">
                    Learn More
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-2 text-xs lg:text-base">
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://app.cropwings.com/common/privacypolicy"
                        target="_blank"
                        className=""
                      >
                        Privacy and Policies
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://app.cropwings.com/common/tos"
                        target="_blank"
                        className=""
                      >
                        Terms & Conditions
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://www.zomato.com/contact"
                        target="_blank"
                        className=""
                      >
                        Help &amp; Support
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://blog.zomato.com/"
                        target="_blank"
                        className=""
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
                <div className="order-3 h-fit lg:order-5">
                  <h4 className=" mb-[10px] text-sm font-medium text-zGrey200 lg:text-lg">
                    Social Links
                  </h4>
                  <div className="inline-flex gap-1">
                    <a
                      href="https://www.linkedin.com/company/crop-wings/"
                      target="_blank"
                      className=""
                    >
                      <img src={linkedInIcon} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.instagram.com/cropwings?igsh=MWs3Zms4c2FjNmNudg=="
                      target="_blank"
                      className=""
                    >
                      <img src={InstaIcon} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com/@cropwingsnetwork"
                      target="_blank"
                      className=""
                    >
                      <img src={youtubeIcon} alt="Instagram" />
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <DownloadIcons />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="hidden bg-white sm:block">
        <div className="relative flex h-screen min-h-max w-full flex-col items-center justify-end bg-black bg-cover bg-center">
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="relative overflow-hidden w-full h-full">
              <video
                src={CWIntro}
                className="transition-opacity duration-400 overflow-clip pointer-events-none w-full h-full object-cover opacity-100"
                autoPlay
                loop
                playsInline
                muted
                preload="metadata"
                style={{ overflowClipMargin: "content-box" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 h-full w-full bg-[linear-gradient(179.87deg,_rgba(28,28,28,0)_0%,_#1C1C1C_100%)]"></div>
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
              <h1 className="text-heading mb-5 px-5 text-center font-semibold">
                India’s #1
                <br />
                for crop protection services
              </h1>
            </div>
            <div className="m-8 flex w-full flex-col justify-center xl:mt-12">
              <div className="flex w-full justify-center gap-6 px-4">
                <DownloadIcons />
              </div>
            </div>
            <div className="mb-6 flex animate-bounce cursor-pointer items-center 2xl:my-8">
              <div
                className="text-sm text-white xl:text-base 2xl:text-lg"
                onClick={() => {
                  const el = document.getElementById("scroll-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Scroll down
                <span className="z-icon ml-2 text-white"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white m-4" id="scroll-section">
          <div className="flex flex-col w-full m-auto align-center justify-center gap-4 mt-4">
            <AppScreenshots />
            <div className="flex justify-between mt-4">
              <ImageOverlayCard
                imgSrc={Acres}
                end={100000}
                suffix="+"
                label="Acres"
              />
              <ImageOverlayCard
                imgSrc={Partners}
                end={500}
                suffix="+"
                label="Partners"
              />
              <ImageOverlayCard imgSrc={States} end={8} label="States" />
            </div>
          </div>
        </div>

        <motion.div
          style={{
            background: "linear-gradient(0deg, #FFFFFF 0%, #d5e8ce 100%)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
          className="relative px-4 pt-8 pb-20 mt-4 xl:mt-8 xl:pt-8 2xl:pt-20 2xl:mt-12 flex w-full flex-col items-center gap-16"
        >
          <div
            style={{
              borderRadius: "45px",
              // padding: "20px",
              background:
                "linear-gradient(rgb(213, 232, 206) 0%, rgb(16, 109, 32) 100%)",
            }}
          >
            <div
              style={{
                borderRadius: "40px",
                margin: "8px",
                background:
                  "linear-gradient(80deg, rgb(255, 255, 255) 0%, rgb(213, 232, 206) 100%)",
              }}
            >
              <Farmer />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 gap-4">
            <div
              style={{
                borderRadius: "45px",
                background:
                  "linear-gradient(rgb(213, 232, 206) 0%, rgb(16, 109, 32) 100%)",
              }}
            >
              <div
                style={{
                  borderRadius: "40px",
                  margin: "8px",
                  background:
                    "linear-gradient(89deg, rgb(213, 232, 206) 0%, rgb(255, 255, 255) 50%)",
                }}
              >
                <Partner />
              </div>
            </div>
            <div
              style={{
                borderRadius: "45px",
                background:
                  "linear-gradient(rgb(213, 232, 206) 0%, rgb(16, 109, 32) 100%)",
              }}
            >
              <div
                style={{
                  borderRadius: "40px",
                  margin: "8px",
                  background:
                    "linear-gradient(89deg, rgb(213, 232, 206) 0%, rgb(255, 255, 255) 50%)",
                }}
              >
                <Retail />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative ">
          <div className="relative mb-14 flex w-screen flex-col items-center justify-center overflow-hidden bg-black p-20 text-white xl:px-20 ">
            <div className="flex w-fit flex-col  items-center justify-center gap-8 2xl:gap-16  ">
              <CropwingsStar />
            </div>
          </div>
        </div>
        <div className="relative mb-12">
          <Team />
        </div>
        <div className="relative mx-auto mb-8 w-[88%] bg-white py-10 xl:mb-20">
          <div
            className="relative rounded-[45px] p-[5px] mx-auto max-w-[1488px] shadow-[0px_8px_10px_0px_#1C1C1C14]"
            style={{
              background: "linear-gradient(180deg, #d5e8ce 0%, #106d20 100%)",
            }}
          >
            <div
              className="rounded-[40px]"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #d5e8ce 100%)",
              }}
            >
              <div className="relative flex size-full w-full items-center justify-between gap-7 overflow-hidden px-4 pt-6 lg:pt-8 xl:pt-[60px]">
                <div className="flex flex-col items-center w-[50%]">
                  <div className="w-full">
                    <div className="mb-2 text-start text-xl font-bold text-zCoal md:text-2xl lg:mb-4 lg:text-3xl xl:text-[40px]">
                      Download the app now!
                    </div>
                    <div className="text-start text-sm font-normal text-comet md:text-base lg:text-xl xl:text-2xl">
                      Experience seamless online ordering
                      <br />
                      for your crop protection
                    </div>
                  </div>
                  <div className="z-50 mt-4 flex max-h-[48px] w-full items-center justify-items-start gap-4 lg:mt-10 xl:max-h-[72px]  2xl:gap-[28px]">
                    <DownloadIcons />
                  </div>
                </div>
                <motion.div
                  ref={ref}
                  initial={{ y: "75%" }}
                  animate={isInView ? { y: "20%" } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-50 w-1/2 lg:max-w-[348px] xl:max-w-[454px]"
                >
                  <div className="size-full">
                    <img src={MobilePhone} loading="lazy" alt="mobile-phone" />
                  </div>
                  <div className="absolute left-0 top-[-60px] flex size-full flex-col items-center justify-end gap-5">
                    <div className="w-[60%] text-center text-xs font-medium text-comet md:text-sm lg:w-3/5 lg:text-base xl:text-xl">
                      Scan the QR code to download the app
                    </div>
                    <div className="mb-3 flex items-center justify-center xl:mb-12">
                      <img
                        src={QR}
                        loading="lazy"
                        alt="download cropwings app"
                        className="aspect-square w-1/3"
                      />
                    </div>
                  </div>
                </motion.div>
                <div className="absolute right-[-30%] top-[30%] aspect-square w-[90%]">
                  <div className="flex aspect-square w-full items-center justify-center rounded-full border-2 border-green-100">
                    <div className="flex aspect-square w-4/5 items-center justify-center rounded-full border-2 border-green-100">
                      <div className="flex aspect-square w-3/4 items-center justify-center rounded-full border-2 border-green-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-black after:overscroll-y-contain after:absolute after:w-full after:h-20 after:-bottom-20 after:left-0 after:bg-black">
          <footer className="px-5 pt-4   text-white lg:mx-auto lg:max-w-[834px] xl:max-w-[949px] lg:pt-20 ">
            <div className="flex w-full items-center justify-start py-6 ">
              <img
                className="h-8 lg:h-9"
                src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
                alt="Cropwings Logo"
                loading="eager"
              />
            </div>
            <div className="py-6">
              <div className="grid grid-cols-2   gap-6 text-xs font-normal text-zSlate500 md:grid-cols-5">
                <div className="order-1 h-fit max-w-52 ">
                  <h4 className="mb-[10px] font-normal text-zGrey200 text-sm lg:text-lg">
                    Partner with us
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-2 text-xs lg:text-base">
                    <div className="">
                      <a
                        href="https://www.zomato.com/"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        For Corporate
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://app.cropwings.com/onboarding/partner/01"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        For Pilots
                      </a>
                    </div>
                    <div className="hover:text-zSlate300">
                      <a
                        href="https://app.cropwings.com/onboarding/partner/01"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        For Retailers
                      </a>
                    </div>
                  </div>
                </div>
                <div className="max-w-52 h-fit order-2 lg:order-4">
                  <h4 className="mb-[10px] font-normal text-zGrey200 text-sm lg:text-lg">
                    Learn More
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-2 text-xs lg:text-base">
                    <div>
                      <a
                        href="https://app.cropwings.com/common/privacypolicy"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        Privacy and Policies
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://app.cropwings.com/common/tos"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        Terms & Conditions
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.zomato.com/contact"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        Help &amp; Support
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://blog.zomato.com/"
                        target="_blank"
                        className="hover:text-white hover:no-underline"
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
                <div className="order-3 h-fit lg:order-5">
                  <h4 className=" mb-[10px] text-sm font-medium text-zGrey200 lg:text-lg">
                    Social Links
                  </h4>
                  <div className="inline-flex gap-1">
                    <a
                      href="https://www.linkedin.com/company/crop-wings/"
                      target="_blank"
                      className=""
                    >
                      <img src={linkedInIcon} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.instagram.com/cropwings?igsh=MWs3Zms4c2FjNmNudg=="
                      target="_blank"
                      className=""
                    >
                      <img src={InstaIcon} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com/@cropwingsnetwork"
                      target="_blank"
                      className=""
                    >
                      <img src={youtubeIcon} alt="Instagram" />
                    </a>
                  </div>
                  <div className="mb-10 flex flex-col w-max gap-2">
                    <DownloadIcons />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
