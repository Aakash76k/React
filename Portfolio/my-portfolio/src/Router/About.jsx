import AboutImg from "../../public/photos/about.jpg";

const About = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen py-20 transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>

            <p
              className={`mt-8 text-xl leading-10 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Hi, I'm{" "}
              <span
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Aakash
              </span>
              , a passionate Frontend Developer focused on creating modern,
              responsive and user-friendly web applications using React,
              Tailwind CSS and JavaScript.
              <br />
              <br />
              I enjoy learning new technologies, solving real-world problems
              and building clean interfaces that deliver a great user
              experience.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "React Router",
                "Git",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-5 py-2 rounded-full ${
                    darkMode
                      ? "bg-neutral-800 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={AboutImg}
              alt="About"
              className="rounded-2xl w-[300px] h-[320px] object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-20 mt-28">
          {/* Experience */}
          <div>
            <h2 className="text-4xl font-bold mb-12">Experience</h2>

            <div
              className={`relative ml-8 border-l ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              {[
                {
                  year: "2025 - Present",
                  role: "Frontend Developer",
                  company: "Freelancer",
                  desc: "Building responsive websites using React, Tailwind CSS, JavaScript and modern frontend technologies.",
                },
                {
                  year: "2024 - 2025",
                  role: "React Developer",
                  company: "Personal Projects",
                  desc: "Created portfolio websites, React applications and modern responsive UI projects.",
                },
                {
                  year: "2023 - 2024",
                  role: "MERN Stack Learner",
                  company: "Self Learning",
                  desc: "Learned HTML, CSS, JavaScript, React, Node.js, Express and MongoDB while building projects.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-16 ${
                    index !== 2 ? "pb-16" : ""
                  }`}
                >
                  <div
                    className={`absolute -left-8 top-0 w-16 h-16 rounded-full border flex items-center justify-center text-2xl ${
                      darkMode
                        ? "bg-black border-gray-700"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {"</>"}
                  </div>

                  <p
                    className={
                      darkMode ? "text-gray-500" : "text-gray-600"
                    }
                  >
                    {item.year}
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {item.role}
                  </h3>

                  <h4 className="text-2xl mt-1">
                    {item.company}
                  </h4>

                  <p
                    className={`mt-3 text-lg ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-4xl font-bold mb-12">
              Let's Connect
            </h2>

            <p
              className={`text-2xl leading-10 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Feel free to reach out if you want to collaborate or just say hi!
              You can contact me through email or social media.
            </p>

            <div
              className={`mt-10 space-y-5 text-xl ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              <p>📧 aakash@example.com</p>
              <p>💻 github.com/Aakash76k</p>
              <p>💼 linkedin.com/in/aakash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;