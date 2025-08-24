import React from "react";
import { MessageCircle, FileText, Briefcase, Trophy } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Free Consultation",
    description:
      "Book a session with our experts to understand your goals and explore opportunities.",
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    bg: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "Document Preparation",
    description:
      "We guide you step-by-step in preparing all necessary documents with accuracy.",
    icon: <FileText className="w-8 h-8 text-white" />,
    bg: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    title: "Visa & Business Setup",
    description:
      "Our team ensures smooth processing of visas and business registrations abroad.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    bg: "from-green-500 to-green-700",
  },
  {
    id: 4,
    title: "Success & Ongoing Support",
    description:
      "We stay with you even after setup — offering continuous support for your success.",
    icon: <Trophy className="w-8 h-8 text-white" />,
    bg: "from-yellow-500 to-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It <span className="text-blue-600">Works</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A simple 4-step process designed to make your international journey smooth and hassle-free.
        </p>

        {/* Steps Timeline */}
        <div className="mt-16 relative">
          <div className="absolute hidden md:block top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 text-center relative"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r ${step.bg} shadow-md mb-6 group-hover:scale-110 transform transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white border border-blue-500 text-blue-600 font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
