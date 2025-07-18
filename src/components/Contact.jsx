const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-400">Contact Information</h3>
          <p className="text-gray-300">
            Feel free to reach out through any of the platforms below!
          </p>
          <div className="space-y-3">
            <p><strong>📍 Location:</strong> Ankleshwar, Gujarat, India</p>
            <p><strong>📞 Phone:</strong> +91 9638309943</p>
            <p><strong>📧 Email:</strong> <a href="mailto:sarvampatel953@gmail.com" className="text-blue-400 hover:underline">sarvampatel953@gmail.com</a></p>
            <p><strong>🔗 GitHub:</strong> <a href="https://github.com/CoreTech7704" target="_blank" className="text-blue-400 hover:underline">CoreTech7704</a></p>
            <p><strong>🔗 LinkedIn:</strong> <a href="https://linkedin.com/in/sarvam-patel" target="_blank" className="text-blue-400 hover:underline">Sarvam Patel</a></p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send a Message</h3>
          <form action="https://formspree.io/f/xzbldjwk" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" required
                className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" required
                className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows="5" required
                className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
