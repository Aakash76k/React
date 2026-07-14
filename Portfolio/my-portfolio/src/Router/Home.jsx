import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold">
            Hello, I'm <span className="text-purple-500">Aakash</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            A passionate Frontend Developer with a keen eye for design and a
            love for creating beautiful, responsive and user-friendly web
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View About
            </Link>

            <Link
              to="/post"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
            >
              Read Posts
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/tech-background.svg"
            alt="Tech Background"
            className="w-full max-w-md hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;