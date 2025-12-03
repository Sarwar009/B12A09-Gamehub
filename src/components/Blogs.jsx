import React from 'react';
import {motion} from 'framer-motion';
import {blogs} from '../data/LandingPageData';

const Blogs = () => {
  return (
    <div>
      <motion.div
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: 'easeOut'}}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map ((blog, idx) => (
            <motion.div
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: 'easeOut'}}
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition-transform overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: 'easeOut'}}
                className="p-4"
              >
                <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {blog.summary}
                </p>
                <a
                  href={blog.link}
                  className="btn btn-primary py-3 px-5 rounded-lg my-4"
                >
                  Read More
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;
