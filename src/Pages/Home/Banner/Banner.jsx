import React from "react";
import { Globe2, Briefcase, Trophy } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Asia Based Services",
    subtitle: "Malaysia • Singapore • Thailand",
    description: "Explore business and work opportunities across Asia with trusted support.",
    icon: <Globe2 className="w-8 h-8 text-white" />,
    bg: "from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "Qatar Based Services",
    subtitle: "Work Visa • Business Setup",
    description: "Reliable consultancy for visas, business registration, and expansion in Qatar.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    bg: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    title: "Success Stories",
    subtitle: "Proven Track Record",
    description: "Hundreds of clients achieved their international goals through AB Point.",
    icon: <Trophy className="w-8 h-8 text-white" />,
    bg: "from-yellow-500 to-orange-600",
  },
];

const Banner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {/* Hero Text */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Your Gateway to <span className="text-yellow-400">International Opportunities</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          From Asia to the Middle East, AB Point provides end-to-end services that ensure your journey to success.
        </p>
        <div className="mt-8">
          <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${item.bg} shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-blue-600 font-medium mt-1">{item.subtitle}</p>
            <p className="text-gray-600 mt-3">{item.description}</p>
            <button className="mt-6 text-blue-700 font-semibold hover:underline">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
