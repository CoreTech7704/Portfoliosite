const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "SQL", "React", "Vite", "Tailwind CSS",
    "Java", "C", "Node.js", "SEO", "C++", "API", "Python", "Git", "GitHub", "Bootstrap"
  ];

  const softSkills = [
  "Leadership", "Decision Making", "Problem Solving", "Time Management",
  "Adaptability", "Creativity", "Self-Motivation", "Communication", "Resilience", "Strategic Thinking"
  ];


  return (
    <section
      id="about"
      className="min-h-screen px-6 py-15 bg-zinc-950 text-white flex flex-col items-center"
    >
      {/* Section Title with underline */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-40 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mx-auto" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-400 mb-4">
            Get to know me better
          </h3>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
            I'm <span className="font-bold text-white">Sarvam Patel</span>, a passionate front-end web developer dedicated to building fast, responsive, and interactive websites. 
            I love solving real-world problems and bringing ideas to life using modern technologies like <span className="text-purple-400">React</span>, <span className="text-purple-400">JavaScript</span>, and <span className="text-purple-400">Tailwind CSS</span>.
            <br />
            <br />
            My long-term vision is to become a <span className="text-purple-400 font-semibold">skilled full-stack developer</span>, mastering both front-end and back-end development to build complete, scalable web applications.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition"
          >
            My Projects
          </a>
        </div>

        {/* Right side - Skills + Soft Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-400 mb-4">My Toolkit</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-purple-600 hover:shadow-[0_0_10px_#a855f7] transition text-m"
              >
                {skill}
              </span>
            ))}
          </div>

          <h4 className="text-2xl font-semibold text-purple-400 mb-3">Soft Skills</h4>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-zinc-800 text-white rounded-full border border-purple-500 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
