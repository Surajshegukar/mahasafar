import React from "react";
import beach from "../../assets/beach.jpg";
import forts from "../../assets/forts.jpg";
import temples from "../../assets/temple.jpg";

export default function Blogs() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12 text-slate-700">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-medium">
            BLOGS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600">
            Explore the World with Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Discover the most popular destinations and hidden gems around the
            globe.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Blog 1 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <img
            src={beach}
            alt="Blog 1"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-medium text-slate-700">Blog Title 1</h3>
          <p className="text-slate-600">
            Discover the breathtaking landscapes and rich culture of this
            destination.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <img
            src={forts}
            alt="Blog 2"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-medium text-slate-700">Blog Title 2</h3>
          <p className="text-slate-600">
            Explore the hidden gems and local experiences that make this place
            unique.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <img
            src={temples}
            alt="Blog 3"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-medium text-slate-700">Blog Title 3</h3>
          <p className="text-slate-600">
            Uncover the secrets of this destination and plan your next
            adventure.
          </p>
        </div>
      </div>
      </div>

      
    </div>
  );
}
