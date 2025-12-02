import { motion } from "framer-motion";
import { reviews, team } from "../data/AboutData";

export default function AboutPage() {
  return (
    <div className="px-6 lg:px-20 py-16 space-y-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">About GameHub</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          GameHub is your all-in-one gaming marketplace where players explore, compare, and discover the best games. Our goal is to make gaming easier, more fun, and more accessible for everyone.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-10 items-center"
      >
        <img
          src="https://i.ibb.co/9qRrYsT/controller.jpg"
          className="rounded-2xl shadow-md"
          alt="mission"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            We aim to build a smooth and modern platform for gamers of all ages. Whether you are a casual gamer or a pro enthusiast, GameHub brings the best experience with clean UI, verified content, and quality support.
          </p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to create a community-driven platform where gamers connect, share experiences, and find the games that suit their style. We envision a space that is intuitive, engaging, and inclusive.
          </p>
        </div>
        <img
          src="https://i.ibb.co/0J6kqYV/gaming-vision.jpg"
          className="rounded-2xl shadow-md"
          alt="vision"
        />
      </motion.div>

      {/* Review Section */}
      <div className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">What Our Team Says</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-800"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{review.name}</h3>
              <p className="text-gray-600 text-center text-sm mt-2">{review.role}</p>
              <p className="mt-4 text-gray-600 text-center">“{review.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800">
              <img src={member.image} alt={member.name} className="w-20 h-20 mx-auto rounded-full mb-3" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

