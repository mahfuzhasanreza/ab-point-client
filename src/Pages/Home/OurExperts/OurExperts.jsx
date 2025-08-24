// src/Pages/Home/OurExperts/OurExperts.jsx
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const experts = [
  {
    name: "Dr. Ayesha Rahman",
    role: "Clinical Psychologist",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Imran Hossain",
    role: "Nutrition Specialist",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Ahmed",
    role: "Therapist",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Tanvir Khan",
    role: "Life Coach",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const OurExperts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Meet Our <span className="text-blue-600">Experts</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Our team of certified professionals is here to guide you in every step of your mental health and self-development journey.
        </motion.p>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {expert.name}
                </h3>
                <p className="text-blue-600 text-sm">{expert.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={expert.socials.linkedin} className="text-gray-600 hover:text-blue-700 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href={expert.socials.twitter} className="text-gray-600 hover:text-sky-500 transition">
                    <Twitter size={20} />
                  </a>
                  <a href={expert.socials.github} className="text-gray-600 hover:text-gray-900 transition">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurExperts;