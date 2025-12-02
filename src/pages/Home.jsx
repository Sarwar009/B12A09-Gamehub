import React, {useEffect, useState} from 'react';
import { motion } from "framer-motion";
import Slider from '../components/Slider';
import {Data} from '../data/Data';
import Newsletter from '../components/Newsletter';
import {Link} from 'react-router-dom';
import GameCard from '../components/GameCard';
import CategoryCard from '../components/CategoryCard';
import Blogs from '../components/Blogs';
import ChooseUs from '../components/ChooseUs';

const Home = () => {
  const [games, setGames] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect (
    () => {
      setGames (Data);
      document.title = 'GameHub • Home';
      console.log (games);
      setTimeout (() => {
        setGames (Data);
        setLoading (false);
      }, 1000);
    },
    [games]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning" />
      </div>
    );
  }

  const popular = [...games]
    .sort ((a, b) => parseFloat (b.ratings) - parseFloat (a.ratings))
    .slice (0, 8);

  return (
    <div className="mx-auto">

      <Slider slides={games.slice (0, 5)} />

      <div id="popular" className="mt-10 w-11/12 mx-auto">
        <h3 className="text-2xl font-bold m-4">Popular Games</h3>
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {popular.map ((game) => (
            <GameCard key={game.id} game={game} />
          ))}

        </motion.div>
        <button className="flex py-9 mx-auto">
          <Link
            to="/all-games"
            className="w-full btn btn-primary flex items-center justify-center rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            See More
          </Link>
        </button>
          {/* Category Section */}
          <CategoryCard />

{/* Why Choose Us Section */}
          <ChooseUs />
{/* Blog Section */}
          <Blogs />
{/* Newsletter Section */}
        <Newsletter />
      </div>

      
    </div>
  );
};

export default Home;
