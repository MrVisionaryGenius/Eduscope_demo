import HeroImg1 from "../assets/HeroImg1.jpeg";
import HeroImg2 from "../assets/HeroImg2.jpeg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl text-[#004AAD] sm:text-6xl lg:text-7xl text-center tracking-wide relative">
        <span className="relative z-10">EduScope the Automation tool</span>
        <span className="bg-gradient-to-r from-[#004AAD] to-[#004AAD] text-transparent bg-clip-text relative z-10">
          {" "}
          for Education Recruiters
        </span>
        <span
          className="absolute inset-0 text-black z-0"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000",
          }}
          aria-hidden="true" // this makes sure screen readers ignore this span
        >
          EduScope the Automation tool for Education Recruiters
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        You never know how much time you can save, until you discover an
        automation that saves your time.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r text-[#101720] from-[#004AAD] to-[#004AAD] py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 text-[#101720] px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src={HeroImg1}
          alt="HeroImage"
          className="rounded-lg w-1/2 border border-[#004AAD] shadow-sm shadow-[#004AAD] mx-2 my-4"
        >
        </img>
        <img
        src={HeroImg2}
          alt="HeroImage"
          className="rounded-lg w-1/2 border border-[#004AAD] shadow-sm shadow-[#004AAD] mx-2 my-4"
        >
        </img>
      </div>
    </div>
  );
};

export default HeroSection;
