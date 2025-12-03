import {motion} from 'framer-motion';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function GameCard({game}) {
  const navigate = useNavigate ();
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8, ease: 'easeOut'}}
      onClick={() => navigate (`/game/${game.id}`)}
      className="bg-slate-800 rounded-lg overflow-hidden shadow cursor-pointer"
    >
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-44 object-cover"
      />
      <motion.div
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: 'easeOut'}}
        className="p-4"
      >
        <h3 className="text-lg font-semibold">
          {game.title}
        </h3>
        <p className="text-sm text-slate-300">
          {game.category} · {game.developer}
        </p>
        <p className="text-sm text-slate-300 py-2">
          {game.shortDescription}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-yellow-400 font-bold">{game.ratings} ★</div>
          <button
            onClick={() => navigate (`/game/${game.id}`)}
            className="px-3 py-1 border rounded text-sm cursor-pointer"
          >
            View
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
