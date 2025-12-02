import React from "react";
import { motion } from "framer-motion";
import { features } from "../data/LandingPageData";

const ChooseUs = () => {
  return (
    <div className="py-12 md:py-[90px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow text-center hover:scale-105 transition-transform"
            >
              <img
                src={feat.icon}
                alt={feat.title}
                className="mx-auto mb-3 w-12 h-12"
              />
              <h3 className="font-semibold text-lg mb-2">{feat.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
