import { ChevronDown, ArrowDownCircle, MousePointerClick } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center bg-zinc-950 text-white"
    >
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-6 leading-tight">
        Hey, I'm Sarvam
      </h1>

      <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-8">
        <span className="text-purple-400">Web Developer</span> who{" "}
        <span className="text-purple-400">enjoys</span> building{" "}
        <span className="text-purple-400">fast</span> and{" "}
        <span className="text-purple-400">accessible</span> digital products.
      </p>

      <a
        href="#about"
        className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transform transition-transform duration-200 ease-out hover:-translate-y-1"
      >
        About Me
      </a>

      {/* Scroll Down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-purple-500 hover:text-purple-700 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
