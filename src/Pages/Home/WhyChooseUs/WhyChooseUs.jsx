import React from "react";
import { ShieldCheck, Globe2, Clock, Award } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Trusted Consultancy",
    description:
      "We provide reliable and transparent guidance for individuals and businesses worldwide.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    bg: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "Global Reach",
    description:
      "Our services extend across Asia and the Middle East, connecting you with international opportunities.",
    icon: <Globe2 className="w-8 h-8 text-white" />,
    bg: "from-green-500 to-green-700",
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available anytime to answer questions and resolve concerns.",
    icon: <Clock className="w-8 h-8 text-white" />,
    bg: "from-purple-500 to-purple-700",
  },
  {
    id: 4,
    title: "Proven Success",
    description:
      "Hundreds of clients have achieved their goals through our step-by-step process and expertise.",
    icon: <Award className="w-8 h-8 text-white" />,
    bg: "from-yellow-500 to-orange-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-blue-600">AB Point</span>?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We stand out with our commitment to excellence, international
          expertise, and client-first approach.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${reason.bg} shadow-md mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {reason.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-800">
                {reason.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">{reason.description}</p>

              {/* Decorative bottom bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
