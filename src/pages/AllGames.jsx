import React, {useEffect, useMemo, useState} from 'react';
import {Data} from '../data/Data';
import GameCard from '../components/GameCard';
import {motion} from 'framer-motion';

export default function AllGames () {
  const [query, setQuery] = useState ('');
  const [category, setCategory] = useState ('All');
  const [sortBy, setSortBy] = useState ('ratingDesc');
  const [visibleCount, setVisibleCount] = useState (9);

  useEffect (() => {
    document.title = 'GameHub • All Games';
  }, []);

  const categories = useMemo (() => {
    const set = new Set (Data.map (g => g.category || 'Uncategorized'));
    return ['All', ...Array.from (set)];
  }, []);

  const filtered = useMemo (
    () => {
      let arr = Data.filter (g => {
        const q = query.trim ().toLowerCase ();
        const matchesQ =
          !q ||
          g.title.toLowerCase ().includes (q) ||
          (g.developer || '').toLowerCase ().includes (q) ||
          (g.category || '').toLowerCase ().includes (q);
        const matchesCategory = category === 'All' || g.category === category;
        return matchesQ && matchesCategory;
      });

      if (sortBy === 'ratingDesc') {
        arr.sort ((a, b) => parseFloat (b.ratings) - parseFloat (a.ratings));
      } else if (sortBy === 'ratingAsc') {
        arr.sort ((a, b) => parseFloat (a.ratings) - parseFloat (b.ratings));
      } else {
        arr.sort ((a, b) => a.id - b.id);
      }

      return arr;
    },
    [query, category, sortBy]
  );

  const visibleGames = filtered.slice (0, visibleCount);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">All Games</h1>
        <p className="text-slate-300 mt-1">Browse the full GameHub catalog.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 bg-slate-800 p-4 rounded max-h-[400px]">
          <label className="block text-sm font-medium mb-1">Search</label>
          <input
            value={query}
            onChange={e => setQuery (e.target.value)}
            placeholder="Search Here..."
            className="w-full p-2 rounded bg-slate-700 mb-4"
          />

          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={e => setCategory (e.target.value)}
            className="w-full p-2 rounded bg-slate-700 mb-4"
          >
            {categories.map (c => <option key={c} value={c}>{c}</option>)}
          </select>

          <label className="block text-sm font-medium mb-1">Sort by</label>
          <select
            value={sortBy}
            onChange={e => setSortBy (e.target.value)}
            className="w-full p-2 rounded bg-slate-700 mb-4"
          >
            <option value="ratingDesc">Rating: High → Low</option>
            <option value="ratingAsc">Rating: Low → High</option>
          </select>

          <div className="text-sm text-slate-400">
            <div>
              Total games:
              {' '}
              <strong className="text-slate-100">{filtered.length}</strong>
            </div>
            <div className="mt-3">
              <button
                onClick={() => {
                  setQuery ('');
                  setCategory ('All');
                  setSortBy ('ratingDesc');
                }}
                className="btn btn-error px-3 py-1 border rounded cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          {visibleGames.length === 0
            ? <div className="p-6 bg-slate-800 rounded">No games found.</div>
            : <div
                
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleGames.map (g => <GameCard key={g.id} game={g} />)}
              </div>}

          <div className="mt-6 flex items-center justify-center gap-3">
            {visibleCount < filtered.length
              ? <button
                  onClick={() => setVisibleCount (v => v + 9)}
                  className="px-4 py-2 bg-indigo-600 rounded"
                >
                  Load more
                </button>
              : filtered.length > 0
                  ? <button
                      onClick={() => setVisibleCount (9)}
                      className="px-4 py-2 border rounded"
                    >
                      Show less
                    </button>
                  : null}
          </div>
        </div>
      </div>
    </div>
  );
}
