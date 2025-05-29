// Refactored Teats.tsx - Responsive Design Unified
import { useEffect, useRef, useState } from "react";
import LandingImg from "./assets/Landing.jpg";
import NewOrderImg from "./assets/New Order.jpg";
import OrderDetailsImg from "./assets/OrderDetails.jpg";

export default function Test() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div className="font-our-lexend">
      {/* Header Section */}
      <section
        className="relative flex flex-col sm:flex-row items-center justify-between bg-black text-white px-6 py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://b.zmtcdn.com/data/o2_assets/67960dbea89626613dfe59ebe00475011741697422.png')",
        }}
      >
        <div className="max-w-md text-center sm:text-left">
          <img
            alt="Logo"
            src="https://www.cropwings.com/_next/image?url=%2Fwhite.png&w=384&q=75"
            className="mx-auto sm:mx-0 w-36 mb-6"
          />
          <h1 className="text-2xl sm:text-4xl font-semibold mb-4">
            India’s #1 for crop protection services
          </h1>
          <a
            href="https://zomato.onelink.me/xqzv/8rusaoio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-xl bg-zRed_red px-6 py-3 text-white text-sm font-medium"
          >
            Order on app
          </a>
        </div>
        <div className="hidden sm:flex space-x-6">
          <img
            src={LandingImg}
            alt="Landing"
            className={`w-32 transition-opacity duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={NewOrderImg}
            alt="Order"
            className={`w-32 transition-opacity duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={OrderDetailsImg}
            alt="Details"
            className={`w-32 transition-opacity duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-center px-6 py-20">
        <h2 className="text-2xl sm:text-4xl font-semibold text-zRed500 mb-4">
          What’s waiting for you on the app?
        </h2>
        <p className="text-sm sm:text-base text-comet mb-10 max-w-xl mx-auto">
          Our app is packed with features that enable you to experience food
          delivery like never before
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            [
              "Veg Mode",
              "https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png",
            ],
            [
              "Healthy",
              "https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png",
            ],
            [
              "Plan a Party",
              "https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png",
            ],
            [
              "Offers",
              "https://b.zmtcdn.com/data/o2_assets/813952c961fd13588cb71867d84ea7dc1742455815.png",
            ],
            [
              "Food on Train",
              "https://b.zmtcdn.com/data/o2_assets/06d090307e02772693ac06123b53459b1742455939.png",
            ],
            [
              "Gourmet",
              "https://b.zmtcdn.com/data/o2_assets/6e27c9acde6045c272a28e6eb275727e1742455789.png",
            ],
          ].map(([title, src]) => (
            <div
              key={title}
              className="flex flex-col items-center justify-start p-4 border rounded-xl shadow-sm bg-white"
            >
              <img src={src} alt={title} className="w-12 h-12 mb-2" />
              <p className="text-xs sm:text-sm font-normal text-darkSlateGrey text-center">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRef}
        className="bg-zRed100 py-20 flex flex-col items-center justify-center"
      >
        <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-center text-darkSlateGrey">
          Book Now
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <img
            src={LandingImg}
            alt="Left phone"
            className={`w-48 transition-all duration-700 ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
          />
          <img
            src={NewOrderImg}
            alt="Right phone"
            className={`w-48 transition-all duration-700 ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
          />
          <img
            src={OrderDetailsImg}
            alt="Bottom phone"
            className={`w-48 transition-all duration-700 ${
              inView ? "animate-slide-in-bottom" : "opacity-0"
            }`}
          />
        </div>
      </section>
    </div>
  );
}
