import React from "react";
import { motion } from "framer-motion";
import { categories } from "../data/LandingPageData";

const CategoryCard = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Categories</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition-transform text-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="mx-auto mb-3 w-20 h-20 rounded-full"
              />
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryCard;
