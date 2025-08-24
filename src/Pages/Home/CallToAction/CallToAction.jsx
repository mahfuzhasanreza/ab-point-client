// CallToAction.jsx
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-6 text-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold sm:text-5xl mb-6"
        >
          Ready to Take the Next Step?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/90 mb-8"
        >
          Join thousands of professionals who are already growing with us. Don’t
          miss your chance to make an impact today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            Get Started
          </button>

        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;