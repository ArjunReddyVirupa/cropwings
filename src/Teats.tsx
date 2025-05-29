import { useEffect, useRef, useState } from "react";
import LandingImg from "./assets/Landing.jpg";
import NewOrderImg from "./assets/New Order.jpg";
import OrderDetailsImg from "./assets/OrderDetails.jpg";
import FarmerImg from "./assets/FarmerImg.jpeg";
import DroneServiceImg from "./assets/DroneService.jpeg";
import { motion, useInView } from "framer-motion";
import InstaIcon from "./assets/Instagram.svg";
import youtubeIcon from "./assets/Youtube.svg";
import linkedInIcon from "./assets/LinkedIn.svg";
import DownloadIcons from "./DownloadIcons";
import MobilePhone from "./assets/MobilePhone.svg";
import QR from "./assets/QR.png";
import Star from "./assets/Star.svg";
import TypingText from "./TypingText";

export default function Teats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry, "entry");
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    console.log(observer, "obsetvr");
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
                src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4"
                className="object-cover transition-opacity duration-400 overflow-clip pointer-events-none aspect-[1125/1494] w-full opacity-100"
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
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
            <a href="https://zomato.onelink.me/xqzv/8rusaoio" target="_blank">
              <button className="mb-4 mt-10 w-[90vw] whitespace-pre-line rounded-xl bg-buttonBG px-5 py-3 text-base text-white">
                Order services on app
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="sticky h-fit w-full snap-start top-[-40%] rounded-t-3xl bg-white before:absolute before:-bottom-12 before:left-0 before:h-14 before:w-full before:bg-white sm:hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-50 h-[calc(100%+40px)] w-full rounded-t-[23px] bg-slate-800 opacity-0 transition-opacity duration-300 ease-out will-change-[opactiy]"></div>
        <div className="relative  w-full items-center justify-center overflow-hidden rounded-t-3xl bg-white md:h-[40em]   ">
          <div className="flex flex-col  items-center justify-center gap-[18px] py-14 mt-10  mx-4">
            <div className="w-8/12 whitespace-pre-line text-center leading-8 text-[26px] font-semibold text-zRed500 md:w-5/12 md:text-4xl md:font-semibold lg:w-8/12 lg:text-6xl">
              Better food for more people
            </div>
            <div className=" w-[217px] text-center text-sm font-light text-comet md:mt-10 md:w-5/12">
              For over a decade, we’ve enabled our customers to discover new
              tastes, delivered right to their doorstep
            </div>
          </div>
          <div className="absolute top-[142px] flex flex-col items-center justify-center transition-opacity duration-1000 ease-out md:top-[240px] translate-y-0 opacity-100"></div>
          <img
            src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png"
            className=" absolute top-10 right-[70%] w-6 aspect-[92/67] rotate-2"
          />
          <img
            src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png"
            className=" absolute top-[50%] right-8 w-6 aspect-[158/125] rotate-45"
          />
          <img
            src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png"
            className=" absolute bottom-8 left-[10%] w-6 aspect-[158/125] -rotate-2"
          />
          <img
            src="https://b.zmtcdn.com/data/o2_assets/364f85b5586700f0a3f7108cedf543011739962117.png"
            className="absolute left-0 top-[30%] size-[90px] rounded-lg transition-all duration-[1500ms] ease-[cubic-bezier(_0.25,_1,_0.5,_1)]  md:left-[-20px] md:size-[293px] xl:left-44 translate-x-0 translate-y-0 opacity-100"
          />
          <img
            src="https://b.zmtcdn.com/data/o2_assets/3d1b3a891e2c59fd5ae7654dd207370b1739514134.png"
            className="absolute right-0 top-0 h-[100px] w-[122px] rounded-lg transition-all duration-[1500ms] ease-[cubic-bezier(_0.25,_1,_0.5,_1)]  md:right-[5%] md:h-52 md:w-72 xl:right-[15%] translate-x-0 translate-y-0 opacity-100"
          />
          <img
            src="https://b.zmtcdn.com/data/o2_assets/c7523de995639024918c6947c4b2cdcd1742894059.png"
            className="absolute bottom-0 right-6 w-24 -rotate-12 aspect-square rounded-lg transition-all duration-[1500ms] ease-[cubic-bezier(_0.25,_1,_0.5,_1)]  md:right-[5%] md:h-48 md:w-72 xl:right-[15%] translate-x-0 translate-y-0 opacity-100"
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <div className="grid w-[264px] grid-cols-4 grid-rows-3">
            <div className="col-span-3 row-span-1">
              <div className="w-full rounded-xl border border-zRed100 bg-white pl-4 py-3 shadow-[0px_4px_19.299999237060547px_0px_rgba(0,0,0,0.09)] ">
                <div className="flex flex-row items-center justify-start gap-4 ">
                  <div>
                    <div className="text-xl font-bold text-comet">
                      3,00,000+
                    </div>
                    <div className="text-xs font-medium text-slateGrey">
                      restaurants
                    </div>
                  </div>
                  <div className="justify-self-center self-center">
                    <img
                      className="max-h-10 w-auto object-fill"
                      src="https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 col-start-3 row-start-2 w-full -translate-y-4 rotate-[9deg]">
              <div className="w-full rounded-xl border border-zRed100 bg-white pl-4 py-3 shadow-[0px_4px_19.299999237060547px_0px_rgba(0,0,0,0.09)] ">
                <div className="flex flex-row items-center justify-start gap-4 ">
                  <div>
                    <div className="text-xl font-bold text-comet">800+</div>
                    <div className="text-xs font-medium text-slateGrey">
                      cities
                    </div>
                  </div>
                  <div className="justify-self-center self-center">
                    <img
                      className="max-h-10 w-auto object-fill"
                      src="https://b.zmtcdn.com/data/o2_assets/e7533c4081d6140da37b9f430cb7b8051743006192.png"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-1 row-start-3 w-[95%] -translate-y-7 translate-x-4 -rotate-2">
              <div className="w-full rounded-xl border border-zRed100 bg-white pl-4 py-3 shadow-[0px_4px_19.299999237060547px_0px_rgba(0,0,0,0.09)] ">
                <div className="flex flex-row items-center justify-start gap-4 ">
                  <div>
                    <div className="text-xl font-bold text-comet">
                      3 billion+
                    </div>
                    <div className="text-xs font-medium text-slateGrey">
                      orders delivered
                    </div>
                  </div>
                  <div className="justify-self-center self-center">
                    <img
                      className="max-h-10 w-auto object-fill"
                      src="https://b.zmtcdn.com/data/o2_assets/713443cc5944ce4284d7e49e75e2aacf1742466222.png"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky h-fit w-full snap-start sm:hidden top-[-40%]">
        <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-t-3xl bg-black bg-[url('https://b.zmtcdn.com/data/o2_assets/67960dbea89626613dfe59ebe00475011741697422.png')] bg-cover bg-center p-4 text-white">
          <div
            className="pointer-events-none absolute left-0 top-0 z-50 h-[calc(100%+40px)] w-full rounded-t-[23px] bg-slate-800 opacity-0 transition-opacity duration-300 ease-out will-change-[opactiy]"
            style={{ opacity: 0 }}
          ></div>
          <img
            loading="lazy"
            src="https://b.zmtcdn.com/data/o2_assets/6ecb2e1b4e412376645848c9c39098a81739521607.png"
            className="absolute left-0 top-12 size-20 transition-all duration-[1.5s] ease-out translate-x-0 translate-y-0 opacity-100"
          />
          <img
            loading="lazy"
            src="https://b.zmtcdn.com/data/o2_assets/eae1c0140168456506dca2736dc9b1c61742909660.png"
            className="absolute right-4 top-2 size-24 transition-all duration-[1.5s] ease-out translate-x-0 translate-y-0 opacity-100"
          />
          <img
            loading="lazy"
            src="https://b.zmtcdn.com/data/o2_assets/22c34e84a18aed26be7638c77e4e695b1742909865.png"
            className="absolute bottom-8 right-10 size-20 transition-all duration-[1.5s] ease-out translate-x-0 translate-y-0 opacity-100"
          />
          <img
            alt="cropwings logo"
            src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
            loading="lazy"
            width="100"
            height="100"
          />
          <span className="text-[20px] bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent">
            MAX
          </span>
          <div className="w-48 bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text pt-5 text-center text-sm font-normal text-transparent">
            India’s Top Savings Program for Crop Protection Services
          </div>
          <div className="flex items-end pt-8 h-fit">
            <div className="mr-2  ">
              <span
                className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-[8px]"
                style={{ fontFamily: "Wasabi" }}
              ></span>
            </div>
            <div className="w-max text-center text-[13px] font-medium leading-[14px] tracking-[2.6px]">
              Max BENEFITS
            </div>
            <div className="ml-2">
              <span
                className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-[8px]"
                style={{ fontFamily: "Wasabi" }}
              ></span>
            </div>
          </div>
          <div className="mt-10 flex w-full flex">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        {/* <div className="overflow-hidden" id="scroll-section">
          <div
            ref={sectionRef}
            className="relative mx-auto flex h-[28em] w-full max-w-[1880px] items-center justify-center rounded-t-3xl bg-white md:h-[40em] overflow-visible "
          >
            <div
              className="absolute top-[142px] flex flex-col items-center gap-6 2xl:gap-8 justify-center md:top-[240px]"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="text-heading whitespace-pre-line text-center font-semibold text-zRed500 ">
                Book Now
              </div>
            </div>
            <img
              src={LandingImg}
              alt="Left phone"
              className={`absolute top-10 left-10 w-60 h-1/1 transition-all duration-700 ${
                inView ? "animate-slide-in-left" : "opacity-0"
              }`}
            />

            <img
              src={NewOrderImg}
              alt="Right phone"
              className={`absolute top-10 right-10 w-60 h-1/1 transition-all duration-700 ${
                inView ? "animate-slide-in-right" : "opacity-0"
              }`}
            />

            <img
              src={OrderDetailsImg}
              alt="Bottom phone"
              className={`absolute bottom-0 left-1/1.2 -translate-x-1/2 w-60 h-1/2 transition-all duration-700 ${
                inView ? "animate-slide-in-bottom" : "opacity-0"
              }`}
            />
          </div>
        </div> */}
        <div className="overflow-hidden bg-white" id="scroll-section">
          <div
            ref={sectionRef}
            className="relative mx-auto flex flex-col-reverse md:flex-row items-center justify-between rounded-t-3xl px-6 py-12 md:py-24 max-w-[1880px] w-full"
          >
            {/* Left: Images */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full md:w-[70%]">
              <img
                src={LandingImg}
                alt="Left phone"
                className={`w-32 md:w-48 transition-all duration-700 ${
                  inView ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
                }`}
              />
              <img
                src={NewOrderImg}
                alt="Middle phone"
                className={`w-32 md:w-48 transition-all delay-200 duration-700 ${
                  inView ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
                }`}
              />
              <img
                src={OrderDetailsImg}
                alt="Right phone"
                className={`w-32 md:w-48 transition-all delay-400 duration-700 ${
                  inView ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
                }`}
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center items-start text-left w-full md:w-[30%] mt-10 md:mt-0">
              <h2 className="text-3xl md:text-5xl font-bold text-zRed500">
                Book Now
              </h2>
              <TypingText
                speed={100}
                text="Schedule your appointment in seconds.Fast, reliable, and tailored just for you!"
              />
            </div>
          </div>
        </div>

        <motion.div
          style={{
            background: "linear-gradient(0deg, #FFFFFF 0%, #d5e8ce 100%)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
          className="relative pt-20 mt-7 xl:mt-16 xl:pt-28 2xl:pt-36 2xl:mt-24 flex w-full flex-col items-center gap-16"
        >
          {/* First Row */}
          <div className="flex items-center gap-16 justify-center px-16">
            <motion.img
              src={FarmerImg}
              alt="farmer"
              width={400}
              height={400}
              style={{ borderRadius: "8px" }}
              variants={{
                hidden: { x: -200, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              variants={{
                hidden: { x: 200, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <ul className="text-left text-lg space-y-2">
                <li>Protect your crops in just a few clicks</li>
                <li>Save up to 30% on crop protection solutions</li>
                <li>Fast and affordable drone services at your fingertips</li>
                <li>Discover products designed exclusively for drones</li>
                <li>Get an early access to openmarket.ag</li>
              </ul>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex items-center gap-16 justify-center px-16">
            <motion.img
              src={DroneServiceImg}
              alt="drone-service"
              width={400}
              height={400}
              style={{ borderRadius: "8px" }}
              variants={{
                hidden: { x: -200, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              variants={{
                hidden: { x: 200, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <ul className="text-left text-lg space-y-2">
                <li>
                  Broaden your offerings and maximize revenue opportunities
                </li>
                <li>Unlock more income with additional service offerings</li>
              </ul>
              <div className="font-semibold pt-2">Pilot</div>
              <ul className="text-left text-lg space-y-2">
                <li>Receive local orders with ease</li>
                <li>Boost your spraying productivity</li>
                <li>Unlock extra income opportunities</li>
                <li>Maximize daily spray coverage</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        <div className="relative ">
          <div className="relative mb-14 flex w-screen flex-col items-center justify-center overflow-hidden bg-black px-10  py-[20vw] text-white xl:px-20 xl:py-72">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/e7a502b732de9cd0d5ceca82306137ca1743059837.png"
              className="absolute left-0 top-20 z-[99]  size-28 lg:size-36 xl:size-44 2xl:size-48 "
              style={{ opacity: 1, transform: "none" }}
            />
            <img
              src="https://b.zmtcdn.com/data/o2_assets/ef5bc22bc703882ccb11a5b75ad6704b1743059783.png"
              className="absolute right-4 top-[2%] z-[99] size-36 lg:size-44 xl:size-56 2xl:size-64  "
              style={{ opacity: 1, transform: "none" }}
            />
            <img
              src="https://b.zmtcdn.com/data/o2_assets/3658cc04dba86e5dfa2d99f070e1fc171743059861.png"
              className="absolute  z-[99] size-24 lg:size-28 xl:size-36 2xl:size-44 will-change-transform  bottom-[5vw] right-[20vw]  "
              style={{ opacity: 1, transform: "none" }}
            />
            <div className="flex w-fit flex-col  items-center justify-center gap-8 2xl:gap-16  ">
              <div className="flex  w-[45%] flex-col items-center justify-center gap-6">
                <div className="flex  w-[45%] flex-col items-center justify-center">
                  <img
                    alt="cropwings logo"
                    src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <span className="text-[26px] bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent">
                    MAX
                  </span>
                </div>
                <div className="text-subtitle  text-center font-normal bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent">
                  <div className="">India’s Top Savings</div>
                  <div className="">Program for Crop Protection Services</div>
                </div>
              </div>
              <div className="inline-flex  items-center justify-center gap-2 ">
                <div className="mb-1 mr-1">
                  <span className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-base leading-5"></span>
                </div>
                <div className=" text-subHeading tracking-[4px] text-center text-white">
                  <span>MAX BENEFITS</span>
                </div>
                <div className="mb-1">
                  <span className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-base leading-5"></span>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-10">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2 list-none">
                    <img
                      width={16}
                      height={16}
                      src={Star}
                      alt="Cropwings Star"
                    />
                    Special discounts on all products and services
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <img
                      width={16}
                      height={16}
                      src={Star}
                      alt="Cropwings Star"
                    />
                    Priority service with no surge pricing
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <img
                      width={16}
                      height={16}
                      src={Star}
                      alt="Cropwings Star"
                    />
                    Service availability guaranteed when you need it
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <img
                      width={16}
                      height={16}
                      src={Star}
                      alt="Cropwings Star"
                    />
                    Enjoy free cancellations and flexible rescheduling
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-1/2">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/f64b00427de0a6858432f039ef9e03731739364398.png"
                className="aspect-[2466/1089] w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/e80d61bfc77eb2ac157e9807ab021e7b1739365197.png"
                className="aspect-[2466/1089] w-full"
              />
            </div>
            <div className="absolute top-0 l-0 bg-white w-full h-[0px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="-380"
                  r="400"
                  fill="white"
                  stroke="white"
                ></circle>
              </svg>
            </div>
            <div className="l-0 absolute bottom-0 h-[0px] w-full rotate-180 bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="-380"
                  r="400"
                  fill="white"
                  stroke="white"
                ></circle>
              </svg>
            </div>
          </div>
          <div className="left-0 absolute -top-1 h-2 w-full rotate-180 bg-white"></div>
          <div className="left-0 absolute -bottom-1 h-2 w-full rotate-180 bg-white"></div>
        </div>
        <div className="relative mx-auto mb-16 w-[88%] bg-white py-10 xl:mb-40">
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
                    <img src={MobilePhone} loading="lazy" />
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
