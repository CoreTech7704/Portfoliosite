const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex flex-col items-center bg-zinc-950 text-white"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400">
          About Me
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          I'm <span className="font-semibold text-white">Sarvam Patel</span>, a passionate web developer who loves crafting <span className="text-purple-400">modern</span> and <span className="text-purple-400">accessible</span> web experiences. 
          I specialize in front-end technologies like <span className="text-purple-400">React</span> and <span className="text-purple-400">Tailwind CSS</span>, and I'm constantly learning to become a full-stack developer.
        </p>

        <p className="text-lg sm:text-xl text-gray-400">
          I believe in building fast, responsive, and user-friendly digital products that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
