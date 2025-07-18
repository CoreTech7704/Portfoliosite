const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-zinc-950 text-white"
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
      <div className="absolute bottom-6 animate-bounce"> 
        <a href="#about" aria-label="Scroll down">
          <svg
            className="w-6 h-6 text-purple-500 hover:text-purple-500 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
