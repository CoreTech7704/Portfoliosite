const Contact = () => {
  return (
    <section id="contact" className="py-15 px-4 text-white bg-[#0f0f0f]">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
        <div className="h-1 w-48 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mx-auto" />
        <p className="text-gray-400 mt-6 text-lg">
          Let’s connect — I’m always open to discussing projects, opportunities, or just a quick chat!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 bg-[#1a1a1a] p-8 rounded-2xl ring-1 ring-purple-500 shadow-md">
          <h3 className="text-2xl font-semibold text-purple-400">📬 Contact Information</h3>
          <p className="text-gray-300">Reach me directly via the info below:</p>
          <div className="space-y-3 text-gray-300">
            <p><span className="font-semibold">📍 Location:</span> Bharuch, Gujarat, India</p>
            <p><span className="font-semibold">📞 Phone:</span> +91 9638309943</p>
            <p><span className="font-semibold">📧 Email:</span> <a href="mailto:sarvampatel953@gmail.com" className="text-blue-400 hover:underline">sarvampatel953@gmail.com</a></p>
            <p><span className="font-semibold">🔗 GitHub:</span> <a href="https://github.com/CoreTech7704" target="_blank" className="text-blue-400 hover:underline">CoreTech7704</a></p>
            <p><span className="font-semibold">🔗 LinkedIn:</span> <a href="https://linkedin.com/in/sarvam-patel" target="_blank" className="text-blue-400 hover:underline">Sarvam Patel</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl ring-1 ring-purple-500 shadow-md">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">📨 Send a Message</h3>
          <form name="contact" method="POST" data-netlify="true" className="space-y-5">
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="text-sm text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition duration-200 text-white py-2 px-6 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
