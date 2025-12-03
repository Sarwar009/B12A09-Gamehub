import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-indigo-600 font-bold">GH</div>
            <div className="text-white font-bold">GameHub</div>
          </div>
          <p className="mt-4 text-sm text-slate-300">Find and explore curated games, deals and news for every kind of player.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/popular" className="hover:underline">Popular Games</NavLink></li>
            <li><NavLink to="/all-games" className="hover:underline">All Games</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
  );
}
