import Image1 from "../../public/photos/img1.jpg";
import Image2 from "../../public/photos/img2.jpg";
import Image3 from "../../public/photos/img3.png";

const Project = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-5xl font-bold ">Our Projects</h1>

        <p className="mt-6 text-lg text-gray-400 leading-8 ">
          Here you can showcase your best work. Each project should include a
          brief description, the technologies used, and any notable
          achievements. This helps potential clients or employers understand
          your capabilities.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
            <img
              src={Image1}
              alt="Project 1"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">Project 1</h2>

              <p className="text-gray-400 mt-3">
                A breif discxription of your 1st project....... 
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
            <img
              src={Image2}
              alt="Project 2"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">Project 2</h2>

              <p className="text-gray-400 mt-3">
                Describe your second project here...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
            <img
              src={Image3}
              alt="Project 3"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">Project 3</h2>

              <p className="text-gray-400 mt-3">
                Share details about your third project...
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;