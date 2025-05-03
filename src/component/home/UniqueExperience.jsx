import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {unique_experiences as experiences} from '../../api/data'
import { useNavigate } from "react-router-dom";
export default function UniqueExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  md:flex  py-8  overflow-hidden">
      <div className="relative flex flex-col p-8 rounded-r-lg  bg-gray-900 w-full  md:w-1/3 mr-2">
        <div className="absolute top-0 left-0 w-24 h-full">
          <div className="h-full w-full opacity-20">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex my-2">
                  {Array(6)
                    .fill(0)
                    .map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-2 rounded-full bg-gray-300 mx-1"
                      />
                    ))}
                </div>
              ))}
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">
          UNIQUE EXPERIENCES
        </h2>
        <div className="w-12 h-1 bg-white mb-4"></div>
        <p className="text-white mb-8">
          Try something new with our curated selection of experiences.
        </p>

        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 border border-gray-400 text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 border border-gray-400 text-white"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex space-x-6 overflow-hidden w-full md:w-2/3">
        {experiences.slice(currentIndex, currentIndex + 3).map((experience) => (
          <div
            key={experience.id}
            onClick={()=>navigate(`/destinations/unique_experiences/${experience.id}`)}
            className="w-full sm:w-1/3 rounded-lg overflow-hidden relative cursor-pointer transition-all hover:opacity-90"
          >
            <img
                 src={`/images/unique_experiences/${experience.title.replaceAll(
                  " ",
                  "_"
                )}/000001.jpg`}
              alt={`Unique Experience ${experience.id}`}
              className="absolute w-full h-full inset-0 opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                {experience.location && (
                  <p className="text-white text-sm mb-2">
                    {experience.location}
                  </p>
                )}
              </div>
              <h5 className="text-white text-md">{experience.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
