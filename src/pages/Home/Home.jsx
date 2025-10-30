import bgImg from "@/assets/images/content-bg2.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat bg-fixed overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[759px] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1400"
            className="max-w-full text-white text-4xl sm:text-5xl md:text-6xl font-bold font-unbounded leading-normal sm:leading-relaxed md:leading-loose [text-shadow:_0px_2px_10px_rgb(0_0_0_/_0.25)] mb-8 sm:mb-11"
          >
            The Radical Commons launches soon. <br />
            Sign up to be in the know of what's cooking!
          </p>

          <Link
            to="http://10.10.13.12:5173/signup"
            className="w-full sm:w-80 h-12 sm:h-14 px-6 sm:px-8 py-2 sm:py-3 bg-[#F6FF1F] text-black text-base sm:text-2xl font-medium font-unbounded"
          >
            Sign up
          </Link>
        </div>
      </section>
    </div>
  );
}
