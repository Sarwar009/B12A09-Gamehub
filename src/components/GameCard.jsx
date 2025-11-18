import {motion} from 'framer-motion';
import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function GameCard({game}) {
  const navigate = useNavigate ();
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      whileHover={{scale: 1.1}}
      onClick={() => navigate (`/game/${game.id}`)}
      className="bg-slate-800 rounded-lg overflow-hidden shadow cursor-pointer"
    >
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {game.title}
        </h3>
        <p className="text-sm text-slate-300">
          {game.category} · {game.developer}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-yellow-400 font-bold">{game.ratings} ★</div>
          <button
            onClick={() => navigate (`/game/${game.id}`)}
            className="px-3 py-1 border rounded text-sm cursor-pointer"
          >
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
}
