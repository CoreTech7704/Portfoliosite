const Footer = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-20 mt-24" id="certifications"> 
      <footer className="text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Sarvam Patel. Built with React & Tailwind CSS.
      </footer>
    </section>
  );
};

export default Footer;
