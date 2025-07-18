const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-purple-400">Contact Information</h3>
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
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Send a Message</h3>
          <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <label className="text-sm text-white">Title | Name</label>
              <input type="text" name="name" required className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white ring-2 ring-stone-500 focus:outline-none focus:ring-purple-600" />
            </div>
            
            <div>
              <label className="text-sm text-white">Your Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white ring-2 ring-stone-500 focus:outline-none focus:ring-purple-600" />
            </div>

            <div>
              <label className="text-sm text-white">Your Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white ring-2 ring-stone-500 focus:outline-none focus:ring-purple-600"></textarea>
            </div>

            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
