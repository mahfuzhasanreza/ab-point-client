import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your platform provide?",
    answer:
      "We provide expert guidance, mental health support, and self-development resources to help you grow.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "You can easily book a consultation through our booking system and connect with experts in real-time.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes, your privacy is our top priority. All your data is kept safe and confidential.",
  },
  {
    question: "Can I cancel or reschedule a session?",
    answer:
      "Yes, you can reschedule or cancel with proper notice through your account dashboard.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Click on a question below to see the answer. Our FAQs help you understand how our services work.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={{ borderRadius: 16 }}
              whileHover={{ scale: 1.02 }}
              className={`overflow-hidden rounded-2xl shadow-md ${
                openIndex === index
                  ? "border-l-4 border-blue-600"
                  : "border-l-0"
              } bg-white`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-lg font-medium text-gray-800 cursor-pointer"
              >
                {faq.question}
                <motion.span
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    y: openIndex === index ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-gray-500"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="px-5 pb-5 text-gray-600 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;