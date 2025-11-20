import bgImg from "@/assets/images/Home2.png";
import logo from "@/assets/images/logo-2.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[759px] flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6 lg:py-9 w-full flex justify-start">
          <img
            src={logo}
            alt=""
            className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-[405px]"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-[20px] sm:gap-[24px] md:gap-[30px] mt-6 sm:mt-9 px-4">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1400"
            className="text-center text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] md:text-[64px] md:leading-[76px] lg:text-[80px] lg:leading-[96px] font-unbounded font-extrabold text-[#FF39B0] [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            We are building <br />
            <span className="text-[#FFF]">Our Commons</span> <br />
            <span className="text-[#FF80EB]">for our Liberation</span>
          </p>

          <p className="w-full max-w-[300px] sm:max-w-[480px] md:max-w-[653px] text-center text-gray-300 text-[16px] sm:text-[18px] md:text-[20px] lg:text-2xl font-normal font-unbounded leading-7 sm:leading-8 md:leading-9 mb-6">
            The Radical Commons launches soon.
            <br />
            Sign up to be in the know of what’s cooking!
          </p>
        </div>

        <Link
          to="http://10.10.13.12:5173/signup"
          className="w-full sm:w-80 max-w-xs sm:max-w-none h-12 sm:h-14 px-4 sm:px-8 bg-yellow-300 border-stone-100 inline-flex justify-center items-center gap-2.5 mt-4 sm:mt-6 rounded"
        >
          <div className="text-center text-black text-[16px] sm:text-2xl font-medium font-unbounded">
            Sign up
          </div>
        </Link>
      </section>
    </div>
  );
}
