import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden" id="contact">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or want to work with us? Reach out via the form, phone, or email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: <Phone size={24} />,
                title: "Phone",
                info: "+880 1XXX-XXXXXX",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Mail size={24} />,
                title: "Email",
                info: "info@abpoint.com",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: <MapPin size={24} />,
                title: "Address",
                info: "Dhaka, Bangladesh",
                color: "bg-pink-100 text-pink-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl transition"
              >
                <div className={`p-3 rounded-full ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">{item.title}</h4>
                  <p className="text-gray-600 mt-1">{item.info}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl transition space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none bg-white/70 backdrop-blur-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none bg-white/70 backdrop-blur-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none bg-white/70 backdrop-blur-sm"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none bg-white/70 backdrop-blur-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-2xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
