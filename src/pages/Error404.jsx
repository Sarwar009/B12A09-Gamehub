import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error404() {

   useEffect (() => {
      document.title = 'GameHub • All Games';
    }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-900 flex flex-col justify-center items-center overflow-hidden">
      <h1
        className="text-[8rem] md:text-[12rem] font-bold text-white text-center animate-bounce"
        style={{
          animation: "bounceY 2s infinite",
        }}
      >
        404
      </h1>

      <p
        className="text-white text-xl md:text-2xl mt-4 opacity-0 animate-fadeIn"
        style={{ animation: "fadeIn 1.5s forwards 0.5s" }}
      >
        Oops! Page not found
      </p>
      <Link to='/' className="btn btn-success my-4">Return to home</Link>

      {/* Waving emoji character */}
      <div
        className="text-[5rem] mt-10"
        style={{
          display: "inline-block",
          animation: "wave 2s infinite",
          transformOrigin: "70% 70%",
        }}
      >
        👋
      </div>

      {/* Floating circles */}
      <div
        className="absolute w-6 h-6 bg-purple-500 rounded-full top-10 left-20"
        style={{ animation: "float 4s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute w-8 h-8 bg-pink-500 rounded-full top-32 right-24"
        style={{ animation: "float 4s ease-in-out infinite", animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute w-4 h-4 bg-green-400 rounded-full bottom-20 left-40"
        style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}
      ></div>
      <div
        className="absolute w-5 h-5 bg-yellow-400 rounded-full bottom-32 right-32"
        style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1.2s" }}
      ></div>
    </div>
  );
}
