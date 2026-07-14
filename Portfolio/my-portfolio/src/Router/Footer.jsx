import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-black">Aakash</h2>
          <p className="text-black-400 text-sm mt-1">
            Frontend Developer | React Developer
          </p>
          <h1 className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
            Aakash. All Rights Reserved.
          </h1>
        </div>

        <div className="flex gap-6 text-black-400">
          <a
            href="https://github.com/Aakash76k"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="aakash76k747@gmail.com"
            className="hover:text-black transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
