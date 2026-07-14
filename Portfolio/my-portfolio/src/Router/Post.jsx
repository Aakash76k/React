import React from "react";
import Image4 from "../../public/photos/img4.jpg"

const Post = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-bold text-5xl text-white">Blog Posts</h1>
      </div>

      {/* cards Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 gap-8 mt-16 p-35">

        {/* card1 */}

        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 w-300 p-5">
                    <img
                      src={Image4}
                      alt="Project 1"
                      className="w-50 h-50 object-cover "
                    />
        
                    <div className="p-6">
                      <h2 className="text-2xl font-bold">Docker basic for developer ..</h2>
        
                      <p className="text-gray-400 mt-3">
                       Learn the fundamentasl docer and containerization.. 
                      </p>
                    </div>
                  </div>

       </div>


    </div>
  );
};

export default Post;
