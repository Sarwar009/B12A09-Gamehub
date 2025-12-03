import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Data} from '../data/Data';

export default function GameDetails () {
  const {id} = useParams ();
  const game = Data.find (g => g.id === id);
  useEffect (
    () => {
      document.title = game ? `GameHub • ${game.title}` : 'GameHub • Game';
    },
    [game]
  );

  if (!game) return <div className="p-8">Game not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-800 rounded mt-8">
    <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full  object-cover rounded"
        />
      <div className="flex flex-col md:flex-row gap-6">
        
        <div>
          <h1 className="text-2xl font-bold py-3">{game.title}</h1>
          <p className="text-slate-300 mt-2">{game.longDescription}</p>
          <p className="mt-4">Category: <strong>{game.category}</strong></p>
          <p>Developer: <strong>{game.developer}</strong></p>
          <p>Rating: <strong>{game.ratings}</strong></p>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-4 py-2 bg-indigo-600 rounded"
          >
            Install
          </a>
        </div>
      </div>
    </div>
  );
}
