import { motion } from "framer-motion";
import { reviews, team } from "../data/AboutData";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

export default function AboutPage() {
  return (
    <div className="px-6 lg:px-20 py-16 space-y-20">
      
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={sectionVariants}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">About GameHub</h1>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          GameHub is your all-in-one gaming marketplace where players explore, compare, and discover the best games. Our goal is to make gaming easier, more fun, and more accessible for everyone.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="grid lg:grid-cols-2 gap-10 items-center"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200"
          alt="mission"
          className="rounded-2xl shadow-md w-full object-cover"
          variants={cardVariants}
          whileHover="hover"
        />
        <motion.div className="space-y-4" variants={cardVariants}>
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We aim to build a smooth and modern platform for gamers of all ages. Whether casual or pro, GameHub delivers clean UI, verified content, and quality support.
          </p>
        </motion.div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="grid lg:grid-cols-2 gap-10 items-center"
      >
        <motion.div className="space-y-4" variants={cardVariants}>
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We envision a community-driven platform where gamers connect, share experiences, and find the games that suit their style. Intuitive, engaging, and inclusive.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200"
          alt="vision"
          className="rounded-2xl shadow-md w-full object-cover"
          variants={cardVariants}
          whileHover="hover"
        />
      </motion.div>

      {/* Review Section */}
      <div className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">What Our Team Says</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-800 text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={review.image || "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200"}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{review.role}</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">“{review.text}”</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="space-y-10"
      >
        <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="text-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={member.image || "https://images.unsplash.com/photo-1603415526960-f4e0f28d9c87?w=200"}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
