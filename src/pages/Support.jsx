import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Support() {

  const inputVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.05, backgroundColor: '#4f46e5', transition: { type: 'spring', stiffness: 300 } },
};

  return (
    <div className="min-h-screen px-6 lg:px-20 py-16 bg-gray-50 dark:bg-gray-900">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Support</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Need help or have questions? Our support team is here to assist you with
          any inquiries regarding your gaming experience, account, or purchases.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Reach us via email and we'll respond within 24 hours.</p>
          <a href="mailto:support@gamehub.com" className="text-indigo-600 font-medium">support@gamehub.com</a>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Chat directly with our support team in real-time.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md "><Link to='/chat'>Start Chat</Link></button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">FAQ</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Browse frequently asked questions and find quick answers.</p>
          <a href="/faq" className="text-indigo-600 font-medium">Visit FAQ</a>
        </div>
      </motion.div>
<motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
      variants={{
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="text-2xl font-semibold mb-6 text-center"
        variants={inputVariants}
      >
        Send us a Message
      </motion.h2>
      <motion.form className="space-y-4">
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md"
          variants={inputVariants}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md"
          variants={inputVariants}
        />
        <motion.textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-2 border rounded-md"
          variants={inputVariants}
        />
        <motion.button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md transition cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
    </div>
  );
}