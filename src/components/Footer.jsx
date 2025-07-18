import { Github, Linkedin } from "lucide-react"; // or use react-icons if preferred

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 px-6 py-4 bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

        {/* Left - Name and Tagline */}
        <div>
          <h4 className="font-bold text-white">Sarvam Patel</h4>
          <p className="mt-2">
            Passionate web developer who loves building <span className="text-purple-400 font-semibold">fast</span> and <span className="text-purple-400 font-semibold">accessible</span> digital products.
          </p>
        </div>

        {/* Middle - Design Credit */}
        <div>
          <h4 className="font-bold text-white">Design</h4>
          <p className="mt-2">
            Inspired by{" "}
            <a
              href="https://www.rammaheshwari.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Ram Maheshwari
            </a>
            's website.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="font-bold text-white">Social</h4>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/CoreTech7704" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-purple-400" />
            </a>
            <a href="https://linkedin.com/in/sarvam-patel" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-purple-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom © line */}
      <p className="mt-4 text-center text-xs text-gray-400">
        © Copyright {new Date().getFullYear()}. Made by Sarvam Patel.
      </p>
    </footer>
  );
};

export default Footer;
