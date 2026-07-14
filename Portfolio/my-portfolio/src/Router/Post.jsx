import Image4 from "../../public/photos/img4.jpg";
import Image5 from "../../public/photos/img5.jpg";
import Image6 from "../../public/photos/img6.jpg";
import Image7 from "../../public/photos/img7.jpg";

const Post = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen py-20 transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-bold">Blog Posts</h1>

        {/* All Cards */}
        <div className="mt-16 space-y-10">

          {/* Card 1 */}
          <div
            className={`rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:border transition ${
              darkMode
                ? "bg-neutral-900 hover:border-gray-700"
                : "bg-gray-100 hover:border-gray-300"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-4xl font-bold">
                Docker Basics for Developers
              </h2>

              <p
                className={`mt-5 text-xl ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Learn the fundamentals of Docker and containerization.
              </p>

              <div
                className={`flex gap-6 mt-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>📅 2024-03-20</span>
                <span>⏱ 5 min read</span>
              </div>
            </div>

            <img
              src={Image4}
              alt="Docker"
              className="w-full md:w-80 h-56 object-cover rounded-xl"
            />
          </div>

          {/* Card 2 */}
          <div
            className={`rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:border transition ${
              darkMode
                ? "bg-neutral-900 hover:border-gray-700"
                : "bg-gray-100 hover:border-gray-300"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-4xl font-bold">
                React Router Guide
              </h2>

              <p
                className={`mt-5 text-xl ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Understand React Router from beginner to advanced.
              </p>

              <div
                className={`flex gap-6 mt-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>📅 2024-04-15</span>
                <span>⏱ 7 min read</span>
              </div>
            </div>

            <img
              src={Image5}
              alt="React"
              className="w-full md:w-80 h-56 object-cover rounded-xl"
            />
          </div>

          {/* Card 3 */}
          <div
            className={`rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:border transition ${
              darkMode
                ? "bg-neutral-900 hover:border-gray-700"
                : "bg-gray-100 hover:border-gray-300"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-4xl font-bold">
                Tailwind CSS Tips
              </h2>

              <p
                className={`mt-5 text-xl ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Improve your UI faster with Tailwind CSS utility classes.
              </p>

              <div
                className={`flex gap-6 mt-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>📅 2024-05-10</span>
                <span>⏱ 6 min read</span>
              </div>
            </div>

            <img
              src={Image6}
              alt="Tailwind"
              className="w-full md:w-80 h-56 object-cover rounded-xl"
            />
          </div>

          {/* Card 4 */}
          <div
            className={`rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:border transition ${
              darkMode
                ? "bg-neutral-900 hover:border-gray-700"
                : "bg-gray-100 hover:border-gray-300"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-4xl font-bold">
                Modern JavaScript ES6+
              </h2>

              <p
                className={`mt-5 text-xl ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Learn the latest JavaScript features with real-world examples.
              </p>

              <div
                className={`flex gap-6 mt-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>📅 2024-06-18</span>
                <span>⏱ 8 min read</span>
              </div>
            </div>

            <img
              src={Image7}
              alt="JavaScript"
              className="w-full md:w-80 h-56 object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Post;