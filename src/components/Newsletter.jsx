import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.div
      id="newsletter"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white py-16 mt-20"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Stay Updated with{" "}
          <span className="text-yellow-300">GameHub</span> 🎮
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-white/90 mb-8"
        >
          Subscribe to our newsletter and get the latest game updates,
          exclusive deals, and developer insights delivered to your inbox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg text-yellow-300 border"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Subscribe
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mt-10 text-2xl"
        >
          {["facebook", "twitter", "discord"].map((icon) => (
            <motion.a
              key={icon}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-yellow-300 transition-colors duration-200 text-red-500"
            >
              <i className={`fa-brands fa-${icon}`}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
