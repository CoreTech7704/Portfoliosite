// src/components/Certifications.jsx
import React from "react";

const certifications = [
  {
    id: 1,
    title: "React Developer Internship",
    issuer: "Krtya Technologies Pvt. Ltd.",
    date: "July 2025",
    certificateURL: "https://example.com/krtya-certificate",
  },
  {
    id: 2,
    title: "Full Stack Web Development Internship",
    issuer: "Eduskill India",
    date: "June 2025",
    certificateURL: "https://example.com/eduskill-certificate",
  },
  {
    id: 3,
    title: "AI/ML for Geodata analysis",
    issuer: "Indian Institute of Remote Sensing (IIRS)",
    date: "August 2024",
    certificateURL: "https://example.com/nptel-certificate",
  },
  {
    id: 4,
    title: "Android Developer Internship",
    issuer: "Google For Developers",
    date: "April 2024",
    certificateURL: "https://example.com/nptel-certificate",
  },
  {
    id: 5,
    title: "Web Developer Internship",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "March 2024",
    certificateURL: "https://example.com/nptel-certificate",
  },
];

const Certifications = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-20 mt-24" id="certifications">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Certifications</h2>
        <div className="h-1 w-55 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-zinc-900 p-6 rounded-xl border border-purple-700 hover:shadow-purple-500/20 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-1">
              {cert.title}
            </h3>
            <p className="text-gray-300">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
            <a
              href={cert.certificateURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline text-sm"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
